/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function RobotExpressive(props) {
  const action = props.action
  const group = useRef()
  const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF('/RobotExpressive.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      //actions[action].time = 0;
      actions[action].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <primitive object={nodes.Bone} />
      </group>
      <group position={[0, 2.37, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <skinnedMesh
          geometry={nodes.HandR_1.geometry}
          material={nodes.HandR_1.material}
          skeleton={nodes.HandR_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.HandR_2.geometry}
          material={nodes.HandR_2.material}
          skeleton={nodes.HandR_2.skeleton}
        />
      </group>
      <group position={[0, 2.37, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <skinnedMesh
          geometry={nodes.HandL_1.geometry}
          material={nodes.HandL_1.material}
          skeleton={nodes.HandL_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.HandL_2.geometry}
          material={nodes.HandL_2.material}
          skeleton={nodes.HandL_2.skeleton}
        />
      </group>
    </group>
  )
}


useGLTF.preload('/RobotExpressive.glb')

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}