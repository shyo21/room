import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { KernelSize, Resizer } from 'postprocessing'
import { EffectComposer, Bloom, SelectiveBloom } from '@react-three/postprocessing'
import Youtube from './Youtube'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'


function damp(target, to, step, delta, v = new THREE.Vector3()) {
  if (target instanceof THREE.Vector3) {
    target.x = THREE.MathUtils.damp(target.x, to[0], step, delta)
    target.y = THREE.MathUtils.damp(target.y, to[1], step, delta)
    target.z = THREE.MathUtils.damp(target.z, to[2], step, delta)
  }
}

export default function Model(props) {

  const group = useRef()
  const light1 = useRef()
  const neon_hello_1 = useRef()

  const { nodes, materials } = useGLTF('/room_cleared.gltf')

  const [musicClick, setMusicClick] = useState(false)
  const [hover, setHover] = useState(false)
  const [comClick, setComClick] = useState(false)

  useEffect(() => void (document.body.style.cursor = hover ? 'pointer' : 'auto'), [hover])

  useFrame((state, delta) => {
    const step = 4
    state.camera.fov = THREE.MathUtils.damp(state.camera.fov, comClick ? 20 : 50, step, delta)
    if (comClick) {
      damp(state.camera.position, [100,100,100], step, delta)
      state.camera.lookAt(100,100,100)
    }
    state.camera.updateProjectionMatrix()
  })

  return (
    <group ref={group} {...props} dispose={null}>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_bedding1.geometry}
        material={nodes.bed_bedding1.material}
        position={[-16.4, 17.72, 31.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_bedding2.geometry}
        material={nodes.bed_bedding2.material}
        position={[-10.72, 17.45, 31.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_bedding3.geometry}
        material={materials['1.1 skyblue_dark']}
        position={[-20.88, 17.7, 31.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down1.geometry}
        material={nodes.bed_down1.material}
        position={[6.92, 15.96, 44.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down10.geometry}
        material={nodes.bed_down10.material}
        position={[6.92, 20.8, 30.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down2.geometry}
        material={nodes.bed_down2.material}
        position={[6.92, 15.96, 16.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down3.geometry}
        material={nodes.bed_down3.material}
        position={[6.92, 28.28, 44.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down4.geometry}
        material={nodes.bed_down4.material}
        position={[6.92, 28.28, 16.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down5.geometry}
        material={nodes.bed_down5.material}
        position={[6.92, 8.48, 30.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down6.geometry}
        material={nodes.bed_down6.material}
        position={[6.92, 14.64, 27.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down7.geometry}
        material={nodes.bed_down7.material}
        position={[6.92, 14.64, 33.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down8.geometry}
        material={nodes.bed_down8.material}
        position={[6.92, 14.64, 21.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_down9.geometry}
        material={nodes.bed_down9.material}
        position={[6.92, 14.64, 40.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_floor.geometry}
        material={nodes.bed_floor.material}
        position={[-16.4, 8.48, 31.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_matris.geometry}
        material={nodes.bed_matris.material}
        position={[-16.4, 12.88, 31.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_pillow.geometry}
        material={nodes.bed_pillow.material}
        position={[-29.93, 21.57, 30.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up1.geometry}
        material={nodes.bed_up1.material}
        position={[-39.72, 20.36, 16.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up10.geometry}
        material={nodes.bed_up10.material}
        position={[-39.72, 29.6, 30.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up2.geometry}
        material={nodes.bed_up2.material}
        position={[-39.72, 20.36, 44.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up3.geometry}
        material={nodes.bed_up3.material}
        position={[-39.72, 37.08, 16.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up4.geometry}
        material={nodes.bed_up4.material}
        position={[-39.72, 37.08, 44.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up5.geometry}
        material={nodes.bed_up5.material}
        position={[-39.72, 8.48, 30.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up6.geometry}
        material={nodes.bed_up6.material}
        position={[-39.72, 19.04, 27.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up7.geometry}
        material={nodes.bed_up7.material}
        position={[-39.72, 19.04, 33.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up8.geometry}
        material={nodes.bed_up8.material}
        position={[-39.72, 19.04, 21.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_up9.geometry}
        material={nodes.bed_up9.material}
        position={[-39.72, 19.04, 40.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_cover1.geometry}
        material={materials['1.3 blue_light']}
        position={[-40.85, 65.1, 9.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_cover2.geometry}
        material={nodes.book_cover2.material}
        position={[-40.85, 66.3, 5.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_cover3.geometry}
        material={nodes.book_cover3.material}
        position={[-40.25, 64.73, 1.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_inside1.geometry}
        material={nodes.book_inside1.material}
        position={[-41, 64.8, 9.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_inside2.geometry}
        material={nodes.book_inside2.material}
        position={[-41, 66, 5.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_inside3.geometry}
        material={nodes.book_inside3.material}
        position={[-40.1, 64.74, 1.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box.geometry}
        material={nodes.box.material}
        position={[33.5, 22.82, -35.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_file1.geometry}
        material={nodes.box_file1.material}
        position={[28, 25.55, -35.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_file2.geometry}
        material={nodes.box_file2.material}
        position={[30, 25.55, -35.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_file3.geometry}
        material={nodes.box_file3.material}
        position={[33.64, 24.69, -35.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_filename1.geometry}
        material={nodes.box_filename1.material}
        position={[28.75, 28.5, -37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_filename2.geometry}
        material={nodes.box_filename2.material}
        position={[30.75, 28.5, -37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_filename3.geometry}
        material={nodes.box_filename3.material}
        position={[32.82, 27.62, -37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_plate.geometry}
        material={nodes.button_plate.material}
        position={[-22, 27, -27]}
      />
      <mesh
        castShadow
        receiveShadow
        onClick={() => {setMusicClick(!musicClick)}}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={nodes.button_push1.geometry}
        material={nodes.button_push1.material}
        position={[-22, 29, -21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_push2.geometry}
        material={nodes.button_push2.material}
        position={[-22, 29, -27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_push3.geometry}
        material={nodes.button_push3.material}
        position={[-22, 29, -33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_shape1.geometry}
        material={nodes.button_shape1.material}
        position={[-22, 30.25, -21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_shape2.geometry}
        material={nodes.button_shape2.material}
        position={[-22, 30.25, -27.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_shape3.geometry}
        material={nodes.button_shape3.material}
        position={[-22, 30.25, -32.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_backbody.geometry}
        material={nodes.chair_backbody.material}
        position={[1.58, 27, -13.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_backleg1.geometry}
        material={nodes.chair_backleg1.material}
        position={[3.31, 19, -18.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_backleg2.geometry}
        material={nodes.chair_backleg2.material}
        position={[-0.11, 19, -9.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_leg1.geometry}
        material={nodes.chair_leg1.material}
        position={[-7.5, 9, -22.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_leg2.geometry}
        material={nodes.chair_leg2.material}
        position={[1.9, 9, -19.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_leg3.geometry}
        material={nodes.chair_leg3.material}
        position={[-10.92, 9, -13.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_leg4.geometry}
        material={nodes.chair_leg4.material}
        position={[-1.52, 9, -9.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_sit.geometry}
        material={nodes.chair_sit.material}
        position={[-4.51, 14.5, -16.09]}
      />
      <mesh
        castShadow
        receiveShadow
        onClick={() => {setComClick(!comClick)}}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={nodes.com_back.geometry}
        material={nodes.com_back.material}
        position={[-36.65, 35.35, -27.11]}
      />
      <mesh
        castShadow
        receiveShadow
        onClick={() => {setComClick(!comClick)}}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={nodes.com_front.geometry}
        material={nodes.com_front.material}
        position={[-29.78, 37.55, -27.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.com_screen.geometry}
        material={nodes.com_screen.material}
        position={[-28.8, 38.1, -27.11]} >
        {musicClick && 
          <Html className="content" rotation={[0, Math.PI/2, 0]} position={[0.4,0,0]} transform occlude>
            <div className="wrapper">
              <Youtube />
            </div>
          </Html>}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cup.geometry}
        material={nodes.cup.material}
        position={[-24.72, 28.55, -8.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_leg1.geometry}
        material={nodes.desk_leg1.material}
        position={[-30, 13.5, 4.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_leg2.geometry}
        material={nodes.desk_leg2.material}
        position={[-30, 13.5, -40.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_top.geometry}
        material={nodes.desk_top.material}
        position={[-30, 24, -18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_main.geometry}
        material={nodes.floor_main.material}
        position={[0, 1.5, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood1.geometry}
        material={nodes.floor_wood1.material}
        position={[0, 4.6, -5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood10.geometry}
        material={nodes.floor_wood10.material}
        position={[0, 4.6, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood2.geometry}
        material={nodes.floor_wood2.material}
        position={[0, 4.6, -25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood3.geometry}
        material={nodes.floor_wood3.material}
        position={[0, 4.6, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood4.geometry}
        material={nodes.floor_wood4.material}
        position={[0, 4.49, -42.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood5.geometry}
        material={nodes.floor_wood5.material}
        position={[0, 4.6, 35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood6.geometry}
        material={nodes.floor_wood6.material}
        position={[0, 4.6, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood7.geometry}
        material={nodes.floor_wood7.material}
        position={[0, 4.6, 25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood8.geometry}
        material={nodes.floor_wood8.material}
        position={[0, 4.6, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood9.geometry}
        material={nodes.floor_wood9.material}
        position={[0, 4.49, 42.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.image1.geometry}
        material={nodes.image1.material}
        position={[-44.75, 66, -32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.image2.geometry}
        material={nodes.image2.material}
        position={[-44.75, 75.22, -13.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light_main.geometry}
        material={materials['6 yellow']}
        position={[-36, 39.5, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light_stand.geometry}
        material={nodes.light_stand.material}
        position={[-36, 31.5, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.memo1.geometry}
        material={nodes.memo1.material}
        position={[-28.68, 61.88, -43.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.memo2.geometry}
        material={nodes.memo2.material}
        position={[-18, 58, -43.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.memo3.geometry}
        material={nodes.memo3.material}
        position={[-9, 66.5, -43.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.memo4.geometry}
        material={nodes.memo4.material}
        position={[-22.5, 71.43, -43.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.memoboard.geometry}
        material={nodes.memoboard.material}
        position={[-20.22, 63.1, -44.54]}
      />
      <group >
        <mesh
          ref={neon_hello_1}
          castShadow
          receiveShadow
          geometry={nodes.neon_hello1.geometry}
          material={nodes.neon_hello1.material}
          position={[17.52, 84.28, -44.25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello2.geometry}
          material={nodes.neon_hello2.material}
          position={[24.49, 84.01, -44.23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello3.geometry}
          material={nodes.neon_hello3.material}
          position={[28.49, 85.14, -44.31]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello4.geometry}
          material={nodes.neon_hello4.material}
          position={[31.26, 85.14, -44.31]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello5.geometry}
          material={nodes.neon_hello5.material}
          position={[33.97, 84.01, -44.29]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world1.geometry}
          material={nodes.neon_world1.material}
          position={[14.7, 75.04, -44.28]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world2.geometry}
          material={nodes.neon_world2.material}
          position={[21.89, 72.88, -44.29]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world3.geometry}
          material={nodes.neon_world3.material}
          position={[26.27, 73.23, -44.31]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world4.geometry}
          material={nodes.neon_world4.material}
          position={[30.52, 74, -44.31]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world5.geometry}
          material={nodes.neon_world5.material}
          position={[33.9, 73.39, -44.29]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pic_main1.geometry}
        material={nodes.pic_main1.material}
        position={[-44.75, 44.5, 35.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pic_main2.geometry}
        material={nodes.pic_main2.material}
        position={[-44.75, 58, 36.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pic_main3.geometry}
        material={nodes.pic_main3.material}
        position={[-44.75, 53.5, 22.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pic_side2.geometry}
        material={nodes.pic_side2.material}
        position={[-44.65, 58, 36.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pic_side3.geometry}
        material={nodes.pic_side3.material}
        position={[-44.65, 53.5, 22.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_body1.geometry}
        material={nodes.plant_body1.material}
        position={[40.59, 56.81, -34.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_body2.geometry}
        material={nodes.plant_body2.material}
        position={[37.32, 62.02, -34.37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_pot.geometry}
        material={nodes.plant_pot.material}
        position={[40.27, 46.42, -34.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_soil.geometry}
        material={nodes.plant_soil.material}
        position={[40.27, 45.81, -34.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rug.geometry}
        material={nodes.rug.material}
        position={[15.79, 5.25, 17.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelf_body.geometry}
        material={nodes.shelf_body.material}
        position={[-40, 58.5, -1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelf_leg1.geometry}
        material={nodes.shelf_leg1.material}
        position={[-41.5, 54.5, -10.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelf_leg2.geometry}
        material={nodes.shelf_leg2.material}
        position={[-41.5, 54.5, 7.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_bottom1.geometry}
        material={nodes.shoe_bottom1.material}
        position={[26.6, 6.1, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_bottom2.geometry}
        material={nodes.shoe_bottom2.material}
        position={[22.16, 6.1, 21.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_top1.geometry}
        material={nodes.shoe_top1.material}
        position={[26.6, 7.75, 10.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_top2.geometry}
        material={nodes.shoe_top2.material}
        position={[23.85, 7.75, 22.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_body.geometry}
        material={materials['4.4 gray_light']}
        position={[26, 51.3, -37.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_front.geometry}
        material={nodes.speak_front.material}
        position={[25.8, 51.42, -31.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_hole1.geometry}
        material={nodes.speak_hole1.material}
        position={[26, 56, -31.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_hole2.geometry}
        material={nodes.speak_hole2.material}
        position={[26, 47, -31.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holeedge1.geometry}
        material={nodes.speak_holeedge1.material}
        position={[26, 56, -31.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holeedge2.geometry}
        material={nodes.speak_holeedge2.material}
        position={[26, 47, -31.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holemain1.geometry}
        material={nodes.speak_holemain1.material}
        position={[26, 56, -30.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holemain2.geometry}
        material={nodes.speak_holemain2.material}
        position={[26, 47, -30.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_bar1.geometry}
        material={nodes.table_bar1.material}
        position={[21.35, 21.5, -30.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_bar2.geometry}
        material={nodes.table_bar2.material}
        position={[45.55, 21.5, -30.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_bar3.geometry}
        material={nodes.table_bar3.material}
        position={[21.35, 21.5, -40.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_bar4.geometry}
        material={nodes.table_bar4.material}
        position={[45.55, 21.5, -40.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_body1.geometry}
        material={nodes.table_body1.material}
        position={[33.45, 15.65, -34.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_body2.geometry}
        material={nodes.table_body2.material}
        position={[33.45, 39.65, -34.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trash.geometry}
        material={nodes.trash.material}
        position={[11.66, 17.46, -35.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trash_can.geometry}
        material={nodes.trash_can.material}
        position={[11, 12, -36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_bar.geometry}
        material={nodes.wall_bar.material}
        position={[-14.08, 10, -14.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_cover1.geometry}
        material={nodes.wall_cover1.material}
        position={[-45.25, 52.5, 2.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_cover2.geometry}
        material={nodes.wall_cover2.material}
        position={[2.25, 52.5, -45.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_main.geometry}
        material={nodes.wall_main.material}
        position={[-15.17, 52.5, -15.17]}
      />
    </group>
  )
}

useGLTF.preload('/room_cleared.gltf')
