import React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { projects } from '../assets/data/projects'
import { useNavigate } from 'react-router-dom'

// Animation configuration
const updateInterval = 5000; // 5 seconds in milliseconds
const animationDuration = 2000; // Time to move from old position to new (2 seconds)
const positionRange = 100; // Range for random positions

const T3WelcomeCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const navigate = useNavigate()
    const [hoveredBox, setHoveredBox] = useState<number | null>(null)
    
    // Refs that persist across render
    const sceneRef = useRef<THREE.Scene | null>(null)
    const boxesRef = useRef<THREE.Mesh[]>([])
    const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster())
    const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2())
    const isDraggingRef = useRef<boolean>(false)
    const moveCountRef = useRef<number>(0)
    
    // Animation refs
    const lastUpdateTimeRef = useRef<number>(Date.now())
    const boxAnimationsRef = useRef<any[]>([])
    
    useEffect(() => {
        if (!canvasRef.current) return
        
        const scene = new THREE.Scene()
        sceneRef.current = scene
        
        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            1,
            1000
        )
        camera.position.z = 200
        
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        })
        renderer.setSize(window.innerWidth, window.innerHeight * 0.8)
        
        // Enable transparency in the renderer
        renderer.setClearColor(0x000000, 0)
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
        ambientLight.castShadow = true
        scene.add(ambientLight)
        
        const spotLight = new THREE.SpotLight(0xffffff, 1)
        spotLight.castShadow = true
        spotLight.position.set(0, 64, 32)
        scene.add(spotLight)
        
        const originalMaterials: THREE.Material[] = []
        const highlightMaterials: THREE.Material[] = []
    
        boxesRef.current = []
        
        for (let i = 0; i < projects.length; i++) {
            const ranSizeX = 20+Math.random() *40;
            const ranSizeY = 20+Math.random() *40;
            const ranSizeZ = 20+Math.random() *40;
            const boxGeo = new THREE.BoxGeometry(ranSizeX, ranSizeY, ranSizeZ)
            const loader = new THREE.TextureLoader();
            
            // Create default material with 0.7 opacity
            const boxMat = new THREE.MeshLambertMaterial({
                map: loader.load(projects[i].thumbnailUrl),
                transparent: true,
                side: THREE.DoubleSide,
                opacity: 0.7
            });
            
            // Create highlight material with 1.0 opacity for hover state
            const highlightMat = new THREE.MeshLambertMaterial({
                map: loader.load(projects[i].thumbnailUrl),
                transparent: false,
         
                opacity: 4.0
            });
            
            const boxMesh = new THREE.Mesh(boxGeo, boxMat)
            
            boxMesh.position.x = 100 * (Math.random() * 2 - 1)
            boxMesh.position.y = 100 * (Math.random() * 2 - 1)
            boxMesh.position.z = 100 * (Math.random() * 2 - 1) - 15
            
            // Store index to be able to identify boxes
            boxMesh.userData = { projectIndex: i }
            
            // Store original and highlight materials
            originalMaterials[i] = boxMat
            highlightMaterials[i] = highlightMat
            
            boxesRef.current.push(boxMesh)
            scene.add(boxMesh)
        }
        
        // Initialize animation data
        initBoxAnimations(boxesRef.current);
        
        const orbControls = new OrbitControls(camera, renderer.domElement)
        orbControls.autoRotate = true;
        orbControls.enableDamping = true;
        // Raycaster
        const raycaster = new THREE.Raycaster()
        raycasterRef.current = raycaster
        
        // Mouse event handlers
        const onMouseDown = () => {
            moveCountRef.current = 0;
            isDraggingRef.current = false;
        };
        
        const onMouseMove = (event: MouseEvent) => {
            const rect = canvasRef.current?.getBoundingClientRect()
            if (!rect) return
            
            mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
            mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
            
            // If mouse is being moved while button is pressed, it's a drag
            if (event.buttons > 0) {
                moveCountRef.current++;
                if (moveCountRef.current > 3) {
                    isDraggingRef.current = true;
                }
            }
        }
        
        // Click handler - use mouseup instead of click to have more control
        const onMouseUp = (event: MouseEvent) => {
            // If we detected dragging, ignore this as a click
            if (isDraggingRef.current || moveCountRef.current > 3) {
                console.log("Ignoring click because we were dragging");
                return;
            }
            
            console.log("Processing click");
            
            // Update mouse position
            const rect = canvasRef.current?.getBoundingClientRect()
            if (!rect) return
            
            mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
            mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
            
            // Update the raycaster
            raycaster.setFromCamera(mouseRef.current, camera)
            
            // Check for intersections
            const intersects = raycaster.intersectObjects(boxesRef.current)
            
            if (intersects.length > 0) {
                const object = intersects[0].object as THREE.Mesh
                const projectIndex = object.userData.projectIndex as number
                
                // Navigate to the project page
                navigate(`/projects/${projects[projectIndex].id}`)
            } else {
                console.log("Click detected but no box was hit")
            }
        }
        
        window.addEventListener('mousemove', onMouseMove)
        renderer.domElement.addEventListener('mousedown', onMouseDown)
        renderer.domElement.addEventListener('mouseup', onMouseUp)
        
        const animate = () => {
            // Update the raycaster with the camera and mouse position
            raycaster.setFromCamera(mouseRef.current, camera)
            
            // Calculate objects intersecting the picking ray
            const intersects = raycaster.intersectObjects(boxesRef.current)
            
            // Update box animations
            updateBoxAnimations(boxesRef.current);

            // Reset all boxes to default material first
            for (let i = 0; i < boxesRef.current.length; i++) {
                boxesRef.current[i].material = originalMaterials[i];
            }
            
            // Then highlight only the intersected box
            if (intersects.length > 0) {
                const object = intersects[0].object as THREE.Mesh
                const projectIndex = object.userData.projectIndex as number
          
                object.material = highlightMaterials[projectIndex]
                setHoveredBox(projectIndex)
                document.body.style.cursor = 'pointer'
            } else {
                document.body.style.cursor = 'auto'
                setHoveredBox(null)
            }
            
            orbControls.update()
            renderer.render(scene, camera)
            window.requestAnimationFrame(animate)
        }
        
        const handleResize = () => {
            if (!canvasRef.current) return
            
            camera.aspect = window.innerWidth / (window.innerHeight * 0.8)
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight * 0.8)
        }
        
        window.addEventListener('resize', handleResize)
        animate()
        
        // Cleanup
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('resize', handleResize)
            renderer.domElement.removeEventListener('mousedown', onMouseDown)
            renderer.domElement.removeEventListener('mouseup', onMouseUp)
        }
    }, [navigate]) // Re-run effect if navigate changes
    
    // Function to initialize box animations
    function initBoxAnimations(boxes: THREE.Mesh[]) {
        lastUpdateTimeRef.current = Date.now();
        boxAnimationsRef.current = [];
        
        // Initialize animation data for each box
        for (let i = 0; i < boxes.length; i++) {
            boxAnimationsRef.current[i] = {
                startPosition: new THREE.Vector3(
                    boxes[i].position.x,
                    boxes[i].position.y,
                    boxes[i].position.z
                ),
                targetPosition: new THREE.Vector3(
                    boxes[i].position.x,
                    boxes[i].position.y,
                    boxes[i].position.z
                ),
                animationProgress: 1, // Start fully at the target (no animation initially)
                lastUpdateAxis: 'none' // Track which axis was last updated
            };
        }
    }
    
    // Function to update box animations
    function updateBoxAnimations(boxes: THREE.Mesh[]) {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastUpdateTimeRef.current;
        
        // Check if it's time to update positions
        if (currentTime - lastUpdateTimeRef.current > updateInterval) {
            lastUpdateTimeRef.current = currentTime;
            
            // For each box, set new target position on a random axis
            for (let i = 0; i < boxes.length; i++) {
                const box = boxes[i];
                const animation = boxAnimationsRef.current[i];
                
                // Store current position as start position
                animation.startPosition.copy(box.position);
                
                // Choose a random axis (x, y, or z)
                const axes = ['x', 'y', 'z'];
                let randomAxis;
                
                // Avoid using the same axis twice in a row
                do {
                    randomAxis = axes[Math.floor(Math.random() * axes.length)];
                } while (randomAxis === animation.lastUpdateAxis);
                
                animation.lastUpdateAxis = randomAxis;
                
                // Set target position (copy current position first, then modify one axis)
                animation.targetPosition.copy(box.position);
                animation.targetPosition[randomAxis] = positionRange * (Math.random() * 2 - 1);
                
                // Reset animation progress
                animation.animationProgress = 0;
            }
        }
        
        // Update box positions based on animation progress
        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
            const animation = boxAnimationsRef.current[i];
            
            // Only animate if not at target yet
            if (animation.animationProgress < 1) {
                // Update animation progress
                animation.animationProgress += deltaTime / animationDuration;
                if (animation.animationProgress > 1) animation.animationProgress = 1;
                
                // Use easing function for smoother motion (cubic easing)
                const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                const easedProgress = ease(animation.animationProgress);
                
                // Interpolate between start and target positions
                box.position.x = animation.startPosition.x + (animation.targetPosition.x - animation.startPosition.x) * easedProgress;
                box.position.y = animation.startPosition.y + (animation.targetPosition.y - animation.startPosition.y) * easedProgress;
                box.position.z = animation.startPosition.z + (animation.targetPosition.z - animation.startPosition.z) * easedProgress;
            }
        }
    }
    
    return (
        <div className="welcome-canvas">
            <canvas ref={canvasRef} id="WelcomeCanvas" />
            
            {hoveredBox !== null && (
                <div className="hovered-box-info">
                    <h3 className="hovered-box-info-header">{projects[hoveredBox].title}</h3>
                    <p className="hovered-box-info-text">{projects[hoveredBox].shortDescription}</p>
                    <p className="hovered-box-info-btn">Click to view project</p>
                </div>
            )}
        </div>
    )
}

export default T3WelcomeCanvas