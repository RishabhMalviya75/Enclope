import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ACCENT = '#FF5F1F';

/* ------------------------------------------------------------------ 3D ---- */

/** The core: a faceted solid with molten edges glowing through a dark shell. */
function Core({ still }) {
  const group = useRef();
  const inner = useRef();

  useFrame((state, delta) => {
    if (still || !group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(t * 0.25) * 0.12;
    // gentle breathing on the molten inner shell
    const pulse = 1 + Math.sin(t * 1.1) * 0.02;
    if (inner.current) inner.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group} position={[2.1, 0, 0]}>
      {/* molten inner body */}
      <Icosahedron ref={inner} args={[1.72, 1]}>
        <meshStandardMaterial
          color="#120a06"
          emissive={ACCENT}
          emissiveIntensity={0.22}
          metalness={0.95}
          roughness={0.28}
          flatShading
        />
      </Icosahedron>

      {/* outer wireframe cage */}
      <Icosahedron args={[2.35, 2]}>
        <meshBasicMaterial color="#5a5a5a" wireframe transparent opacity={0.4} />
      </Icosahedron>

      {/* thin accent cage, counter-rotating via Float */}
      <Icosahedron args={[2.9, 1]}>
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.22} />
      </Icosahedron>
    </group>
  );
}

/** Sparks drifting around the core. */
function Sparks({ count, still }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // shell distribution so nothing sits inside the core
      const r = 3.2 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (still || !ref.current) return;
    ref.current.rotation.y += delta * 0.035;
    ref.current.rotation.z += delta * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={ACCENT}
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/** Camera drifts toward the pointer — parallax without moving any DOM. */
function CameraRig({ still }) {
  useFrame((state, delta) => {
    if (still) return;
    const { camera, pointer } = state;
    camera.position.x += (pointer.x * 1.1 - camera.position.x) * Math.min(delta * 2.2, 1);
    camera.position.y += (pointer.y * 0.7 - camera.position.y) * Math.min(delta * 2.2, 1);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene({ still, sparkCount }) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} />
      <pointLight position={[-2, -3, 5]} intensity={70} color={ACCENT} distance={24} />
      <pointLight position={[7, 5, -2]} intensity={45} color="#5b8cff" distance={22} />

      <Float speed={still ? 0 : 1.1} rotationIntensity={still ? 0 : 0.35} floatIntensity={still ? 0 : 0.7}>
        <Core still={still} />
      </Float>

      <Sparks count={sparkCount} still={still} />
      <CameraRig still={still} />
    </>
  );
}


/** Default export: the whole canvas, lazy-loaded so three.js stays out of the
 *  critical path and the hero copy paints immediately. */
export default function HeroScene({ still, sparkCount }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => gl.setClearColor('#050505', 0)}
      frameloop={still ? 'demand' : 'always'}
    >
      <Scene still={still} sparkCount={sparkCount} />
    </Canvas>
  );
}
