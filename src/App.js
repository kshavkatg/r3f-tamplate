import { Canvas } from '@react-three/fiber'
import Player from './@core/Player'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
          <ambientLight intensity={0.2} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <axesHelper position={[0, 0, 0]} args={[4, 1, 1]} />
          <gridHelper args={[100, 100, 100]} />
          <Player />
      </Canvas>
    </div>
  )
}

export default App;
