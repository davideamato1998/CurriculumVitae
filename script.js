// Import scene setup and elements rendering functions
import { setupScene } from './sceneSetup.js';
import { createCube } from './elements.js';

// Initialize the scene, camera, and renderer
const { scene, camera, renderer } = setupScene();

// Add a 3D cube to the scene
const cube = createCube();
scene.add(cube);

// Add OrbitControls for interactivity
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Animate the scene (this will rotate the cube)
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Update controls (for interactivity)
    controls.update();

    // Render the scene and camera view
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
