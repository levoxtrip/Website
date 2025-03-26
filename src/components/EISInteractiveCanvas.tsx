import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
const EISInteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points[]>([]);
  const frameRef = useRef<number | null>(null);

  const [storyText, setStoryText] = useState<string>("");
  const [textStyle, setTextStyle] = useState<any>({});

  useEffect(() => {
    if (!canvasRef.current) return;

    // Variables for mouse tracking
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let targetMouseX = 0,
      targetMouseY = 0;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0xff0000, 0.005);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      2,
      2000
    );
    camera.position.z = 200;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: "high-performance",
      alpha: true, // Important for transparent background
    });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio to reduce flickering
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Transparent background

    // Enable depth testing and set logarithmic depth buffer to help with z-fighting
    renderer.logarithmicDepthBuffer = true;

    // Light setup
    const ambientLight = new THREE.AmbientLight("red", 2.0);
    scene.add(ambientLight);

    // Create textures loader with better error handling
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "anonymous";

    // Define animation controls
    let cameraControlledByMouse = true;

    // Generate iceberg vertices
    const generateIcebergParticles = (geometry, particleCount) => {
      const edges = new THREE.EdgesGeometry(geometry);
      const positions = edges.attributes.position.array;
      const particleVertices = new Float32Array(particleCount * 3);

      // Make sure we have enough positions to sample from
      if (positions.length < 6) {
        console.error("Not enough positions in geometry");
        return particleVertices;
      }

      for (let i = 0; i < particleCount; i++) {
        // Make sure we don't exceed the array bounds
        const maxEdgeIndex = Math.floor(positions.length / 6) - 1;
        if (maxEdgeIndex <= 0) {
          // Create fallback positions if geometry is too simple
          particleVertices[i * 3] = (Math.random() - 0.5) * 100;
          particleVertices[i * 3 + 1] = (Math.random() - 0.5) * 100;
          particleVertices[i * 3 + 2] = (Math.random() - 0.5) * 100;
          continue;
        }

        const edgeIndex = Math.floor(Math.random() * maxEdgeIndex) * 6;
        const t = Math.random(); // Interpolation factor

        // Get the start and end points of the edge
        const x1 = positions[edgeIndex];
        const y1 = positions[edgeIndex + 1];
        const z1 = positions[edgeIndex + 2];
        const x2 = positions[edgeIndex + 3];
        const y2 = positions[edgeIndex + 4];
        const z2 = positions[edgeIndex + 5];

        // Interpolate between edge points
        particleVertices[i * 3] = x1 + (x2 - x1) * t;
        particleVertices[i * 3 + 1] = y1 + (y2 - y1) * t;
        particleVertices[i * 3 + 2] = z1 + (z2 - z1) * t;
      }

      return particleVertices;
    };

    // Function to create particles efficiently with better z-order handling
    function createParticles(scene, sprite, width, count, targetPositions) {
      const geometry = new THREE.BufferGeometry();

      // Generate random initial positions with controlled z-depth
      const initialPositions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        initialPositions[idx] = width * Math.random() - width / 2; // x
        initialPositions[idx + 1] = width * Math.random() - width / 2; // y
        initialPositions[idx + 2] = width * Math.random() - width / 2; // z
      }

      // Store positions in the geometry
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(initialPositions, 3)
      );

      // Create repeated target positions to match particle count
      const repeatedTargetPositions = new Float32Array(count * 3);
      const targetPosCount = targetPositions.length / 3;

      for (let i = 0; i < count; i++) {
        const sourceIndex = (i % targetPosCount) * 3;
        const destIndex = i * 3;

        repeatedTargetPositions[destIndex] =
          targetPositions[sourceIndex] - Math.random() * 10;
        repeatedTargetPositions[destIndex + 1] =
          targetPositions[sourceIndex + 1] - Math.random() * 10;
        repeatedTargetPositions[destIndex + 2] =
          targetPositions[sourceIndex + 2] - Math.random() * 10;
      }

      geometry.setAttribute(
        "targetPosition",
        new THREE.BufferAttribute(repeatedTargetPositions, 3)
      );

      // Create material with optimized settings and better depth handling
      const material = new THREE.PointsMaterial({
        size: 25,
        sizeAttenuation: true, // Enable size attenuation for better depth perception
        map: sprite,
        transparent: true,
        alphaTest: 0.3, // Adjust to reduce flickering
        blending: THREE.AdditiveBlending,
        depthWrite: false, // Important to avoid z-fighting with transparent particles
        depthTest: true,
      });

      const particles = new THREE.Points(geometry, material);
      particles.frustumCulled = true;
      particles.userData.initialPositions = initialPositions.slice();

      // Add slight z-offset to different particle systems to reduce z-fighting
      particles.renderOrder = Math.random(); // Give each particle system a unique render order

      scene.add(particles);
      return particles;
    }

    // Load model and create particles after it's loaded
    const loader = new GLTFLoader();
    loader.load(
      "src/assets/websiteIceBerg.glb",
      (gltf) => {
        const model = gltf.scene;
        let particlePositions: Float32Array | null = null;

        model.traverse((child) => {
          if (child.isMesh) {
            const geometry = child.geometry; // Get the geometry
            console.log("Extracted Geometry:", geometry);

            // Generate the particle positions from the geometry
            particlePositions = generateIcebergParticles(geometry, 500);
            // console.log("Particle Positions:", particlePositions);
          }
        });

        // If we couldn't get positions from the model, create fallback
        if (!particlePositions) {
          console.warn(
            "Could not extract geometry from model, using fallback positions"
          );
          particlePositions = new Float32Array(500 * 3);
          for (let i = 0; i < 500; i++) {
            particlePositions[i * 3] = (Math.random() - 0.5) * 100;
            particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
          }
        }

        // Now that we have the positions, load textures and create particles
        Promise.all([
          textureLoader.loadAsync("./img/0.png"),
          textureLoader.loadAsync("./img/1.png"),
        ])
          .then(([sprite0, sprite1]) => {
            // Create geometry and particles with different counts to reduce exact overlaps
            const width = 500;
            const particleCount1 = 3000;
            const particleCount2 = 2900; // Slightly different count helps avoid exact overlapping

            // Create instances for both particle types
            const particles0 = createParticles(
              scene,
              sprite0,
              width,
              particleCount1,
              particlePositions
            );

            const particles1 = createParticles(
              scene,
              sprite1,
              width,
              particleCount2,
              particlePositions
            );

            // Store particles for later animation
            particlesRef.current = [particles0, particles1];

            // Start animation loop after textures are loaded
            animate();
          })
          .catch((error) => {
            console.error("Error loading textures:", error);
          });
      },
      // Add error handling for model loading
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened loading the model:", error);
        // Create fallback in case model fails to load
        const fallbackPositions = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
          fallbackPositions[i * 3] = (Math.random() - 0.5) * 100;
          fallbackPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
          fallbackPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }

        Promise.all([
          textureLoader.loadAsync("./img/0.png"),
          textureLoader.loadAsync("./img/1.png"),
        ])
          .then(([sprite0, sprite1]) => {
            const width = 500;
            const particleCount1 = 3000;
            const particleCount2 = 2900;

            const particles0 = createParticles(
              scene,
              sprite0,
              width,
              particleCount1,
              fallbackPositions
            );
            const particles1 = createParticles(
              scene,
              sprite1,
              width,
              particleCount2,
              fallbackPositions
            );

            particlesRef.current = [particles0, particles1];
            animate();
          })
          .catch((error) => {
            console.error("Error loading textures in fallback:", error);
          });
      }
    );

    const boxGroup = new THREE.Group();

    loader.load("src/assets/BoxIce.glb", (gltf) => {
      const box = gltf.scene;

      box.position.set(0, 0, 0);
      box.scale.set(4, 4, 4);

      boxGroup.add(box);
    });

    loader.load("src/assets/Screen_ice.glb", (gltf) => {
      const screen = gltf.scene;
      screen.position.set(1, 0, 0);
      screen.scale.set(4, 4, 4);
      boxGroup.add(screen);
    });

    const pointLight = new THREE.PointLight("#ff0000", 3);
    pointLight.position.set(0, 2, 0);
    boxGroup.add(pointLight);

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
    scene.add(pointLightHelper);

    boxGroup.position.set(0, 0, -420);
    boxGroup.rotation.y = -Math.PI * 0.5;
    scene.add(boxGroup);

    // Animate the particles to form iceberg
    function animateToIceberg(duration = 3) {
      if (!particlesRef.current || particlesRef.current.length === 0) {
        console.warn("Particles not yet created, animation skipped");
        return;
      }

      particlesRef.current.forEach((particles) => {
        const positions = particles.geometry.attributes.position;
        const targetPositions = particles.geometry.attributes.targetPosition;

        if (!targetPositions) {
          console.error("Target positions not found on particle geometry");
          return;
        }

        // For each vertex, animate from current position to target position
        for (let i = 0; i < positions.count; i++) {
          const index = i * 3;

          // Get target position
          const targetX = targetPositions.array[index];
          const targetY = targetPositions.array[index + 1];
          const targetZ = targetPositions.array[index + 2];

          // Animate each particle with a slightly randomized z-value to prevent exact overlapping
          gsap.to(positions.array, {
            [index]: targetX,
            [index + 1]: targetY,
            [index + 2]: targetZ + (Math.random() - 0.5) * 2, // Small z-offset to reduce z-fighting
            duration: duration,
            ease: "power2.out",
            onUpdate: () => {
              positions.needsUpdate = true;
            },
            delay: Math.random() * 0.5,
          });
        }
      });
    }

    // Animate the particles back to random positions
    function animateToRandom(duration = 3) {
      if (!particlesRef.current || particlesRef.current.length === 0) {
        console.warn("Particles not yet created, animation skipped");
        return;
      }

      particlesRef.current.forEach((particles) => {
        const positions = particles.geometry.attributes.position;

        // For each vertex, animate back to a new random position
        for (let i = 0; i < positions.count; i++) {
          const index = i * 3;

          // Create new random position
          const randomX = 500 * Math.random() - 250;
          const randomY = 500 * Math.random() - 250;
          const randomZ = 500 * Math.random() - 250;

          // Animate each particle
          gsap.to(positions.array, {
            [index]: randomX,
            [index + 1]: randomY,
            [index + 2]: randomZ,
            duration: duration,
            ease: "power1.inOut",
            onUpdate: () => {
              positions.needsUpdate = true;
            },
            delay: Math.random() * 0.5,
          });
        }
      });
    }

    function rotateBox() {
      gsap.to(boxGroup.rotation, {
        duration: 4,
        y: 0,
        ease: "power2.Out",
      });
    }

    // Animate the camera with smoother movement
    function moveCamera(targetPosition, duration = 4) {
      cameraControlledByMouse = false;
      let target = null;
      if (clickTotal < 3) {
        target = new THREE.Vector3(0, 0, 0);
      } else {
        target = new THREE.Vector3(0, 0, -420);
      }
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: duration,
        ease: "power2.out",
        onUpdate: () => {
          camera.lookAt(target);
        },
        onComplete: () => {
          camera.lookAt(target);

          // Adjust mouse position to avoid jump
          targetMouseX = targetPosition.x;
          targetMouseY = -targetPosition.y;
          mouseX = targetPosition.x;
          mouseY = -targetPosition.y;
          if (clickTotal < 3) {
            cameraControlledByMouse = true;
          }
        },
      });
    }

    // Event listeners with throttling for mouse movement
    let lastMoveTime = 0;
    const moveThreshold = 16; // ~60fps throttling

    const onPointerMove = (event) => {
      const currentTime = Date.now();
      if (currentTime - lastMoveTime < moveThreshold) return;

      lastMoveTime = currentTime;
      if (event.isPrimary === false) return;

      targetMouseX = event.clientX - windowHalfX;
      targetMouseY = event.clientY - windowHalfY;
    };
    setStoryText(
      "Climate change data often exists as distant numbers and scientific models that fail to create emotional resonance with the average person. \n\n The idea of melting ice masses destroyed by us human beings is there, but still remains abstract."
    );

    let clickTotal = 0;
    const handleDoubleClick = (e) => {
      clickTotal++;
      let newStyle = `text-one-ice`;
      switch (clickTotal) {
        case 1:
          animateToIceberg();
          setStoryText(
            "We understand intellectually that glaciers are melting, but the visceral reality of this destruction remains elusive."
          );
          newStyle = `text-two`;
          break;
        case 2:
          // animateToRandom();
          moveCamera({
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
            z: 300 + Math.random() * 100,
          });
          setStoryText(
            "What happens when individual parts of these masses face each other? How might we bridge the gap between data and lived experience?"
          );
          newStyle = `text-three`;
          break;
        case 3:
          // animateToRandom();
          cameraControlledByMouse = false;
          moveCamera(
            {
              x: 0,
              y: 6,
              z: -390,
            },
            15
          );

          if (particlesRef.current) {
            particlesRef.current.forEach((particles) => {
              if (particles.geometry) particles.geometry.dispose();
              if (particles.material) {
                if (particles.material.map) particles.material.map.dispose();
                particles.material.dispose();
              }
            });
          }
          setStoryText(
            "The installation 01101000EIS01110011 invites viewers to confront this abstract concept through direct sensory experience."
          );
          newStyle = `text-three-ice`;
          break;
        case 4:
          ambientLight.color = new THREE.Color("white");
          scene.fog = new THREE.FogExp2(0x000000, 0.005);
          rotateBox();

          newStyle = `text-three-ice`;
          break;
      }
      setTextStyle(newStyle);
    };
    let scrollTotal = 0;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const deltaY = event.deltaY || event.detail || -event.wheelDelta;

      if (clickTotal === 4) {
        // Apply the delta directly to the camera position
        const scrollDelta = deltaY * 0.001;

        // Calculate new position
        const newPosition = camera.position.z + scrollDelta;

        // Clamp between -420 (forward limit) and -400 (backward limit)
        camera.position.z = Math.max(-415, Math.min(-390, newPosition));

        // Important: don't accumulate scrollTotal at all
        // Remove this line: scrollTotal += deltaY * 0.001;
      } else {
        scrollTotal = 0;
      }
    };

    window.addEventListener("dblclick", handleDoubleClick);
    window.addEventListener("wheel", handleWheel, { passive: false });
    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    document.body.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onWindowResize);

    // Animation functions with proper RAF management
    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      render();
    }

    function render() {
      // Smoother camera movement with lerping
      if (cameraControlledByMouse) {
        // Smooth mouse input first (double smoothing)
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // Then smooth camera position
        camera.position.x += (mouseX - camera.position.x) * 0.01;
        camera.position.y += (-mouseY - camera.position.y) * 0.01;
        if (clickTotal < 3) {
          camera.lookAt(scene.position);
        }
      }

      renderer.render(scene, camera);
    }

    // Cleanup function
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      document.body.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("dblclick", handleDoubleClick);
      window.removeEventListener("resize", onWindowResize);

      // Dispose of resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      });

      if (particlesRef.current) {
        particlesRef.current.forEach((particles) => {
          if (particles.geometry) particles.geometry.dispose();
          if (particles.material) {
            if (particles.material.map) particles.material.map.dispose();
            particles.material.dispose();
          }
        });
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="welcome-canvas">
      <canvas ref={canvasRef} id="WelcomeCanvas"></canvas>
      <p className={`zoom-into-story-text ${textStyle}`}>{storyText}</p>
    </div>
  );
};

export default EISInteractiveCanvas;
