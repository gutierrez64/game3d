//IMPORT THREE.JS LIBRARY AND PointerLockControls
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

//SET THE SCENE, CAMERA, RENDERER AND CONTROLS
let scene, camera, renderer, controls;
//SETS THE INITIAL STATE OF THE PLAYER X, Z AND VELOCITY
let xdir = 0, zdir = 0, vel = 0.05;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
renderer = new THREE.WebGLRenderer();
controls = new PointerLockControls( camera, renderer.domElement );

//CONFIGURE THE SCENE BACKGROUND/GROUND
scene.background = new THREE.Color(0xffffff);
scene.add(new THREE.GridHelper(100, 100));

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//ADD A CUBE
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.y = 0.5;

camera.position.z = 5;
camera.position.y = 1.5;


//KEYBOARD LISTENER
document.addEventListener('keydown', (e)=>{
    switch (e.keyCode) {
        case 65:
            xdir = vel - vel * 2
            break;
        case 87:
            zdir = vel
            break;
        case 68:
            xdir = vel
            break;
        case 83:
            zdir = vel - vel * 2
            break;
    }
})

document.addEventListener('keyup', (e)=>{
    switch (e.keyCode) {
        case 65:
            xdir = 0
            break;
        case 87:
            zdir = 0
            break;
        case 68:
            xdir = 0
            break;
        case 83:
            zdir = 0
            break;
    }
})

//WHEN THE PLAYER CLICKS THE PLAY BUTTON THE CAMERA LOCK
document.getElementById('btnPlay').onclick = ()=>{
    controls.lock()
}


//CALL THE ANIMATION FUNCTION
animate();

function animate() {
    //MAKE THE FUNCTION LOOP
    requestAnimationFrame( animate );
    //MOV FUNCTION
    controls.moveRight(xdir);
    controls.moveForward(zdir);
    //RENDERING
    renderer.render( scene, camera );
};