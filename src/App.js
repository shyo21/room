import './App.css';
import Room from './Room_cleared';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars , Environment } from '@react-three/drei';
import React, { Suspense, useRef, useState } from 'react';

function App() {

  const light1ref = useRef()
  const light2ref = useRef()

  return (
    <div className="App" style={{width:'100vw', height:'100vh'}}>
      <Canvas shadows camera={{ fov:50, position:[150,150,150] }}>
        <color attach='background' args={['#222222']} />
        <directionalLight ref={light1ref} position={[40,50,60]} color={'#ffffff'} intensity={0.7} castShadow
                          shadow-bias={-0.003} shadow-camera-near={1} shadow-camera-far={500}
                          shadow-camera-top={100} shadow-camera-bottom={-100} shadow-camera-left={-100} shadow-camera-right={100} />
        <directionalLight ref={light2ref} position={[10,30,-50]} color={'#FFA07C'} intensity={1.5} />
        <Suspense fallback={null}>
          <Room />
          <OrbitControls />
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  ); 
}

export default App;
