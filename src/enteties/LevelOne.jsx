/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function LevelOne(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/level.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Default} />
    </group>
  )
}

useGLTF.preload('/level.glb')