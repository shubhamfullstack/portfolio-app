import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import styled from 'styled-components';

import '/node_modules/react-dat-gui/dist/dist/index.css'

const ThreeCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
  z-index: -1;
`;

export default function ThreeBG() {
  const canvasEl = useRef(null);
  let state = {
      position:{
          x:0,
          y:0,
          z:5
      }
  }
  const [data, setData] = useState(state)

  const handleUpdate = newData => {
      console.log(newData)
      setData({
        position: { ...data.position, ...newData }
      });
  }


  
  useEffect(() => {
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
      );
      

      let canvas = canvasEl.current;
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(sizes.width, sizes.height);
      

      const geometry = new THREE.PlaneGeometry( 5, 5 , 50, 50);
      const material = new THREE.MeshBasicMaterial( {color: 0xECCBFC,wireframe:true, side: THREE.DoubleSide} );
      const plane = new THREE.Mesh( geometry, material );
      plane.position.set(3,0,0)
      scene.add( plane );

      window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 5;

      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update objects
        //plane.rotation.y = 0.2 * elapsedTime;
        // plane.rotation.x = 0.2 * elapsedTime;
        // Render
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };

      tick();

  }, [data]);
  
  return (
      <div>
        <ThreeCanvas ref={canvasEl} className="webgl"></ThreeCanvas>
      </div>
  )
}
