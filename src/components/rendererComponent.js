import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import GLTFLoader from "three-gltf-loader"

function App() {
    const loader = new GLTFLoader();
    const ref = useRef();
  
    useEffect(() => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color( "#213bd1" );

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      ref.current.appendChild(renderer.domElement);
      loader.crossOrigin = "*";
      loader.load( 'https://firebasestorage.googleapis.com/v0/b/polycam-a4a1e.appspot.com/o/public%2Fsample-glb-files%2Faristocrat.glb?alt=media&token=11666350-bbba-45e0-8e6e-87c247654dd4', gltf => {

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