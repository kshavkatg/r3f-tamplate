import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

export default function Camera(props) {
  const ref = useRef()
  // solution from https://yuji.wordpress.com/2021/05/31/react-three-fiber-set-default-camera/
  const setDefaultCamera = useThree((state) => state.set);
  useEffect(() => setDefaultCamera({ camera: ref.current }), []);
  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld())
  return (
      <PerspectiveCamera ref={ref} {...props} />
    )
}