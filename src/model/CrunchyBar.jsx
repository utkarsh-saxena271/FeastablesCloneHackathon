import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Model = ({ mouse, scale }) => {
  const { scene } = useGLTF('./models/crunchbar.glb');
  const modelRef = useRef();

  const baseRotation = {
    x: 0.1,
    y: -Math.PI / 1.5,
  };

  useFrame(() => {
    if (modelRef.current) {
      const targetY = baseRotation.y + (mouse.current.x - 0.5) * Math.PI * 0.5;
      const targetX = baseRotation.x + (mouse.current.y - 0.5) * Math.PI * 0.25;

      modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.2;
      modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.2;
    }
  });

  // GSAP animation on load
  useGSAP(() => {
    if (modelRef.current) {
      // Scale animation
      gsap.from(modelRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        delay: 0, 
      });
  
      // Rotation animation
      gsap.from(modelRef.current.rotation, {
        x: modelRef.current.rotation.x - Math.PI,
        y: modelRef.current.rotation.y - Math.PI / 2,
        duration: 1.5,
        ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        delay: 0,
      });
  
      modelRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          gsap.from(child.material, {
            opacity: 0,
            duration: 1.5,
            delay: 0,
            ease: "power2.out",
          });
        }
      });
    }
  }, []);

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={scale}
      rotation={[baseRotation.x, baseRotation.y, 0]}
    />
  );
};

const ThreeModel = () => {
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const [modelScale, setModelScale] = useState(1);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 8]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = e.clientX / innerWidth;
    mouse.current.y = e.clientY / innerHeight;
  };

  useEffect(() => {
    let resizeTimeout;

    const updateLayout = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = window.innerWidth;

        if (width < 640) {
          setModelScale(1);
          setCameraPosition([0, 0, 4.5]);
        } else if (width < 1024) {
          setModelScale(1);
          setCameraPosition([0, 0, 5.2]);
        } else {
          setModelScale(1);
          setCameraPosition([0, 0, 6]);
        }
      }, 150);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: cameraPosition, fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <Model mouse={mouse} scale={modelScale} />
      </Canvas>
    </div>
  );
};

export default ThreeModel;