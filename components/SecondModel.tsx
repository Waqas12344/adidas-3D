import * as THREE from "three";
import { useGLTF } from '@react-three/drei'
import { ShirtType, TextureKey } from '@/lib/textures'
import { useShirtSectionTextures } from '@/lib/useTextures';
import { createMaterials } from '@/lib/material';


type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};


export function SecondModel({shirtType}:{shirtType:ShirtType}) {
  const { nodes } = useGLTF('/models/ShirtScrolling.glb') as unknown as GLTFResult;
    const textures = useShirtSectionTextures(shirtType,"second");
    const mats = createMaterials(textures) as Record<
      TextureKey<typeof shirtType,"second">,
      THREE.MeshBasicMaterial
    >;
  return (
    <group   dispose={null}> 
        <mesh
          
          geometry={nodes.Shirt.geometry}
          material={mats.shirt}
        />
        <mesh
          
          geometry={nodes.Sphere_ENV.geometry}
          material={mats.sphere}
        /> 
      <mesh
        
        geometry={nodes.Marquee_Top_Bottom.geometry}
        material={nodes.Marquee_Top_Bottom.material}
        position={[0, 0.7, 0]}
      />
      <mesh
        
        geometry={nodes.Marquee_Middle.geometry}
        material={nodes.Marquee_Middle.material}
        position={[0, 0.7, 0]}
      />
      <mesh
        
        geometry={nodes.Texts001.geometry}
        material={nodes.Texts001.material}
        position={[-0.017, 0.286, 0.272]}
      />
      <mesh
        
        geometry={nodes.Texts002.geometry}
        material={nodes.Texts002.material}
        position={[0.001, 0.286, 0.273]}
      />
      <mesh
        
        geometry={nodes.Texts003.geometry}
        material={nodes.Texts003.material}
        position={[0.015, 0.281, 0.272]}
      />
      <mesh
        
        geometry={nodes.Texts004.geometry}
        material={nodes.Texts004.material}
        position={[0.038, 0.28, 0.271]}
      />
      <mesh
        
        geometry={nodes.Texts005.geometry}
        material={nodes.Texts005.material}
        position={[0.053, 0.28, 0.268]}
      />
      <mesh
        
        geometry={nodes.Texts006.geometry}
        material={nodes.Texts006.material}
        position={[0.072, 0.28, 0.265]}
      />
      <mesh
        
        geometry={nodes.Texts007.geometry}
        material={nodes.Texts007.material}
        position={[0.09, 0.28, 0.26]}
      />
      <mesh
        
        geometry={nodes.Texts008.geometry}
        material={nodes.Texts008.material}
        position={[0.104, 0.283, 0.255]}
      />
      <mesh
        
        geometry={nodes.Texts009.geometry}
        material={nodes.Texts009.material}
        position={[0.118, 0.276, 0.251]}
      />
      <mesh
        
        geometry={nodes.Texts010.geometry}
        material={nodes.Texts010.material}
        position={[0.131, 0.277, 0.245]}
      />
      <mesh
        
        geometry={nodes.Texts011.geometry}
        material={nodes.Texts011.material}
        position={[0.149, 0.276, 0.236]}
      />
      <mesh
        
        geometry={nodes.Texts012.geometry}
        material={nodes.Texts012.material}
        position={[0.161, 0.28, 0.229]}
      />
      <mesh
        
        geometry={nodes.Texts013.geometry}
        material={nodes.Texts013.material}
        position={[0.17, 0.276, 0.224]}
      />
      <mesh
        
        geometry={nodes.Texts014.geometry}
        material={nodes.Texts014.material}
        position={[0.182, 0.273, 0.216]}
      />
      <mesh
        
        geometry={nodes.Texts015.geometry}
        material={nodes.Texts015.material}
        position={[0.194, 0.27, 0.208]}
      />
      <mesh
        
        geometry={nodes.Texts016.geometry}
        material={nodes.Texts016.material}
        position={[0.204, 0.273, 0.199]}
      />
      <mesh
        
        geometry={nodes.Texts017.geometry}
        material={nodes.Texts017.material}
        position={[0.286, 0.218, -0.137]}
      />
      <mesh
        
        geometry={nodes.Texts018.geometry}
        material={nodes.Texts018.material}
        position={[0.279, 0.208, -0.15]}
      />
      <mesh
        
        geometry={nodes.Texts019.geometry}
        material={nodes.Texts019.material}
        position={[0.272, 0.213, -0.164]}
      />
      <mesh
        
        geometry={nodes.Texts020.geometry}
        material={nodes.Texts020.material}
        position={[0.262, 0.217, -0.178]}
      />
      <mesh
        
        geometry={nodes.Texts021.geometry}
        material={nodes.Texts021.material}
        position={[0.25, 0.223, -0.196]}
      />
      <mesh
        
        geometry={nodes.Texts022.geometry}
        material={nodes.Texts022.material}
        position={[0.242, 0.212, -0.205]}
      />
      <mesh
        
        geometry={nodes.Texts023.geometry}
        material={nodes.Texts023.material}
        position={[0.231, 0.217, -0.217]}
      />
      <mesh
        
        geometry={nodes.Texts024.geometry}
        material={nodes.Texts024.material}
        position={[0.22, 0.212, -0.228]}
      />
      <mesh
        
        geometry={nodes.Texts025.geometry}
        material={nodes.Texts025.material}
        position={[0.206, 0.211, -0.241]}
      />
      <mesh
        
        geometry={nodes.Texts026.geometry}
        material={nodes.Texts026.material}
        position={[0.193, 0.217, -0.252]}
      />
      <mesh
        
        geometry={nodes.Texts027.geometry}
        material={nodes.Texts027.material}
        position={[0.184, 0.212, -0.259]}
      />
      <mesh
        
        geometry={nodes.Texts028.geometry}
        material={nodes.Texts028.material}
        position={[0.159, 0.212, -0.274]}
      />
      <mesh
        
        geometry={nodes.Texts029.geometry}
        material={nodes.Texts029.material}
        position={[0.145, 0.218, -0.282]}
      />
      <mesh
        
        geometry={nodes.Texts030.geometry}
        material={nodes.Texts030.material}
        position={[0.136, 0.209, -0.287]}
      />
      <mesh
        
        geometry={nodes.Texts031.geometry}
        material={nodes.Texts031.material}
        position={[0.121, 0.217, -0.293]}
      />
      <mesh
        
        geometry={nodes.Texts032.geometry}
        material={nodes.Texts032.material}
        position={[0.096, 0.212, -0.302]}
      />
      <mesh
        
        geometry={nodes.Texts033.geometry}
        material={nodes.Texts033.material}
        position={[0.077, 0.213, -0.308]}
      />
      <mesh
        
        geometry={nodes.Texts034.geometry}
        material={nodes.Texts034.material}
        position={[0.062, 0.211, -0.311]}
      />
      <mesh
        
        geometry={nodes.Texts035.geometry}
        material={nodes.Texts035.material}
        position={[0.046, 0.208, -0.314]}
      />
      <mesh
        
        geometry={nodes.Texts036.geometry}
        material={nodes.Texts036.material}
        position={[0.03, 0.217, -0.316]}
      />
      <mesh
        
        geometry={nodes.Texts037.geometry}
        material={nodes.Texts037.material}
        position={[0.015, 0.213, -0.317]}
      />
      <mesh
        
        geometry={nodes.Texts038.geometry}
        material={nodes.Texts038.material}
        position={[-0.001, 0.217, -0.318]}
      />
      <mesh
        
        geometry={nodes.Texts039.geometry}
        material={nodes.Texts039.material}
        position={[0.279, 0.178, -0.15]}
      />
      <mesh
        
        geometry={nodes.Texts040.geometry}
        material={nodes.Texts040.material}
        position={[0.274, 0.174, -0.161]}
      />
      <mesh
        
        geometry={nodes.Texts041.geometry}
        material={nodes.Texts041.material}
        position={[0.265, 0.174, -0.174]}
      />
      <mesh
        
        geometry={nodes.Texts042.geometry}
        material={nodes.Texts042.material}
        position={[0.259, 0.18, -0.183]}
      />
      <mesh
        
        geometry={nodes.Texts043.geometry}
        material={nodes.Texts043.material}
        position={[0.253, 0.174, -0.192]}
      />
      <mesh
        
        geometry={nodes.Texts044.geometry}
        material={nodes.Texts044.material}
        position={[0.244, 0.171, -0.202]}
      />
      <mesh
        
        geometry={nodes.Texts045.geometry}
        material={nodes.Texts045.material}
        position={[0.236, 0.173, -0.212]}
      />
      <mesh
        
        geometry={nodes.Texts046.geometry}
        material={nodes.Texts046.material}
        position={[0.223, 0.178, -0.226]}
      />
      <mesh
        
        geometry={nodes.Texts047.geometry}
        material={nodes.Texts047.material}
        position={[0.212, 0.171, -0.235]}
      />
      <mesh
        
        geometry={nodes.Texts048.geometry}
        material={nodes.Texts048.material}
        position={[0.194, 0.174, -0.251]}
      />
      <mesh
        
        geometry={nodes.Texts049.geometry}
        material={nodes.Texts049.material}
        position={[0.177, 0.175, -0.263]}
      />
      <mesh
        
        geometry={nodes.Texts050.geometry}
        material={nodes.Texts050.material}
        position={[0.165, 0.171, -0.271]}
      />
      <mesh
        
        geometry={nodes.Texts051.geometry}
        material={nodes.Texts051.material}
        position={[0.151, 0.177, -0.279]}
      />
      <mesh
        
        geometry={nodes.Texts052.geometry}
        material={nodes.Texts052.material}
        position={[0.139, 0.173, -0.285]}
      />
      <mesh
        
        geometry={nodes.Texts053.geometry}
        material={nodes.Texts053.material}
        position={[0.123, 0.174, -0.293]}
      />
      <mesh
        
        geometry={nodes.Texts054.geometry}
        material={nodes.Texts054.material}
        position={[0.107, 0.175, -0.298]}
      />
      <mesh
        
        geometry={nodes.Texts055.geometry}
        material={nodes.Texts055.material}
        position={[0.086, 0.186, -0.306]}
      />
      <mesh
        
        geometry={nodes.Texts056.geometry}
        material={nodes.Texts056.material}
        position={[0.076, 0.173, -0.308]}
      />
      <mesh
        
        geometry={nodes.Texts057.geometry}
        material={nodes.Texts057.material}
        position={[0.056, 0.174, -0.312]}
      />
      <mesh
        
        geometry={nodes.Texts058.geometry}
        material={nodes.Texts058.material}
        position={[0.042, 0.178, -0.315]}
      />
      <mesh
        
        geometry={nodes.Texts059.geometry}
        material={nodes.Texts059.material}
        position={[0.034, 0.18, -0.315]}
      />
      <mesh
        
        geometry={nodes.Texts060.geometry}
        material={nodes.Texts060.material}
        position={[0.023, 0.174, -0.316]}
      />
      <mesh
        
        geometry={nodes.Texts061.geometry}
        material={nodes.Texts061.material}
        position={[-0.275, 0.031, 0.158]}
      />
      <mesh
        
        geometry={nodes.Texts062.geometry}
        material={nodes.Texts062.material}
        position={[-0.265, 0.027, 0.173]}
      />
      <mesh
        
        geometry={nodes.Texts063.geometry}
        material={nodes.Texts063.material}
        position={[-0.258, 0.032, 0.185]}
      />
      <mesh
        
        geometry={nodes.Texts064.geometry}
        material={nodes.Texts064.material}
        position={[-0.248, 0.032, 0.197]}
      />
      <mesh
        
        geometry={nodes.Texts065.geometry}
        material={nodes.Texts065.material}
        position={[-0.239, 0.02, 0.208]}
      />
      <mesh
        
        geometry={nodes.Texts066.geometry}
        material={nodes.Texts066.material}
        position={[-0.228, 0.028, 0.221]}
      />
      <mesh
        
        geometry={nodes.Texts067.geometry}
        material={nodes.Texts067.material}
        position={[-0.218, 0.028, 0.23]}
      />
      <mesh
        
        geometry={nodes.Texts068.geometry}
        material={nodes.Texts068.material}
        position={[-0.208, 0.037, 0.239]}
      />
      <mesh
        
        geometry={nodes.Texts069.geometry}
        material={nodes.Texts069.material}
        position={[-0.202, 0.026, 0.244]}
      />
      <mesh
        
        geometry={nodes.Texts070.geometry}
        material={nodes.Texts070.material}
        position={[-0.195, 0.028, 0.251]}
      />
      <mesh
        
        geometry={nodes.Texts071.geometry}
        material={nodes.Texts071.material}
        position={[-0.184, 0.028, 0.258]}
      />
      <mesh
        
        geometry={nodes.Texts072.geometry}
        material={nodes.Texts072.material}
        position={[-0.174, 0.032, 0.265]}
      />
      <mesh
        
        geometry={nodes.Texts073.geometry}
        material={nodes.Texts073.material}
        position={[-0.165, 0.025, 0.271]}
      />
      <mesh
        
        geometry={nodes.Texts074.geometry}
        material={nodes.Texts074.material}
        position={[-0.153, 0.029, 0.278]}
      />
      <mesh
        
        geometry={nodes.Texts075.geometry}
        material={nodes.Texts075.material}
        position={[-0.14, 0.032, 0.284]}
      />
      <mesh
        
        geometry={nodes.Texts076.geometry}
        material={nodes.Texts076.material}
        position={[-0.128, 0.028, 0.29]}
      />
      <mesh
        
        geometry={nodes.Texts077.geometry}
        material={nodes.Texts077.material}
        position={[-0.116, 0.028, 0.295]}
      />
      <mesh
        
        geometry={nodes.Texts078.geometry}
        material={nodes.Texts078.material}
        position={[-0.099, 0.031, 0.301]}
      />
      <mesh
        
        geometry={nodes.Texts079.geometry}
        material={nodes.Texts079.material}
        position={[-0.092, 0.033, 0.303]}
      />
      <mesh
        
        geometry={nodes.Texts080.geometry}
        material={nodes.Texts080.material}
        position={[-0.081, 0.032, 0.307]}
      />
      <mesh
        
        geometry={nodes.Texts081.geometry}
        material={nodes.Texts081.material}
        position={[-0.071, 0.033, 0.309]}
      />
      <mesh
        
        geometry={nodes.Texts082.geometry}
        material={nodes.Texts082.material}
        position={[-0.06, 0.032, 0.311]}
      />
      <mesh
        
        geometry={nodes.Texts083.geometry}
        material={nodes.Texts083.material}
        position={[-0.046, 0.024, 0.314]}
      />
      <mesh
        
        geometry={nodes.Texts084.geometry}
        material={nodes.Texts084.material}
        position={[-0.259, 0.005, 0.182]}
      />
      <mesh
        
        geometry={nodes.Texts085.geometry}
        material={nodes.Texts085.material}
        position={[-0.253, -0.005, 0.191]}
      />
      <mesh
        
        geometry={nodes.Texts086.geometry}
        material={nodes.Texts086.material}
        position={[-0.245, -0.001, 0.202]}
      />
      <mesh
        
        geometry={nodes.Texts087.geometry}
        material={nodes.Texts087.material}
        position={[-0.235, -0.007, 0.212]}
      />
      <mesh
        
        geometry={nodes.Texts088.geometry}
        material={nodes.Texts088.material}
        position={[-0.226, 0, 0.223]}
      />
      <mesh
        
        geometry={nodes.Texts089.geometry}
        material={nodes.Texts089.material}
        position={[-0.216, -0.004, 0.232]}
      />
      <mesh
        
        geometry={nodes.Texts090.geometry}
        material={nodes.Texts090.material}
        position={[-0.206, -0.004, 0.241]}
      />
      <mesh
        
        geometry={nodes.Texts091.geometry}
        material={nodes.Texts091.material}
        position={[-0.196, -0.004, 0.249]}
      />
      <mesh
        
        geometry={nodes.Texts092.geometry}
        material={nodes.Texts092.material}
        position={[-0.183, -0.001, 0.259]}
      />
      <mesh
        
        geometry={nodes.Texts093.geometry}
        material={nodes.Texts093.material}
        position={[-0.175, -0.005, 0.264]}
      />
      <mesh
        
        geometry={nodes.Texts094.geometry}
        material={nodes.Texts094.material}
        position={[-0.164, -0.007, 0.271]}
      />
      <mesh
        
        geometry={nodes.Texts095.geometry}
        material={nodes.Texts095.material}
        position={[-0.154, -0.004, 0.277]}
      />
      <mesh
        
        geometry={nodes.Texts096.geometry}
        material={nodes.Texts096.material}
        position={[-0.135, -0.001, 0.287]}
      />
      <mesh
        
        geometry={nodes.Texts097.geometry}
        material={nodes.Texts097.material}
        position={[-0.126, 0.001, 0.291]}
      />
      <mesh
        
        geometry={nodes.Texts098.geometry}
        material={nodes.Texts098.material}
        position={[-0.117, -0.007, 0.295]}
      />
      <mesh
        
        geometry={nodes.Texts099.geometry}
        material={nodes.Texts099.material}
        position={[-0.101, -0.001, 0.301]}
      />
      <mesh
        
        geometry={nodes.Texts100.geometry}
        material={nodes.Texts100.material}
        position={[-0.09, -0.007, 0.304]}
      />
      <mesh
        
        geometry={nodes.Texts101.geometry}
        material={nodes.Texts101.material}
        position={[-0.079, -0.004, 0.307]}
      />
    </group>
  )
}

useGLTF.preload('/models/ShirtScrolling.glb')