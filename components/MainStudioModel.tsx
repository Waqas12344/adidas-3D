import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useMainStudioTextures } from "@/lib/useTextures";
import { createMaterials } from "@/lib/material";
import { studioTextures } from "@/lib/textures";

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};

export function MainStudioModel() {
  const { nodes } = useGLTF(
    "/models/main/MainStudio.glb",
  ) as unknown as GLTFResult;

  const textures = useMainStudioTextures();

  textures.defaultStudio.flipY = false;
  textures.defaultStudio.colorSpace = THREE.SRGBColorSpace;
  textures.whiteShirt.flipY = false;
  textures.whiteShirt.colorSpace = THREE.SRGBColorSpace;

  const mats = createMaterials(textures) as Record<
    keyof typeof studioTextures.main,
    THREE.MeshBasicMaterial
  >;
  const [envMaterial, setEnvMaterial] = useState<THREE.MeshBasicMaterial>(mats.defaultStudio)

  function enterHandler(material:THREE.MeshBasicMaterial){
    document.body.style.cursor = "pointer";
    setEnvMaterial(material)
  }
  function leaveHandler(){
    document.body.style.cursor = "auto"; 
  }
  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.Environment.geometry}
        material={envMaterial}
      />
      <mesh
        geometry={nodes.Shirt_White.geometry}
        position={[0.65, 0.7, -0.45]}
        rotation={[0, Math.PI / 9, 0]}
        material={mats.whiteShirt}
        onPointerEnter={()=>enterHandler(mats.whiteStudio)}
        onPointerLeave={leaveHandler}
      />
      <mesh
        geometry={nodes.Shirt_Sport.geometry}
        position={[0, 0.7, 0]}
        material={mats.sportShirt}
           onPointerEnter={()=>enterHandler(mats.redStudio)}
        onPointerLeave={leaveHandler}
      />
      <mesh
        geometry={nodes.Shirt_Gray.geometry}
        position={[-0.65, 0.7, -0.45]}
        rotation={[0, -Math.PI / 9, 0]}
        material={mats.grayShirt}
           onPointerEnter={()=>enterHandler(mats.grayStudio)}
        onPointerLeave={leaveHandler}
      />
      <mesh
        geometry={nodes.Hitbox.geometry}
        scale={[2.52, 1, 1]}
        visible={false}
        onPointerLeave={mats.defaultStudio}
      />
    </group>
  );
}

useGLTF.preload("/models/main/MainStudio.glb");
