 'use client'
import { Environment, OrbitControls } from '@react-three/drei'
 import { Canvas } from '@react-three/fiber'
const Test = () => {
  return (
    <Canvas style={{position: 'fixed'}} >
        <Environment preset='night' />
        <OrbitControls />
       <mesh position={[0, 0, 0]} > 
        {/* geometry  */}
        <boxGeometry />
        {/* material  */}
        <meshStandardMaterial color='orange' />
       </mesh>
        <mesh position={[2, 0, 0]} > 
        <boxGeometry /> 
        <meshBasicMaterial color='orange' />
       </mesh>
    </Canvas>
  )
}

export default Test