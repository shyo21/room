import './App.css';
import Room from './Room_cleared';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars , Environment } from '@react-three/drei';
import React, { Suspense, useRef, useState } from 'react';

import {Physics, Debug} from '@react-three/cannon';
import { Cursor } from './Drag';
import Whiteboard from './modals/Whiteboard';
import {NoToneMapping} from 'three';

import Setting from './modals/Setting';
import Logo from './modals/Logo';

function App() {
  const [physics, setPhysics] = useState(true);
  const [draw, setDraw] = useState(false);
  const [light, setLight] = useState(false);

  const light1ref = useRef()
  const light2ref = useRef()

  return (
    <div className="App">
      <div style={{ position:'absolute' , width:'100%', height:'100%'}}>
        <Canvas shadows camera={{ fov:50, position:[150,150,150] }} >
          <color attach='background' args={['#222222']} />
          {<directionalLight ref={light1ref} position={[40,50,60]} color={'#ffffff'} intensity={light?0.2:0.7} castShadow
                            shadow-bias={-0.003} shadow-camera-near={1} shadow-camera-far={500}
                            shadow-camera-top={100} shadow-camera-bottom={-100} shadow-camera-left={-100} shadow-camera-right={100} />}
          {!light&&<directionalLight ref={light2ref} position={[10,30,-50]} color={'#FFA07C'} intensity={1.5} />}
          
          <Suspense fallback={null}>
            <Physics iterations={6}  gravity={[0, -200, 0]}>
              <group  position={[0,-35,0]}>
                <Room setDraw={setDraw} setLight={setLight}/>
              </group>
              <Cursor />
              <OrbitControls enablePan={false}/>
              <Stars />
            </Physics>
          </Suspense>
          {light&&<pointLight position={[-36, 39.5, 1]} color={'#fade98'} intensity={0.5} />}
          {light&&<pointLight position={[30.52, 74, -44.31]} color={'#FFA07C'} intensity={0.2} />}
          {light&& <pointLight position={[24.49, 84.01, -44.23]} color={'#FFA07C'} intensity={0.2} />}
              
        </Canvas>
      </div>
      
      {draw&&<Whiteboard draw={draw} setDraw={setDraw}/>}
      <Setting setPhysics={setPhysics} physics={physics} />
      <Logo />

    </div>
  ); 
}

export default App;
