import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import Youtube from './Youtube'
import * as THREE from 'three'
import { useLoader, useFrame, useThree, extend } from '@react-three/fiber'
import { Geometry } from "three-stdlib"
import { TextureLoader } from "three/src/loaders/TextureLoader.js"
import { usePlane, useBox, useConvexPolyhedron } from '@react-three/cannon';
import { useDragConstraint } from './Drag'



const toConvexPolyhedron = (geoArray) => {
  // geoArray : [[geometry1,[position1]],[geometry2,[position2], ...]
  const val = [[],[],[]];
  for(let i=0 ; i<geoArray.length ; i++){
    const geo = new Geometry().fromBufferGeometry(geoArray[i][0]);
    geo.mergeVertices();
    val[0].push(...(geo.vertices.map((v) => [v.x+geoArray[i][1][0], v.y+geoArray[i][1][1], v.z+geoArray[i][1][2]])));
    // vertices are consist of x,y,z vector coordinate
    val[1].push(...(geo.faces.map((f) => [f.a, f.b, f.c])));
    // faces are consist of index of vertices
  }
  return val;
};


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

  const [musicClick, setMusicClick] = useState(0)
  const [hover, setHover] = useState(false)
  const [comClick, setComClick] = useState(false)

  

  useEffect(() => void (document.body.style.cursor = hover ? 'pointer' : 'auto'), [hover])

  const { invalidate } = useThree();
  const destination = useMemo(() => new THREE.Vector3(), [])

  useEffect(() => {
    destination.set(70, 50, 10);
    invalidate();
  }, [invalidate, destination]);


  // Bookmark manage
  useEffect(()=>{
    localStorage.setItem('githubLink',"https://github.com/hye1ee/Interactive-Room");
    localStorage.setItem('piclongLink',"https://www.apple.com/shop/buy-mac/imac");
    localStorage.setItem('picshortLink',"https://ko.reactjs.org/");

    localStorage.setItem('music1',"https://www.youtube.com/watch?v=cyF9W8ZjbR0");
    localStorage.setItem('music2',"https://www.youtube.com/watch?v=Uc20YSleGBw");
    localStorage.setItem('music3',"https://www.youtube.com/watch?v=VVc7X4lSO4w");
  },[]);

  useFrame((state) => {
    const step = 0.1
    if (comClick) {
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 20, step)
      state.camera.position.lerp(destination,step)
      state.camera.updateProjectionMatrix()
    }
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 50, step)
    state.camera.updateProjectionMatrix()
  })



    // draw img load
    const img = localStorage.getItem('imgValue');

    const path = (img)?img : 'logo192.png';
    const drawTexture = useLoader(TextureLoader, path); // set path from public directory
    const githubTexture = useLoader(TextureLoader, 'img/github.jpeg');
    const reactTexture = useLoader(TextureLoader, 'img/mac.jpg');
    const friendTexture = useLoader(TextureLoader, 'img/friend.jpg');
    const blueTexture = useLoader(TextureLoader, 'img/blue.jpg');
    const [imageShake, setImageShake] = useState(0);
    const imageRef = useRef(null);
    //

    // physics
    const [planeRef] = usePlane(()=>({ mass : 0, type :'Static', rotation : [-Math.PI / 2, 0, 0],  position : [0,5,0]}));
    // physics : shoe1
    const shoe1Geo = useMemo(()=>toConvexPolyhedron([[nodes.shoe_bottom1.geometry,[26.6, 6.1, 9]],[nodes.shoe_top1.geometry,[26.6, 7.75, 10.8]]]), [nodes]);
    const [shoe1Ref] = useConvexPolyhedron(() => ({ mass: 0, args : shoe1Geo, linearDamping: 0.95, angularDamping: 0.95 }));
    const shoe1Bind = useDragConstraint(shoe1Ref);
    // physics : chair
    const chairGeo = useMemo(()=>toConvexPolyhedron(
      [[nodes.chair_backbody.geometry,[1.58, 27, -13.83]],
      [nodes.chair_backleg1.geometry,[3.31, 19, -18.57]],
      [nodes.chair_backleg2.geometry,[-0.11, 19, -9.17]],
      [nodes.chair_leg1.geometry,[-7.5, 9, -22.5]],
      [nodes.chair_leg2.geometry,[1.9, 9, -19.08]],
      [nodes.chair_leg3.geometry,[-10.92, 9, -13.1]],
      [nodes.chair_leg4.geometry,[-1.52, 9, -9.68]],
      [nodes.chair_sit.geometry,[-4.51, 14.5, -16.09]]]
    ), [nodes]);
    const [chairRef] = useConvexPolyhedron(() => ({ mass: 0, args : chairGeo, linearDamping: 0.95, angularDamping: 0.95 }));
    const chairBind = useDragConstraint(chairRef);
    // physics : rug
    const rugGeo = useMemo(()=>toConvexPolyhedron([[nodes.rug.geometry,[15.79, 5.25, 17.8]]]), [nodes]);
    const [rugRef] = useConvexPolyhedron(() => ({ mass: 0, args : rugGeo, linearDamping: 0.95, angularDamping: 0.95 }));

  return (
    <group ref={group} {...props} dispose={null}>

      <mesh ref={planeRef}/>


      <group ref={rugRef} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.rug.geometry} material={nodes.rug.material}
          position={[15.79, 5.25, 17.8]}/>
      </group>

      <group ref={chairRef} dispose={null} {...chairBind}>
      <mesh castShadow receiveShadow geometry={nodes.chair_backbody.geometry} material={nodes.chair_backbody.material}
        position={[1.58, 27, -13.83]} />
      <mesh castShadow receiveShadow geometry={nodes.chair_backleg1.geometry} material={nodes.chair_backleg1.material}
        position={[3.31, 19, -18.57]} />
      <mesh castShadow receiveShadow geometry={nodes.chair_backleg2.geometry} material={nodes.chair_backleg2.material}
        position={[-0.11, 19, -9.17]} />
      <mesh castShadow receiveShadow geometry={nodes.chair_leg1.geometry} material={nodes.chair_leg1.material}
        position={[-7.5, 9, -22.5]}  />
      <mesh castShadow receiveShadow geometry={nodes.chair_leg2.geometry} material={nodes.chair_leg2.material}
        position={[1.9, 9, -19.08]} />
      <mesh castShadow receiveShadow geometry={nodes.chair_leg3.geometry} material={nodes.chair_leg3.material}
        position={[-10.92, 9, -13.1]}/>
      <mesh castShadow receiveShadow geometry={nodes.chair_leg4.geometry} material={nodes.chair_leg4.material}
        position={[-1.52, 9, -9.68]} />
      <mesh castShadow receiveShadow geometry={nodes.chair_sit.geometry} material={nodes.chair_sit.material}
        position={[-4.51, 14.5, -16.09]} />
      </group>

      <group ref={shoe1Ref} dispose={null} {...shoe1Bind}>
        <mesh
          castShadow receiveShadow
          geometry={nodes.shoe_bottom1.geometry} material={nodes.shoe_bottom1.material}
          position={[26.6, 6.1, 9]}/>
        <mesh
          castShadow receiveShadow
          geometry={nodes.shoe_top1.geometry}  material={nodes.shoe_top1.material}
          position={[26.6, 7.75, 10.8]}/>
      </group>


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
        onClick={() => {setMusicClick(Number(!musicClick))}}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={nodes.button_push1.geometry}
        material={nodes.button_push1.material}
        position={[-22, 29, -21]}
      />
      <mesh
        castShadow
        receiveShadow
        onClick={() => {if(musicClick===1)setMusicClick(3); else setMusicClick(musicClick-1)}}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={nodes.button_push2.geometry}
        material={nodes.button_push2.material}
        position={[-22, 29, -27]}
      />
      <mesh
        castShadow
        receiveShadow
        onClick={() => {if(musicClick===3)setMusicClick(1); else setMusicClick(musicClick+1)}}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
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
              <Youtube musicClick={musicClick} />
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

      <mesh ref={imageRef} position={[-44.75, 66, -32]}
      onPointerEnter={()=>setImageShake(1)} 
      onPointerLeave={()=>setImageShake(0)}
      onClick={()=>props.setDraw((val)=>!val)}
      receiveShadow rotation={[0,Math.PI/2,0]}>
        <boxBufferGeometry attach="geometry" args={[16, 20, 1]} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" map={drawTexture} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
      </mesh>


      <mesh
        castShadow
        receiveShadow rotation={[0,Math.PI/2,0]}
        position={[-44.75, 75.22, -13.62]}>
        <boxBufferGeometry attach="geometry" args={[17, 17, 1]} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" map={blueTexture} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={"#dddddd"} />
      </mesh>


      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light_main.geometry}
        position={[-36, 39.5, 1]} onClick={()=>props.setLight(val=>!val)}
      >
        <meshBasicMaterial color="yellow" attach="material" transparent opacity={0.8} />
      </mesh>

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
          position={[17.52, 84.28, -44.25]}>
          <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello2.geometry}
          material={nodes.neon_hello2.material}
          position={[24.49, 84.01, -44.23]}>
            <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello3.geometry}
          material={nodes.neon_hello3.material}
          position={[28.49, 85.14, -44.31]}
        >
          <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello4.geometry}
          material={nodes.neon_hello4.material}
          position={[31.26, 85.14, -44.31]}
        >
          <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_hello5.geometry}
          material={nodes.neon_hello5.material}
          position={[33.97, 84.01, -44.29]}
        >
          <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world1.geometry}
          material={nodes.neon_world1.material}
          position={[14.7, 75.04, -44.28]}
        >
            <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world2.geometry}
          material={nodes.neon_world2.material}
          position={[21.89, 72.88, -44.29]}
        >
            <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world3.geometry}
          material={nodes.neon_world3.material}
          position={[26.27, 73.23, -44.31]}
        >
            <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world4.geometry}
          material={nodes.neon_world4.material}
          position={[30.52, 74, -44.31]}
        >
            <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neon_world5.geometry}
          material={nodes.neon_world5.material}
          position={[33.9, 73.39, -44.29]}
        >
            <meshBasicMaterial castShadow receiveShadow color="white" attach="material" transparent opacity={0.7} />
        </mesh>
      </group>

      <mesh onClick={() => window.open(localStorage.getItem('githubLink'), '_blank')}
        onPointerOver={() => (setHover(true))}
        onPointerOut={() => setHover(false)}
        castShadow receiveShadow position={[-44.75, 44.5, 35.75]} rotation={[0,Math.PI/2,0]} >
        <boxBufferGeometry args={[10,10,1]} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
        <meshBasicMaterial castShadow receiveShadow attachArray="material" map={githubTexture}/>
        <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
      </mesh>

      <group
        onClick={() => window.open(localStorage.getItem('piclongLink'), '_blank')}
        onPointerOver={() => (setHover(true))}
        onPointerOut={() => setHover(false)}
        castShadow receiveShadow>
        <mesh castShadow receiveShadow geometry={nodes.pic_side2.geometry} material={nodes.pic_side2.material}
          position={[-44.65, 58, 36.75]} />
        <mesh castShadow receiveShadow position={[-44.75, 58, 36.75]} rotation={[0,Math.PI/2,0]}>
          <boxBufferGeometry args={[11,14,0.5]} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" map={reactTexture}/>
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
        </mesh>
      </group>

      <group
        onClick={() => window.open(localStorage.getItem('picshortLink'), '_blank')}
        onPointerOver={() => (setHover(true))}
        onPointerOut={() => setHover(false)}
        castShadow receiveShadow>
        <mesh castShadow receiveShadow geometry={nodes.pic_main3.geometry} material={nodes.pic_main3.material}
          position={[-44.75, 53.5, 22.75]}  />
        <mesh castShadow receiveShadow position={[-44.65, 53.5, 22.75]} rotation={[0,Math.PI/2,0]}>
        <boxBufferGeometry args={[10,10,0.5]} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
          <meshBasicMaterial castShadow receiveShadow attachArray="material" map={friendTexture}/>
          <meshBasicMaterial castShadow receiveShadow attachArray="material" color={'#333333'} />
        </mesh>
      </group>



      <mesh castShadow receiveShadow geometry={nodes.plant_body1.geometry} material={nodes.plant_body1.material}
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

      <mesh castShadow receiveShadow geometry={nodes.shelf_body.geometry} material={nodes.shelf_body.material}
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
        geometry={nodes.shoe_top2.geometry}
        material={nodes.shoe_top2.material}
        position={[23.85, 7.75, 22.13]}
      />
      <mesh castShadow receiveShadow geometry={nodes.shoe_bottom2.geometry} material={nodes.shoe_bottom2.material}  position={[22.16, 6.1, 21.51]}/>



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
