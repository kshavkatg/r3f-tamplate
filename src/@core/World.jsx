import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Canvas } from 'react-three-fiber';

export const GameContext = React.createContext(null);

export default function World({ movementDuration = 250, cameraZoom = 64, children }) {
  const [paused, setPaused] = useState(false);
  const [registryById] = useState(() => new Map());
  const [registryByName] = useState(() => new Map());
  const [registryByXY] = useState(() => new Map());
  const [registryByLayer] = useState(() => new Map());
  //const [pubSub] = useState(() => createPubSub());
  const [gameStore] = useState(() => new Map());


  const contextValue = {
    settings: {
        movementDuration,
        cameraZoom,
    },
    paused,
    setPaused,
    // ...storeUtils,
    // ...registryUtils,
    // ...pubSub,
  };

  return (
    <div className='root'>
        <Canvas
            camera={{
                position: [0, 0, 32],
                zoom: cameraZoom,
                near: 0.1,
                far: 64,
            }}
            orthographic
            noEvents
            gl2
            gl={{ antialias: false }}
            onContextMenu={e => e.preventDefault()}
        >
            <GameContext.Provider value={contextValue}>
                {children}
            </GameContext.Provider>
        </Canvas>
    </div>
  );
}
