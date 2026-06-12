import { shirtColors } from "@/lib/colors";
import { ShirtType, TextureKey } from "@/lib/textures";
import { useShirtEnvCube, useShirtSectionTextures, useShirtVideoTexture } from "@/lib/useTextures";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
const ThirdModel = ({ shirtType }: { shirtType: ShirtType }) => {
  const textures = useShirtSectionTextures(shirtType, "third") as Record<
    TextureKey<typeof shirtType, "third">,
    THREE.Texture
  >;

  const envMap = useShirtEnvCube(shirtType);
const video = useShirtVideoTexture(shirtType);
  const getWallColor = () => shirtColors[shirtType]?.wall ?? "white";

  return (
    <group>
      <mesh scale={0.1} rotation-y={-Math.PI / 2} position={[0.2, 0.65, 0]}>
        <planeGeometry args={[16, 9]} />
        <meshBasicMaterial map={video} />
      </mesh>
      <mesh position-y={0.2} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 3]} />
        <MeshReflectorMaterial
          envMap={envMap}
          normalMap={textures.normal}
          map={textures.overlay}
          blur={[300, 30]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          metalness={0}
        />
      </mesh>
      {/* wall  */}

      <mesh position={[0, 5, -1.3]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color={getWallColor()} map={textures.overlay} />
      </mesh>
    </group>
  );
};

export default ThirdModel;
