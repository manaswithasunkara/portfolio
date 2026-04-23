import {React, Suspense, useRef} from 'react'
import { Canvas, useFrame} from "@react-three/fiber"
import { CameraControls, Environment, View } from '@react-three/drei';

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




const Scene=({controls})=> {
  

    useFrame(()=>{
      // console.log("position");
      // console.log(controls.current.getPosition());
      // console.log("rotation");
      // console.log(controls.current.camera.rotation);
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

  const controls= useRef();
// rotation _x: -0.09138263550343272_y: 0.47276129317296156_z: 0.04170278097740059
  return (
    <Canvas 
    camera={{position:[8.698582839293648,65.07527468599159,59.88212469828528],
      fov:45
    }} 
    >
      <CameraControls ref= {controls}/>
      
      
      <Scene controls={controls}/>
      
    </Canvas>
  );
}
export default Experience
