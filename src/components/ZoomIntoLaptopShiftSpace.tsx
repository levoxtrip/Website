import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { textureLoad } from "three/tsl";
import gsap from "gsap";

const ZoomIntoLaptopShiftSpace = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [storyText, setStoryText] = useState<string>("");
  const [textStyle, setTextStyle] = useState<any>({});

  useEffect(() => {
    if (!canvasRef.current) return;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.1);
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      200
    );

    const ambientLight = new THREE.AmbientLight("white", 1.0);
    scene.add(ambientLight);

    const texLoader = new THREE.TextureLoader();
    const plane = new THREE.PlaneGeometry(1.6, 0.9, 3, 3);
    const planeMat = new THREE.MeshBasicMaterial();
    const textureScreen = texLoader.load("./img/shift_space/Button.png");
    planeMat.map = textureScreen;
    planeMat.transparent = true;
    const planeMesh = new THREE.Mesh(plane, planeMat);
    planeMesh.scale.set(0.75, 0.75, 0.75);
    scene.add(planeMesh);

    const clock = new THREE.Clock();

    let laptop = new THREE.Group();
    const loader = new GLTFLoader();
    loader.load("src/assets/laptop.glb", (gltf) => {
      laptop = gltf.scene;
      scene.add(gltf.scene);
    });

    const painting1 = new THREE.PlaneGeometry(1.6, 0.9, 3, 3);
    const paintingMat = new THREE.MeshBasicMaterial();

    const texturePainting = texLoader.load("./img/transmorphosis/1_s.jpg");
    paintingMat.map = texturePainting;
    paintingMat.side = THREE.DoubleSide;
    const paintingMesh = new THREE.Mesh(painting1, paintingMat);
    paintingMesh.position.set(-0.45, -1.5, 30);
    scene.add(paintingMesh);
    const painting2 = new THREE.PlaneGeometry(0.9, 1.6, 3, 3);
    const paintingMat2 = new THREE.MeshBasicMaterial();
    paintingMat2.side = THREE.DoubleSide;
    const texturePainting2 = texLoader.load("./img/transmorphosis/1_s.jpg");
    paintingMat2.map = texturePainting2;
    const paintingMesh2 = new THREE.Mesh(painting2, paintingMat2);

    paintingMesh2.position.set(1.5, -0.5, 25);
    scene.add(paintingMesh2);

    const painting3 = new THREE.PlaneGeometry(1.6, 0.9, 3, 3);
    const paintingMat3 = new THREE.MeshBasicMaterial();
    const texturePainting3 = texLoader.load("./img/transmorphosis/1_s.jpg");
    paintingMat3.map = texturePainting3;
    const paintingMesh3 = new THREE.Mesh(painting3, paintingMat3);
    paintingMat3.side = THREE.DoubleSide;

    paintingMesh3.position.set(0.5, 1.5, 15);
    scene.add(paintingMesh3);
    let pointScreen = false;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let notAnimating = true;
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      laptop.updateMatrixWorld();
      const intersects = raycaster.intersectObject(laptop);

      if (intersects.length > 0) {
        if (scrollPathPos > 0.985) {
          if (notAnimating) {
            notAnimating = false;
            gsap.fromTo(
              planeMesh.scale,
              {
                x: 0.75,
                y: 0.75,
                z: 0.75,
              },
              {
                x: 0.8,
                y: 0.8,
                z: 0.8,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              }
            );
          }
          pointScreen = true;
        }
      } else {
        pointScreen = false;
      }
    };
    const handleClick = () => {
      if (pointScreen) {
        window.open("https://the-shift-space.vercel.app/", "_blank");
      }
    };
    window.addEventListener("click", handleClick);

    window.addEventListener("mousemove", handleMouseMove);

    const points = [
      new THREE.Vector3(-5, -1, 40),
      new THREE.Vector3(0, -2, 35),
      new THREE.Vector3(0, 4, 8),
    ];
    const path = new THREE.CatmullRomCurve3(points);
    camera.position.set(points[0]);
    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);

    //Set story text before the first scroll
    setStoryText(
      "Due to the corona pandemic, digital cultural areas are becoming more relevant. The resulting events, however, differ greatly from ‘normal’ cultural events and must be thought and implemented differently."
    );
    let scrollTotal = 0;
    const scrollSpeed = 0.001;
    const scrollMin = 0;
    const scrollMax = 500;
    let scrollPathPos = 0;
    let newStyle = null;
    let scrollY = 0;
    let rotationSpeed = 0;
    const rotSpeed = 0.001;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      scrollY = event.deltaY || event.detail || -event.wheelDelta;
      scrollTotal += scrollY * 0.01;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("wheel", handleWheel, { passive: false });
    let previousTime = 0;
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;

      if (scrollTotal < 0) scrollTotal = 0;
      const clampedScroll = Math.max(
        scrollMin,
        Math.min(scrollMax, scrollTotal)
      );
      scrollPathPos = (clampedScroll - scrollMin) / (scrollMax - scrollMin);

      // Update story text based on scroll position
      if (scrollPathPos < 0.33) {
        setStoryText(
          "Due to the corona pandemic, digital cultural areas are becoming more relevant. The resulting events, however, differ greatly from ‘normal’ cultural events and must be thought and implemented differently."
        );
        //SHOW FRAME 1
        // Adjust style dynamically based on scroll position
        newStyle = `text-one translate-x-[${Math.round(scrollPathPos * 50)}]`;
      } else if (scrollPathPos < 0.66) {
        setStoryText(
          "In the shift space, users can explore the works of various artists by moving and looking around almost like in real life. The gallery comprises ten rooms in which nine artists are exhibited."
        );

        //SHOW FRAME 1
        newStyle = `text-two`;
      } else {
        setStoryText(
          "In order to enhance the experience of a typical analogue art exhibition we used the opportunities of the digital room. Above all, the change in the physics and space of the exhibition as well as the direct intervention in the movement and field of vision of the user enable the new experience a traditional exhibition couldn’t create."
        );
        newStyle = `text-three`;
      }
      setTextStyle(newStyle);

      const pathT = Math.min(1, Math.max(0, scrollPathPos));
      const camPos = path.getPointAt(pathT);
      camera.position.copy(camPos);
      const tangent = path.getTangentAt(pathT).normalize();

      camera.lookAt(camPos.clone().add(tangent));
      const rotSpeed = 1.5;
      paintingMesh.rotation.x = Math.sin(elapsedTime * 0.01) * rotSpeed;
      paintingMesh.rotation.y =
        -Math.PI * 0.5 * Math.cos(elapsedTime * 0.01) * rotSpeed;

      paintingMesh.rotation.x = Math.sin(elapsedTime * 0.01) * rotSpeed;
      paintingMesh.rotation.y =
        -Math.PI * 0.5 * Math.cos(elapsedTime * 0.01) * rotSpeed;

      // paintingMesh2.rotation.x = rotSpeed * deltaTime;
      // paintingMesh2.rotation.y = rotSpeed * deltaTime;
      // paintingMesh2.rotation.z = rotSpeed * deltaTime;

      // paintingMesh3.rotation.x = rotSpeed * deltaTime;
      // paintingMesh3.rotation.y = rotSpeed * deltaTime;
      // paintingMesh3.rotation.z = rotSpeed * deltaTime;

      //LAPTOP Rotate screen with laptop
      planeMesh.rotation.x = laptop.rotation.x - 0.24;
      planeMesh.rotation.y = laptop.rotation.y;
      planeMesh.rotation.z = laptop.rotation.z;

      planeMesh.position.x = laptop.position.x + 0.34;
      planeMesh.position.y = laptop.position.y + 1.32;
      planeMesh.position.z = laptop.position.z - 0.65;

      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="welcome-canvas">
      <canvas ref={canvasRef} id="WelcomeCanvas"></canvas>
      <p className={`zoom-into-story-text ${textStyle}`}>{storyText}</p>
    </div>
  );
};

export default ZoomIntoLaptopShiftSpace;
