import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ========================= */
/* DUST PARTICLES */
/* ========================= */

function DustParticles({ count = 350 }) {
  const mesh = useRef();

  const dummy = useMemo(
    () => new THREE.Object3D(),
    []
  );

  const particles = useMemo(() => {
    const data = [];

    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 15,

        speed: 0.002 + Math.random() * 0.004,

        size: 0.015 + Math.random() * 0.03,

        offset: Math.random() * 100,
      });
    }

    return data;
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t + p.offset) * 0.2,
        p.y + Math.cos(t + p.offset) * 0.15,
        p.z
      );

      dummy.scale.setScalar(
        p.size *
          (1 + Math.sin(t * 2 + p.offset) * 0.2)
      );

      dummy.updateMatrix();

      mesh.current.setMatrixAt(
        i,
        dummy.matrix
      );
    });

    mesh.current.instanceMatrix.needsUpdate =
      true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[null, null, count]}
    >
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial
        color="#d9c7a1"
        transparent
        opacity={0.35}
      />
    </instancedMesh>
  );
}

/* ========================= */
/* LIGHT RAYS */
/* ========================= */

function LightRays() {
  return (
    <>
      {/* Rayo principal */}
      <mesh
        position={[-6, 1.5, -4]}
        rotation={[0, 0, 0.25]}
      >
        <planeGeometry args={[10, 22]} />

        <meshBasicMaterial
          color="#f5e6c8"
          transparent
          opacity={0.07}
          depthWrite={false}
        />
      </mesh>

      {/* Rayo secundario */}
      <mesh
        position={[-4.5, 0.5, -3]}
        rotation={[0, 0, 0.18]}
      >
        <planeGeometry args={[7, 18]} />

        <meshBasicMaterial
          color="#f5e6c8"
          transparent
          opacity={0.05}
          depthWrite={false}
        />
      </mesh>

      {/* Rayo pequeño */}
      <mesh
        position={[-5.5, 2.5, -5]}
        rotation={[0, 0, 0.32]}
      >
        <planeGeometry args={[4, 16]} />

        <meshBasicMaterial
          color="#f5e6c8"
          transparent
          opacity={0.04}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}
function Fireflies({ count = 25 }) {
  const mesh = useRef();

  const dummy = useMemo(
    () => new THREE.Object3D(),
    []
  );

  const flies = useMemo(() => {
    const data = [];

    for (let i = 0; i < count; i++) {
      data.push({
        x: 3 + Math.random() * 6,
        y: -2 + Math.random() * 5,
        z: -2 + Math.random() * 3,

        speed: 0.4 + Math.random(),

        offset: Math.random() * 100,
      });
    }

    return data;
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    flies.forEach((f, i) => {
      dummy.position.set(
        f.x + Math.sin(t * f.speed + f.offset) * 0.4,
        f.y + Math.cos(t * f.speed + f.offset) * 0.6,
        f.z
      );

      const scale =
  0.03 +
  Math.abs(
    Math.sin(
      t * 4 +
      f.offset
    )
  ) *
    0.03;

      dummy.scale.setScalar(scale);

      dummy.updateMatrix();

      mesh.current.setMatrixAt(
        i,
        dummy.matrix
      );
    });

    mesh.current.instanceMatrix.needsUpdate =
      true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[null, null, count]}
    >
      <sphereGeometry args={[1, 8, 8]} />

      <meshBasicMaterial
        color="#ffe9a6"
        transparent
        opacity={0.9}
      />
    </instancedMesh>
  );
}
/* ========================= */
/* FOG */
/* ========================= */

function FogPlanes() {
  return (
    <>
      <mesh position={[0, -2, -5]}>
        <planeGeometry args={[40, 10]} />

        <meshBasicMaterial
          color="#9ba39d"
          transparent
          opacity={0.05}
        />
      </mesh>

      <mesh position={[0, 1, -8]}>
        <planeGeometry args={[45, 12]} />

        <meshBasicMaterial
          color="#7d847f"
          transparent
          opacity={0.04}
        />
      </mesh>

      <mesh position={[0, 3, -10]}>
        <planeGeometry args={[50, 15]} />

        <meshBasicMaterial
          color="#666d68"
          transparent
          opacity={0.03}
        />
      </mesh>
    </>
  );
}

/* ========================= */
/* BACKGROUND */
/* ========================= */

export default function BackgroundParticles() {
  return (
    <div className="background">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 55,
        }}
      >
        {/* Fondo */}
        <color
          attach="background"
          args={["#050607"]}
        />

        {/* Niebla global */}
        <fog
          attach="fog"
          args={["#050607", 5, 22]}
        />

        {/* Luz ambiental */}
        <ambientLight
          intensity={0.35}
          color="#777777"
        />

        {/* Luz principal desde la izquierda */}
        <directionalLight
          position={[-8, 4, 3]}
          intensity={3}
          color="#f5e6c8"
        />

        {/* Luz secundaria */}
        <pointLight
          position={[-5, 2, 2]}
          intensity={1.5}
          color="#d8c6a0"
        />

        <LightRays />

        <FogPlanes />

<DustParticles count={350} />

<Fireflies count={30} />
      </Canvas>
    </div>
  );
}