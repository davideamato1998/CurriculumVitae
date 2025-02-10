// sceneSetup.js

// Function to set up the scene, camera, and renderer
export function setupScene() {
    // Create the scene
    const scene = new THREE.Scene();

    // Create the camera (Field of view, aspect ratio, near and far plane)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer's canvas to the document body
    document.body.appendChild(renderer.domElement);

    // Position the camera away from the center of the scene
    camera.position.z = 5;

    // Return the objects so they can be used in the main file
    return { scene, camera, renderer };
}
