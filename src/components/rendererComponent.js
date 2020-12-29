import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import GLTFLoader from "three-gltf-loader"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


function App() {
    const loader = new GLTFLoader();
    const ref = useRef();
  
    useEffect(() => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color( "#213bd1" );

     


      const light = new THREE.AmbientLight( 0x404040 ); // soft white light
      scene.add( light )
      const directionalLight = new THREE.DirectionalLight( "white", 0.9 );
      scene.add( directionalLight );
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const controls = new OrbitControls( camera, renderer.domElement );
    
      controls.enableDamping = true; // For that slippery Feeling
      controls.dampingFactor = 0.12; // Needs to call update on render loop 
      controls.rotateSpeed = 0.08; // Rotate speed
      controls.autoRotate = false; // turn this guy to true for a spinning camera
      controls.autoRotateSpeed = 0.08; // 30
      controls.maxPolarAngle = Math.PI/2; // Don't let to go below the ground
      controls.target.set(0, 0, 0);

    

      ref.current.appendChild(renderer.domElement);
      loader.crossOrigin = "*";
      loader.load( 'https://firebasestorage.googleapis.com/v0/b/d-poc-2f4a8.appspot.com/o/aristocrat.glb?alt=media&token=608a91f4-557b-4f4b-8ecf-44039c1368f9', gltf => {
        scene.add( gltf.scene );
       
       } );
      camera.position.z = 5;
      const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

      };
      animate();
  
      return () => {
          // Callback to cleanup three js, cancel animationFrame, etc
      }
    }, []);
  
    return <div ref={ref} />;
  }
  export default App