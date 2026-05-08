import {React, Suspense, useRef} from 'react'
import { Canvas, useFrame} from "@react-three/fiber"
import { CameraControls,
  OrbitControls,
  Environment, 
  View ,
  PerspectiveCamera,
useHelper} from '@react-three/drei';

import * as THREE from 'three';
import House from "./models/HouseT";
import BackGrass from "./models/BackGrassT";
import Detail from "./models/DetailT";
import Extras from "./models/ExtrasT";
import ExtrasTwo from "./models/ExtrasTwoT";
import ExtrasThree from "./models/ExtrasThreeT";
import FrontGrass from "./models/FrontGrassT";
import GrassBlocks from "./models/GrassBlocksT";
import GrassSides from "./models/GrassSidesT";
import Mobs from "./models/MobsT";


const CameraHelper= ({cameraRef})=>{
  useHelper(cameraRef, THREE.CameraHelper)

  return null;
}


const Scene=({controls})=> {
  

    useFrame(()=>{
      // console.log("position");
      // console.log(controls.current.getPosition());
      // console.log("rotation");
      // console.log(controls.current.camera1.position);
      // console.log(controls.current.getRotation());
    });

    return(<>
    <Environment
      background={true}
      backgroundRotation={[0,Math.PI/2,0]}
      files={[
        '/cubemap/px.webp', 
        '/cubemap/nx.webp', 
        '/cubemap/py.webp', 
        '/cubemap/ny.webp', 
        '/cubemap/pz.webp', 
        '/cubemap/nz.webp']} />
    <Suspense fallback={null}>
      <House/>
      <BackGrass/>
      <Detail/>
      <Extras/>
      <ExtrasTwo/>
      <ExtrasThree/>
      <FrontGrass/>
      <GrassBlocks/>
      <GrassSides/>
      <Mobs/>
      </Suspense>
    </>);
     
}

function Experience() {

  const controls1= useRef();
  const controls2= useRef();
  const camera1= useRef();
  const camera2= useRef();
// rotation _x: -0.09138263550343272_y: 0.47276129317296156_z: 0.04170278097740059

  return (
    <>
    <Canvas 
    eventSource={document.getElementById("root")}
    // camera={{position:[8.698582839293648,65.07527468599159,59.88212469828528],
    //   fov:45
    // }} 
    >
      
      
      <View.Port/>
      
    </Canvas>
    
      <View   style={{width:500, height:500, position: "absolute", top: 0, right:0}}>
        <Scene />
        <PerspectiveCamera ref={camera1} makeDefault fov={70} position={13.321164528928126, 65.69150646037899, 55.3925842072854}/>
        <OrbitControls ref= {controls1} camera={camera1.current}/>
      </View>

      <View  style={{width:1440, height: 900, position:"absolute", top:0}}>
        <Scene/>
        <PerspectiveCamera ref={camera2} makeDefault fov={70} position={13.321164528928126, 65.69150646037899, 55.3925842072854}/>
        <CameraControls
         ref={controls2} 
         camera={camera2.current}
         onChange={(()=>{
          const { x, y, z } = camera2.current.position;
          console.log("View 1 Pos:", x, y, z);
         })}
         />
        <CameraHelper cameraRef={camera1}/>
      </View>
    
    </>
  );
}
export default Experience
