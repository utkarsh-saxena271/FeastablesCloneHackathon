import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const MilkBarModel = ({ mouse, scale }) => {
  const { scene } = useGLTF('./models/milkbar.glb');
  const modelRef = useRef();

  const baseRotation = {
    x: Math.PI / 2,
    y: -Math.PI / 1.1,
    z: 0,
  };

  useFrame(() => {
    if (modelRef.current) {
      const targetY = baseRotation.y + (mouse.current.x - 0.5) * Math.PI * 0.5;
      const targetX = baseRotation.x + (mouse.current.y - 0.5) * Math.PI * 0.12;
      const targetZ = baseRotation.z + (mouse.current.x - 0.5) * Math.PI * 0.08;

      modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.1;
      modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.1;
      modelRef.current.rotation.z += (targetZ - modelRef.current.rotation.z) * 0.1;
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={scale}
      rotation={[baseRotation.x, baseRotation.y, baseRotation.z]}
    />
  );
};

const MilkBar = () => {
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const [modelScale, setModelScale] = useState(5);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 9]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = e.clientX / innerWidth;
    mouse.current.y = e.clientY / innerHeight;
  };

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // small screens
        setModelScale(3.2);
        setCameraPosition([0, 0, 7.5]);
      } else if (width < 1024) {
        // medium screens
        setModelScale(4.2);
        setCameraPosition([0, 0, 8]);
      } else {
        // large screens
        setModelScale(5);
        setCameraPosition([0, 0, 9]);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="w-full h-[60vh]" onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[2, 2, 2]} intensity={0.9} />
        <MilkBarModel mouse={mouse} scale={modelScale} />
      </Canvas>
    </div>
  );
};

export default MilkBar;


