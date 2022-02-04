import { Suspense, useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import RobotExpressive from '../enteties/RobotExspressive'
import Camera from './Camera'

export default function Player() {
  const [moveForward, setMoveForward] = useState(false)
  const [moveBack, setMoveBack] = useState(false)
  const [moveLeft, setMoveLeft] = useState(false)
  const [moveRight, setMoveRight] = useState(false)
  const [rotateRight, setRotateRight] = useState(false)
  const [rotateLeft, setRotateLeft] = useState(false)

  const playerRef = useRef()
  const cameraRef = useRef()
  const avatarRef = useRef()

  const playerSpeed = 0.1

  const handleKeyPress = (e) => {
    switch (e.code) {
      case 'KeyW':
        setMoveForward(true)
        break;
      case 'KeyA':
        setMoveLeft(true)
        break;
      case 'KeyS':
        setMoveBack(true)
        break;
      case 'KeyD':
        setMoveRight(true)
        break;
      case 'KeyQ':
        setRotateLeft(true)
        break;
      case 'KeyE':
        setRotateRight(true)
        break;
      default:
        break;
    }
  }

  const handleKeyUp = (e) => {
    switch (e.code) {
      case 'KeyW':
        setMoveForward(false)
        break;
      case 'KeyA':
        setMoveLeft(false)
        break;
      case 'KeyS':
        setMoveBack(false)
        break;
      case 'KeyD':
        setMoveRight(false)
        break;
      case 'KeyQ':
        setRotateLeft(false)
        break;
      case 'KeyE':
        setRotateRight(false)
        break;
      default:
        break;
    }
  }

  useEffect(()=> {
    document.addEventListener('keypress', handleKeyPress)
    document.addEventListener('keyup', handleKeyUp)
  }, [])

  useFrame((state) => {
    if (moveForward){
      avatarRef.current.rotation.copy(cameraRef.current.rotation)
      playerRef.current.translateZ(-playerSpeed)
    } 
    if (moveBack){
      avatarRef.current.rotation.copy(cameraRef.current.rotation)
      avatarRef.current.rotation.y -= -Math.PI 
      playerRef.current.translateZ(playerSpeed)
    }
    if (moveLeft) {
      avatarRef.current.rotation.copy(cameraRef.current.rotation)
      if (moveForward) {
        avatarRef.current.rotation.y += Math.PI /4
      } else if (moveBack){
        avatarRef.current.rotation.y += Math.PI/2 + Math.PI /4
      } else {
        avatarRef.current.rotation.y += Math.PI /2
      }
      playerRef.current.translateX(-playerSpeed)
    }
    if (moveRight) {
      avatarRef.current.rotation.copy(cameraRef.current.rotation)
      if (moveForward) {
        avatarRef.current.rotation.y -= Math.PI /4
      } else if (moveBack){
        avatarRef.current.rotation.y -= Math.PI/2 + Math.PI /4
      } else {
        avatarRef.current.rotation.y -= Math.PI /2
      }
      playerRef.current.translateX(playerSpeed)
    }
    if (rotateLeft) {
      avatarRef.current.rotation.y -= playerSpeed * 0.3;
      playerRef.current.rotation.y += playerSpeed * 0.3;
    }
    if (rotateRight) {
      avatarRef.current.rotation.y += playerSpeed * 0.3;
      playerRef.current.rotation.y -= playerSpeed * 0.3;
    }
  });

  return (
    <group ref={playerRef}>
      <axesHelper position={[0, 1.5, 0]} args={[2, 1, 1]} />
      <group ref={cameraRef}>
        <Camera position={[0, 3, 11]} near={1} far={1000} />
      </group>
      <group ref={avatarRef}>
        <Suspense fallback={null}>
          <RobotExpressive rotation={[0, Math.PI, 0]} position={[0, 0, 0]}  scale={0.5} />
        </Suspense>
      </group> 
    </group> 
  )
}