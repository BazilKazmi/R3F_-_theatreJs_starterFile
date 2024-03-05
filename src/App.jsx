/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import "./App.css";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import studio from "@theatre/studio";
import { editable as e } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";




import projectState from './assets/CubeScene.theatre-project-state.json'
import { useEffect } from "react";

import { useSequence } from "./store/sequence";

import LoadingScreen from "./components/LoadingScreen";
import { OrbitControls } from "@react-three/drei";





export const isProd = import.meta.env.MODE === 'production'

if (!isProd) {

  studio.initialize();
  studio.extend(extension);
}

const project = getProject("CubeScene", isProd ? {
  state: projectState,
} : undefined);
const mainsheet = project.sheet("main");


function App() {
  const cameraTargetRef = useRef();

  const { play } = useSequence();
  useEffect(() => {
    console.log("play", play);
    if (!play) return
    mainsheet.sequence.play()
  }, [play])
  return (
    <><LoadingScreen />
      <div className="w-screen h-screen touch-auto relative flex justify-center items-center "  >

        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <SheetProvider sheet={mainsheet}>

            <gridHelper />
            <OrbitControls />
            <color attach={'background'} args={['white']} />

            <Suspense>
              <e.group theatreKey="Cube">
                <mesh>
                  <boxGeometry args={[1, 1.5, 1]} />
                  <meshBasicMaterial color={'red'} />
                </mesh>
              </e.group>
              <e.ambientLight theatreKey="AmbientLight" color={'white'} />











            </Suspense>





          </SheetProvider>

        </Canvas>

      </div >
    </>
  );
}

export default App;
