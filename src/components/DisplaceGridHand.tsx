import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const DisplaceGridHand = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Clean up any existing children first
    while (currentMount.firstChild) {
      currentMount.removeChild(currentMount.firstChild);
    }

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 10);
    spotLight.castShadow = true;
    spotLight.position.set(0, 4, 0);

    scene.add(spotLight);

    const pointLight = new THREE.PointLight(0xffffff, 20.0);
    pointLight.castShadow = true;
    pointLight.position.set(0, 2, 0);
    scene.add(pointLight);

    // Load displacement map
    const textureLoader = new THREE.TextureLoader();
    const displacementMap = textureLoader.load(`src/assets/img/height.png`);
    displacementMap.wrapS = displacementMap.wrapT =
      THREE.MirroredRepeatWrapping;
    let hand = null;
    const loader = new GLTFLoader();
    loader.load("src/assets/box.glb", (gltf) => {
      console.log(gltf.scene);

      scene.add(gltf.scene);
    });

    loader.load("src/assets/hand.glb", (gltf) => {
      console.log(gltf.scene);
      gltf.scene.rotation.y = THREE.MathUtils.degToRad(90);
      gltf.scene.position.y = -0.9;
      gltf.scene.position.x = -3.52;
      hand = gltf.scene;
      scene.add(gltf.scene);
    });

    // Create plane geometry with high subdivision
    const geometry = new THREE.PlaneGeometry(3, 1.8, 60, 60);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1e90ff, // Dodger Blue
      wireframe: true, // This creates the grid look
      displacementMap: displacementMap,
      displacementScale: 0.4,
      side: THREE.DoubleSide,
    });

    // function createBackMaterial() {
    //   let m = new THREE.MeshBasicMaterial({
    //     color: 0x66775f,
    //     side: THREE.BackSide,
    //     onBeforeCompile: (shader) => {
    //       shader.fragmentShader = `
    //         ${shader.fragmentShader}
    //       `.replace(
    //         `vec4 diffuseColor = vec4( diffuse, opacity );`,
    //         `
    //         vec3 col = mix(diffuse, diffuse + vec3(0.75), smoothstep(0.5, 0.7, vUv.y));
    //         vec4 diffuseColor = vec4( col, opacity );
    //         `
    //       );
    //       //console.log(shader.fragmentShader);
    //     },
    //   });
    //   m.defines = { USE_UV: "" };
    //   return m;
    // }

    // function createBackGeometry() {
    //   let g = new THREE.SphereGeometry(500, 32, 16);
    //   g.translate(6, 0, 0);
    //   return g;
    // }

    // let backGeom = createBackGeometry();
    // let backMat = createBackMaterial();
    // let backMesh = new THREE.Mesh(backGeom, backMat);
    // scene.add(backMesh);

    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee, // Dodger Blue
    });

    const ground = new THREE.Mesh(geometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -14.08;
    ground.scale.setScalar(200);
    scene.add(ground);

    const blkPlaneGeo = new THREE.PlaneGeometry(3.2, 2, 1, 1);
    const blkMat = new THREE.MeshStandardMaterial({
      color: 0x000000, // Dodger Blue
    });

    const blkPlane = new THREE.Mesh(blkPlaneGeo, blkMat);
    blkPlane.rotation.x = -Math.PI / 2;
    blkPlane.position.z = -0.08;
    scene.add(blkPlane);
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.z = -0.08;
    scene.add(plane);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 5;
    controls.maxDistance = 15;
    // controls.target.set(0, 0, 0);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      plane.updateMatrixWorld();

      // pointLight.position.set(mouse.x, mouse.y, 10);

      const intersects = raycaster.intersectObject(plane);
      if (intersects.length > 0) {
        const intersection = intersects[0];
        const uv = intersection.uv;

        hand.position.x = uv.x - 1.92;
        if (uv) {
          displacementMap.offset.set(uv.x - 0.5, uv.y - 0.5);
          displacementMap.needsUpdate = true;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // material.displacementScale =
      //   0.3 + (Math.random() * 2 - 1) * (Math.random() * 0.2);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      controls.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className="welcome-canvas"
      ref={mountRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default DisplaceGridHand;
