import './App.css';
import Room from './Room_large';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars , Environment } from '@react-three/drei';
import React, { Suspense } from 'react';

function App() {
  return (
    <div className="App" style={{width:'100vw', height:'100vh'}}>
      <Canvas shadows camera={{ fov:50, position:[15,15,-15] }}>
        <color attach='background' args={['black']} />
        <directionalLight position={[10,10,-7]} color={'#ffffff'} intensity={2} castShadow
                          shadow-bias = {-0.001} shadow-camera-near={1} shadow-camera-far={200}
                          shadow-camera-top={10} shadow-camera-bottom={-10} shadow-camera-left={-10} shadow-camera-right={10} />
        <directionalLight position={[4,10,-10]} color={'#fff6ed'} intensity={1} />
        <Suspense fallback={null}>
          <Room />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
