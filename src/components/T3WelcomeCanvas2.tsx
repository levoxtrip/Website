import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { projects } from "../assets/data/projects";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const T3WelcomeCanvas2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  // Refs that persist across render
  const sceneRef = useRef<THREE.Scene | null>(null);
  const boxesRef = useRef<THREE.Mesh[]>([]);
  const originalMaterialsRef = useRef<THREE.Material[]>([]);
  const highlightMaterialsRef = useRef<THREE.Material[]>([]);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const isDraggingRef = useRef<boolean>(false);
  const moveCountRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight * 0.65,
    };

    // Set up scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      2000
    );
    camera.position.z = 30 ;
    camera.position.y = 3;
    scene.add(camera);

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);

    // Set up lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // Set up orbit controls
    const orbControls = new OrbitControls(camera, renderer.domElement);
    orbControls.autoRotate = true;
    orbControls.enableDamping = true;

    // Create boxes
    const boxes: THREE.Mesh[] = [];
    const originalMaterials: THREE.Material[] = [];
    const highlightMaterials: THREE.Material[] = [];
    const loader = new THREE.TextureLoader();

    // Create a box for each project
    for (let i = 0; i < projects.length; i++) {
      const ranScale = 1 + Math.random() * 4;
      const boxGeo = new THREE.BoxGeometry(ranScale, ranScale, ranScale);

      // Create wireframe material as the original material
      const originalMaterial = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0xffffff,
      });

      // Create textured material as the highlight material
      const highlightMaterial = new THREE.MeshBasicMaterial({
        map: loader.load(projects[i].thumbnailUrl),
        wireframe: false,
      });

      // Create mesh with original material
      const boxMesh = new THREE.Mesh(boxGeo, originalMaterial);

      // Set random position
      boxMesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );

      // Store project index in userData
      boxMesh.userData = {
        projectIndex: i,
        projectId: projects[i].id,
      };

      // Store mesh and materials
      boxes.push(boxMesh);
      originalMaterials.push(originalMaterial);
      highlightMaterials.push(highlightMaterial);

      // Add to scene
      scene.add(boxMesh);
    }

    // Store refs for later use
    boxesRef.current = boxes;
    originalMaterialsRef.current = originalMaterials;
    highlightMaterialsRef.current = highlightMaterials;

    // Animation function to move boxes randomly
    const animateBoxes = () => {
      boxes.forEach((box) => {
        // Fix: Removed unused 'index' parameter
        // Pick a random axis
        const axis = ["x", "y", "z"][Math.floor(Math.random() * 3)];
        
        // Fix: Properly type the target object with index signature
        const target: { [key: string]: number } = {};
        target[axis] = (Math.random() - 0.5) * 10;

        // Animate to new position
        gsap.to(box.position, {
          [axis]: target[axis],
          duration: 3,
          ease: "power2.inOut",
          onComplete: () => {
            // Keep boxes within bounds
            if (Math.abs(box.position.x) > 15)
              box.position.x = Math.sign(box.position.x) * 15;
            if (Math.abs(box.position.y) > 15)
              box.position.y = Math.sign(box.position.y) * 15;
            if (Math.abs(box.position.z) > 15)
              box.position.z = Math.sign(box.position.z) * 15;
          },
        });
      });

      // Schedule next animation
      setTimeout(animateBoxes, 5000);
    };

    // Start animations
    animateBoxes();

    // Mouse event handlers
    // Fix: Added type for event parameter
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // If mouse is moving while button is down, count as dragging
      if (event.buttons > 0) {
        moveCountRef.current++;
        if (moveCountRef.current > 3) {
          isDraggingRef.current = true;
        }
      }
    };

    const handleMouseDown = () => {
      moveCountRef.current = 0;
      isDraggingRef.current = false;
    };

    const handleMouseUp = () => {
      // If not dragging, check for clicks on boxes
      if (!isDraggingRef.current && moveCountRef.current < 5) {
        const raycaster = raycasterRef.current;
        raycaster.setFromCamera(mouseRef.current, camera);

        const intersects = raycaster.intersectObjects(boxes);

        if (intersects.length > 0) {
          const object = intersects[0].object as THREE.Mesh;
          const projectIndex = object.userData.projectIndex;

          // Navigate using the same path format as the first implementation
          navigate(`/projects/${projects[projectIndex].id}`);
          console.log(`Navigating to project ${projectIndex}`);
        }
      }

      // Reset drag state
      isDraggingRef.current = false;
    };

    // Function to reset all materials to original
    const resetAllMaterials = () => {
      boxes.forEach((box, index) => {
        box.material = originalMaterials[index];
      });
      setHoveredBox(null);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    canvasRef.current.addEventListener("mousedown", handleMouseDown);
    canvasRef.current.addEventListener("mouseup", handleMouseUp);
    canvasRef.current.addEventListener("mouseleave", resetAllMaterials);

    // Update function called each frame
    const raycaster = new THREE.Raycaster();
    raycasterRef.current = raycaster;

    const animate = () => {
      // Update controls
      orbControls.update();

      // Update raycaster
      raycaster.setFromCamera(mouseRef.current, camera);

      // Reset all materials first
      boxes.forEach((box, index) => {
        box.material = originalMaterials[index];
      });

      // Check for intersections
      const intersects = raycaster.intersectObjects(boxes);

      // If hovering over a box, highlight it
      if (intersects.length > 0) {
        const object = intersects[0].object as THREE.Mesh;
        const projectIndex = object.userData.projectIndex;

        // Apply highlight material
        object.material = highlightMaterials[projectIndex];

        // Update state for UI
        setHoveredBox(projectIndex);

        // Set cursor
        document.body.style.cursor = "pointer";
      } else {
        // Reset cursor
        document.body.style.cursor = "auto";

        // Reset hovered state
        setHoveredBox(null);
      }

      // Render scene
      renderer.render(scene, camera);

      // Request next frame
      requestAnimationFrame(animate);
    };

    // Start animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;

      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight * 0.65;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousedown", handleMouseDown);
        canvasRef.current.removeEventListener("mouseup", handleMouseUp);
        canvasRef.current.removeEventListener("mouseleave", resetAllMaterials);
      }

      // Dispose resources
      boxes.forEach((box) => {
        scene.remove(box);
        box.geometry.dispose();
        if (box.material instanceof THREE.Material) {
          box.material.dispose();
        }
      });

      originalMaterials.forEach((material) => material.dispose());
      highlightMaterials.forEach((material) => {
        if (material instanceof THREE.MeshStandardMaterial && material.map) {
          material.map.dispose();
        }
        material.dispose();
      });

      renderer.dispose();
    };
  }, [navigate]);

  return (
    <div className="welcome-canvas">
      <canvas ref={canvasRef} id="WelcomeCanvas" />
      {hoveredBox !== null && (
        <div className="hovered-box-info">
          <h3 className="hovered-box-info-header">
            {projects[hoveredBox].title}
          </h3>
          <p className="hovered-box-info-text">
            {projects[hoveredBox].shortDescription}
          </p>
          <p className="hovered-box-info-btn">Click the box to view project</p>
        </div>
      )}
    </div>
  );
};

export default T3WelcomeCanvas2;