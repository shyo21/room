import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import Youtube from './Youtube'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/room_large.gltf')
  const [musicClick, setMusicClick] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => void (document.body.style.cursor = hover ? 'pointer' : 'auto'), [hover])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.bed_bedding2.geometry} material={nodes.bed_bedding2.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_bedding3.geometry} material={nodes.bed_bedding3.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down10.geometry} material={nodes.bed_down10.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down6.geometry} material={nodes.bed_down6.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down7.geometry} material={nodes.bed_down7.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down8.geometry} material={nodes.bed_down8.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down9.geometry} material={nodes.bed_down9.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down5.geometry} material={nodes.bed_down5.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down1.geometry} material={nodes.bed_down1.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down2.geometry} material={nodes.bed_down2.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down3.geometry} material={nodes.bed_down3.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_down4.geometry} material={nodes.bed_down4.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_bedding1_1.geometry}
        material={nodes.bed_bedding1_1.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.bed_floor001.geometry} material={nodes.bed_floor001.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_pillow001.geometry} material={nodes.bed_pillow001.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up10.geometry} material={nodes.bed_up10.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up6.geometry} material={nodes.bed_up6.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up7.geometry} material={nodes.bed_up7.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up8.geometry} material={nodes.bed_up8.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up9.geometry} material={nodes.bed_up9.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up5.geometry} material={materials['Steel - Satin.001']} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up1.geometry} material={nodes.bed_up1.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up2.geometry} material={nodes.bed_up2.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up3.geometry} material={nodes.bed_up3.material} />
      <mesh castShadow receiveShadow geometry={nodes.bed_up4.geometry} material={nodes.bed_up4.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_matris.geometry}
        material={materials['Powder Coat - Rough (Blue).002']}
      />
      <mesh castShadow receiveShadow geometry={nodes.book_inside3.geometry} material={nodes.book_inside3.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_cover1001.geometry}
        material={nodes.book_cover1001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_inside1001.geometry}
        material={nodes.book_inside1001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_inside2001.geometry}
        material={nodes.book_inside2001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_inside3002.geometry}
        material={nodes.book_inside3002.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.box001.geometry} material={nodes.box001.material} />
      <mesh castShadow receiveShadow geometry={nodes.box_file2.geometry} material={nodes.box_file2.material} />
      <mesh castShadow receiveShadow geometry={nodes.box_file3001.geometry} material={nodes.box_file3001.material} />
      <mesh castShadow receiveShadow geometry={nodes.box_file1.geometry} material={nodes.box_file1.material} />
      <mesh castShadow receiveShadow geometry={nodes.box_filename2.geometry} material={nodes.box_filename2.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_filename3001.geometry}
        material={nodes.box_filename3001.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.box_filename1.geometry} material={nodes.box_filename1.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_plate001.geometry}
        material={nodes.button_plate001.material}
      />
      <mesh
        castShadow
        receiveShadow
        onClick={() => {setMusicClick(!musicClick)}}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={nodes.button_push1001.geometry}
        material={nodes.button_push1001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_push2001.geometry}
        material={nodes.button_push2001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_push3001.geometry}
        material={nodes.button_push3001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_shape1001.geometry}
        material={nodes.button_shape1001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_shape2001.geometry}
        material={nodes.button_shape2001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_shape3001.geometry}
        material={nodes.button_shape3001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_backbody001.geometry}
        material={nodes.chair_backbody001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_backleg1_1.geometry}
        material={nodes.chair_backleg1_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_backleg2.geometry}
        material={nodes.chair_backleg2.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.chair_leg1_1.geometry} material={nodes.chair_leg1_1.material} />
      <mesh castShadow receiveShadow geometry={nodes.chair_leg2.geometry} material={nodes.chair_leg2.material} />
      <mesh castShadow receiveShadow geometry={nodes.chair_leg3.geometry} material={nodes.chair_leg3.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chair_leg3_(1)'].geometry}
        material={nodes['chair_leg3_(1)'].material}
      />
      <mesh castShadow receiveShadow geometry={nodes.chair_sit.geometry} material={nodes.chair_sit.material} />
      <mesh castShadow receiveShadow geometry={nodes.wall_cover1.geometry} material={nodes.wall_cover1.material} />
      <mesh castShadow receiveShadow geometry={nodes.wall_cover2.geometry} material={nodes.wall_cover2.material} />
      <mesh castShadow receiveShadow geometry={nodes.speak_body.geometry} material={nodes.speak_body.material} />
      <mesh castShadow receiveShadow geometry={nodes.speak_front.geometry} material={nodes.speak_front.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holeedge1.geometry}
        material={nodes.speak_holeedge1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holeedge2.geometry}
        material={nodes.speak_holeedge2.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holemain1.geometry}
        material={nodes.speak_holemain1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speak_holemain2.geometry}
        material={nodes.speak_holemain2.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.speak_hole2.geometry} material={nodes.speak_hole2.material} />
      <mesh castShadow receiveShadow geometry={nodes.speak_hole1.geometry} material={nodes.speak_hole1.material} />
      <mesh castShadow receiveShadow geometry={nodes.table_body2.geometry} material={nodes.table_body2.material} />
      <mesh castShadow receiveShadow geometry={nodes.table_bar1.geometry} material={nodes.table_bar1.material} />
      <mesh castShadow receiveShadow geometry={nodes.table_bar2.geometry} material={nodes.table_bar2.material} />
      <mesh castShadow receiveShadow geometry={nodes.table_bar3.geometry} material={nodes.table_bar3.material} />
      <mesh castShadow receiveShadow geometry={nodes.table_bar4.geometry} material={nodes.table_bar4.material} />
      <mesh castShadow receiveShadow geometry={nodes.table_body1.geometry} material={nodes.table_body1.material} />
      <mesh castShadow receiveShadow geometry={nodes.image1.geometry} material={nodes.image1.material} />
      <mesh castShadow receiveShadow geometry={nodes.image2.geometry} material={nodes.image2.material} />
      <mesh castShadow receiveShadow geometry={nodes.com_back.geometry} material={nodes.com_back.material} />
      <mesh castShadow receiveShadow geometry={nodes.com_front.geometry} material={nodes.com_front.material} />
      <mesh castShadow receiveShadow geometry={nodes.com_screen.geometry} material={nodes.com_screen.material} >
        {musicClick && 
          <Html className="content" rotation-z={-Math.PI} rotation-x={-Math.PI} position={[-23.5, 30.5, 23.9]} transform occlude>
            <div className="wrapper">
              <Youtube />
            </div>
          </Html>}
        </mesh>
      <mesh castShadow receiveShadow geometry={nodes.cup001.geometry} material={nodes.cup001.material} />
      <mesh castShadow receiveShadow geometry={nodes.desk_leg1_1.geometry} material={nodes.desk_leg1_1.material} />
      <mesh castShadow receiveShadow geometry={nodes.desk_leg2.geometry} material={nodes.desk_leg2.material} />
      <mesh castShadow receiveShadow geometry={nodes.desk_top001.geometry} material={nodes.desk_top001.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_main.geometry} material={nodes.floor_main.material} />
      <mesh castShadow receiveShadow geometry={nodes.book_cover3.geometry} material={nodes.book_cover3.material} />
      <mesh castShadow receiveShadow geometry={nodes.light_main.geometry} material={nodes.light_main.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light_stand001.geometry}
        material={nodes.light_stand001.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.memo1001.geometry} material={nodes.memo1001.material} />
      <mesh castShadow receiveShadow geometry={nodes.memo2001.geometry} material={nodes.memo2001.material} />
      <mesh castShadow receiveShadow geometry={nodes.memo3001.geometry} material={nodes.memo3001.material} />
      <mesh castShadow receiveShadow geometry={nodes.memo4001.geometry} material={nodes.memo4001.material} />
      <mesh castShadow receiveShadow geometry={nodes.memoboard001.geometry} material={nodes.memoboard001.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_hello1_1.geometry} material={nodes.neon_hello1_1.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_hello2.geometry} material={nodes.neon_hello2.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_hello3.geometry} material={nodes.neon_hello3.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_hello4.geometry} material={nodes.neon_hello4.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_hello5.geometry} material={nodes.neon_hello5.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_world1_1.geometry} material={nodes.neon_world1_1.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_world2.geometry} material={nodes.neon_world2.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_world3.geometry} material={nodes.neon_world3.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_world4.geometry} material={nodes.neon_world4.material} />
      <mesh castShadow receiveShadow geometry={nodes.neon_world5.geometry} material={nodes.neon_world5.material} />
      <mesh castShadow receiveShadow geometry={nodes.pic_main3.geometry} material={nodes.pic_main3.material} />
      <mesh castShadow receiveShadow geometry={nodes.pic_main2.geometry} material={nodes.pic_main2.material} />
      <mesh castShadow receiveShadow geometry={nodes.pic_main1.geometry} material={nodes.pic_main1.material} />
      <mesh castShadow receiveShadow geometry={nodes.pic_side3.geometry} material={nodes.pic_side3.material} />
      <mesh castShadow receiveShadow geometry={nodes.pic_side2.geometry} material={nodes.pic_side2.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_body1001.geometry}
        material={materials['Powder Coat - Rough (Green)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_body2001.geometry}
        material={materials['Powder Coat - Rough (Green).001']}
      />
      <mesh castShadow receiveShadow geometry={nodes.plant_pot001.geometry} material={nodes.plant_pot001.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_soil.geometry}
        material={materials['Powder Coat - Rough (Yellow).005']}
      />
      <mesh castShadow receiveShadow geometry={nodes.rug.geometry} material={nodes.rug.material} />
      <mesh castShadow receiveShadow geometry={nodes.shelf_body001.geometry} material={nodes.shelf_body001.material} />
      <mesh castShadow receiveShadow geometry={nodes.shelf_leg1_1.geometry} material={nodes.shelf_leg1_1.material} />
      <mesh castShadow receiveShadow geometry={nodes.shelf_leg2.geometry} material={nodes.shelf_leg2.material} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_bottom2.geometry} material={nodes.shoe_bottom2.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_bottom1_1.geometry}
        material={nodes.shoe_bottom1_1.material}
      />
      <mesh castShadow receiveShadow geometry={nodes.shoe_top2.geometry} material={nodes.shoe_top2.material} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_top1_1.geometry} material={nodes.shoe_top1_1.material} />
      <mesh castShadow receiveShadow geometry={nodes.trash001.geometry} material={nodes.trash001.material} />
      <mesh castShadow receiveShadow geometry={nodes.trash_can.geometry} material={nodes.trash_can.material} />
      <mesh castShadow receiveShadow geometry={nodes.wall_main.geometry} material={nodes.wall_main.material} />
      <mesh castShadow receiveShadow geometry={nodes.wall_bar.geometry} material={nodes.wall_bar.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood1.geometry} material={nodes.floor_wood1.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood2.geometry} material={nodes.floor_wood2.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood3.geometry} material={nodes.floor_wood3.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood4.geometry} material={nodes.floor_wood4.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood5.geometry} material={nodes.floor_wood5.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood10.geometry} material={nodes.floor_wood10.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood6.geometry} material={nodes.floor_wood6.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood7.geometry} material={nodes.floor_wood7.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood8.geometry} material={nodes.floor_wood8.material} />
      <mesh castShadow receiveShadow geometry={nodes.floor_wood9.geometry} material={nodes.floor_wood9.material} />
    </group>
  )
}

useGLTF.preload('/room_large.gltf')
