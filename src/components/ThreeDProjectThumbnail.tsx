import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThreeDProjectThumbnail = ({ 
  imageUrl, 
  vertexShader, 
  fragmentShader,
  uniforms: customUniforms = {} 
}) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const requestRef = useRef(null);
  const isHoveredRef = useRef(false);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // Default to center
  const hoverStartTimeRef = useRef(0); // Track when hover starts
  
  // Track container dimensions
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Function to measure container size
  const updateDimensions = () => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      // Only update if dimensions actually changed
      if (width !== dimensions.width || height !== dimensions.height) {
        setDimensions({ width, height });
        
        // Update renderer and camera if they exist
        if (rendererRef.current && cameraRef.current) {
          rendererRef.current.setSize(width, height);
          
          if (cameraRef.current.isOrthographicCamera) {
            const aspectRatio = width / height;
            cameraRef.current.left = -aspectRatio;
            cameraRef.current.right = aspectRatio;
            cameraRef.current.top = 1;
            cameraRef.current.bottom = -1;
            cameraRef.current.updateProjectionMatrix();
          }
        }
      }
    }
  };
  
  // Initialize Three.js scene
  const initThreeJs = () => {
    if (!containerRef.current) return;
    
    // Clear any existing content first
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    // Get initial dimensions
    const { width, height } = dimensions;
    const aspectRatio = width / height;
    
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup - orthographic to maintain exact dimensions
    const camera = new THREE.OrthographicCamera(
      -aspectRatio, aspectRatio, 1, -1, 0.1, 100
    );
    camera.position.z = 1;
    cameraRef.current = camera;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Load texture
    const loader = new THREE.TextureLoader();
    loader.load(imageUrl, (texture) => {
      // Configure texture settings for proper wrapping
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      
      // Combine built-in uniforms with custom uniforms
      const baseUniforms = {
        tDiffuse: { value: texture },
        uHover: { value: 0.0 },
        uTime: { value: 0.0 },
        uHoverStartTime: { value: 0.0 }, // Add hover start time uniform
        uMouse: { value: new THREE.Vector2(0.5, 0.5) }  // Default to center
      };
      
      const uniforms = { ...baseUniforms, ...customUniforms };
      
      // Create shader material
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true
      });
      materialRef.current = material;
      
      // Create mesh that matches the aspect ratio
      const planeGeo = new THREE.PlaneGeometry(2 * aspectRatio, 2);
      const mesh = new THREE.Mesh(planeGeo, material);
      scene.add(mesh);
      
      // Start animation loop
      let startTime = Date.now();
      const animate = () => {
        requestRef.current = requestAnimationFrame(animate);
        
        // Update time uniform for animations
        const currentTime = (Date.now() - startTime) * 0.001;
        if (materialRef.current && materialRef.current.uniforms.uTime) {
          materialRef.current.uniforms.uTime.value = currentTime;
        }
        
        // Update hover value with easing
        if (materialRef.current && materialRef.current.uniforms.uHover) {
          const current = materialRef.current.uniforms.uHover.value;
          const target = isHoveredRef.current ? 1.0 : 0.0;
          
          // If we're transitioning from not hovered to hovered
          if (target > current && current < 0.1) {
            // Reset hover start time when hover begins
            hoverStartTimeRef.current = currentTime;
            if (materialRef.current.uniforms.uHoverStartTime) {
              materialRef.current.uniforms.uHoverStartTime.value = currentTime;
            }
          }
          
          materialRef.current.uniforms.uHover.value += (target - current) * 0.1;
        }
        
        // Update mouse position uniform
        if (materialRef.current && materialRef.current.uniforms.uMouse) {
          materialRef.current.uniforms.uMouse.value.x = mouseRef.current.x;
          materialRef.current.uniforms.uMouse.value.y = mouseRef.current.y;
        }
        
        renderer.render(scene, camera);
      };
      
      animate();
    });
  };
  
  // Initialize and handle resizing
  useEffect(() => {
    // Initial measurement of container
    updateDimensions();
    
    // Wait a frame to ensure dimensions are set
    requestAnimationFrame(() => {
      initThreeJs();
    });
    
    // Set up resize handler
    const handleResize = () => {
      updateDimensions();
    };
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    
    const handleMouseEnter = () => {
      isHoveredRef.current = true;
    };
    
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
    };
    
    const handleMouseMove = (e) => {
      if (containerRef.current && isHoveredRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate normalized coordinates (0 to 1)
        mouseRef.current.x = (e.clientX - rect.left) / rect.width;
        mouseRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height; // Invert Y axis
      }
    };
    
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, [imageUrl, vertexShader, fragmentShader]);
  
  // Re-initialize when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      // Only re-init if we already have a renderer (avoids double init)
      if (rendererRef.current) {
        initThreeJs();
      }
    }
  }, [dimensions]);
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        overflow: 'hidden'
      }} 
    />
  );
};

export default ThreeDProjectThumbnail;