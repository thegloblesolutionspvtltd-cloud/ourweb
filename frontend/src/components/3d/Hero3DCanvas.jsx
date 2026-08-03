import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the ERA TECH Logo Mesh
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // 1. Outer Orbit Ring (Glowing Blue)
    const outerRingGeo = new THREE.TorusGeometry(1.8, 0.035, 16, 100);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: false,
      transparent: true,
      opacity: 0.8,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = Math.PI / 3;
    logoGroup.add(outerRing);

    // 2. Middle Orbit Ring (Glowing Purple)
    const midRingGeo = new THREE.TorusGeometry(1.5, 0.03, 16, 100);
    const midRingMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.7,
    });
    const midRing = new THREE.Mesh(midRingGeo, midRingMat);
    midRing.rotation.y = Math.PI / 4;
    logoGroup.add(midRing);

    // 3. Central 3D ERA TECH Emblem Core (Octahedron & Ring Matrix)
    const coreGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x2563eb,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.6,
      shininess: 100,
      specular: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    logoGroup.add(coreMesh);

    // 4. Inner Solid Core Gem
    const gemGeo = new THREE.OctahedronGeometry(0.55, 0);
    const gemMat = new THREE.MeshPhongMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      shininess: 120,
    });
    const gemMesh = new THREE.Mesh(gemGeo, gemMat);
    logoGroup.add(gemMesh);

    // 5. Floating 3D Orbiting Tech Particles
    const particlesCount = 300;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorChoices = [
      new THREE.Color('#60a5fa'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#c084fc'),
      new THREE.Color('#38bdf8')
    ];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.2 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      const randomColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i] = randomColor.r;
      colors[i + 1] = randomColor.g;
      colors[i + 2] = randomColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 5, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xc084fc, 5, 20);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / width) * 2 - 1;
      mouseY = -(y / height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop (Continuous Running & Rotation)
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate logo emblem components
      logoGroup.rotation.y += 0.012;
      logoGroup.rotation.x = targetY * 0.4 + Math.sin(Date.now() * 0.001) * 0.1;
      logoGroup.rotation.y = targetX * 0.4 + logoGroup.rotation.y;

      outerRing.rotation.z += 0.015;
      midRing.rotation.z -= 0.02;
      gemMesh.rotation.y -= 0.02;

      particleSystem.rotation.y -= 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      outerRingGeo.dispose();
      outerRingMat.dispose();
      midRingGeo.dispose();
      midRingMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      gemGeo.dispose();
      gemMat.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[550px] flex items-center justify-center pointer-events-auto">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Center Floating ERA TECH Logo & Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center text-center space-y-2 z-10 animate-float">
        <div className="px-5 py-2.5 rounded-2xl glass-panel-luxury border border-blue-400/50 shadow-2xl backdrop-blur-2xl flex items-center space-x-3 bg-slate-950/80">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-black text-sm shadow-lg animate-pulse">
            E
          </div>
          <div className="text-left">
            <div className="text-base font-black text-white tracking-tight leading-none">ERA TECH</div>
            <div className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-blue-400">SOLUTIONS</div>
          </div>
        </div>
      </div>

      {/* Running Bottom Status Badge */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 px-5 py-2 rounded-2xl glass-panel-luxury border border-blue-500/30 shadow-2xl flex items-center space-x-2.5 pointer-events-none bg-slate-950/80">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[11px] font-extrabold text-blue-300 tracking-wider uppercase">
          ERA TECH 3D Emblem • Live Interactive Core
        </span>
      </div>
    </div>
  );
}
