import { useState } from 'react';
import './App.css';
import Experience from './experience/Experience';
import { Canvas } from "@react-three/fiber";
function App() {
  const [count, setCount] = useState(0);

  


  return (
    <>
      <Experience/>

    </>
  );
}

export default App;
