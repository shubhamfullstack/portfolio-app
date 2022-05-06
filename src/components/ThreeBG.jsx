import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Threeplane from './ThreePlane';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
`;


export default function ThreeBG(props) {
  return (
    <CanvasContainer>
      <Canvas dpr={Math.min(window.devicePixelRatio, 2)}>
        <directionalLight color='#ffffff' intensity={1.8} position={[0,3,-1]} />
        <directionalLight color='#ffffff' intensity={1.8} position={[-1,0,1]} />
        <Threeplane {...props} />
      </Canvas>
    </CanvasContainer>
  )
}
