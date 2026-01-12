// PreloadingScreen.js
import { useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import "../CSS/Preloading.css";

// 3D Model Component
function Model({ modelPath, onClick }) {
  const obj = useLoader(OBJLoader, modelPath);
  const [hovered, setHovered] = useState(false);

  // Apply a default material with green color to match the cup
  useEffect(() => {
    if (obj) {
      console.log('OBJ loaded successfully:', obj);
      obj.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: hovered ? 0x66BB6A : 0x4CAF50, // Lighter green on hover
            metalness: 0.3,
            roughness: 0.7,
          });
        }
      });
    }
  }, [obj, hovered]);

  // Auto-rotate on Y-axis only
  useEffect(() => {
    if (obj) {
      const animate = () => {
        obj.rotation.y += 0.01; // Rotate only on Y-axis
        requestAnimationFrame(animate);
      };
      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    }
  }, [obj]);

  // Change cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  return (
    <primitive
      object={obj}
      scale={0.2}
      position={[0, -1, 0]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

// Fallback loading component
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0x4CAF50} />
    </mesh>
  );
}

const PreloadingScreen = ({ onNextPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloaded = localStorage.getItem("hasPreloaded");
    console.log("UseEffect: hasPreloaded", preloaded);

    setLoading(preloaded === null || preloaded === "false");

    if (preloaded === "true") {
      onNextPage();
    }
  }, [onNextPage]);

  const handleButtonClick = () => {
    console.log("Button Clicked");
    setLoading(true);

    // Simulate a brief loading page
    setTimeout(() => {
      localStorage.setItem("hasPreloaded", "true");
      onNextPage();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="preloading-screen">
      {loading ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300vh',
            width: '300vw',
            gap: '2rem',
          }}
        >
          <div
            style={{
              width: '500px',
              height: '500px',
              background: 'var(--accents)',
              border: '4px solid var(--backgroundColour)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <Suspense fallback={<LoadingFallback />}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, -5, -5]} intensity={0.3} />
                <Model
                  modelPath={`${process.env.PUBLIC_URL}/models/cup_green_obj.obj`}
                  onClick={handleButtonClick}
                />
              </Suspense>
            </Canvas>
          </div>
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'var(--accents)',
              textAlign: 'center',
              margin: 0,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            You've been caught IDLE!
          </p>
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'var(--accents)',
              textAlign: 'center',
              margin: 0,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            drink from the cup by clicking it!
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PreloadingScreen;
