'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGRenderer } from 'three/addons/renderers/SVGRenderer.js';

const ThreeJSComponent = () => {
  const mountRef = useRef(null);
  const loadingRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;

    function init() {
      // Set up the camera
      camera = new THREE.PerspectiveCamera(33, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 10;

      // Create the scene with a green gradient background
      scene = new THREE.Scene();
      const color1 = new THREE.Color(0x176850); // New green color
      const color2 = new THREE.Color(0x003300); // Dark green color
      const gradientTexture = new THREE.TextureLoader().load(
        'data:image/svg+xml;base64,' + btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${color1.getStyle()};stop-opacity:1" />
                <stop offset="100%" style="stop-color:${color2.getStyle()};stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="256" height="256" fill="url(#grad1)" />
          </svg>`)
      );
      scene.background = gradientTexture;

      // Initialize the SVGRenderer
      renderer = new SVGRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create vertices
      const vertices = [];
      const divisions = 50;

      for (let i = 0; i <= divisions; i++) {
        const v = (i / divisions) * (Math.PI * 2);
        const x = Math.sin(v);
        const z = Math.cos(v);
        vertices.push(x, 0, z);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      // Add lines to the scene with the specified green color
      for (let i = 1; i <= 3; i++) {
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color('#02ffac'), // New green color
          linewidth: 10,
        });
        const line = new THREE.Line(geometry, material);
        line.scale.setScalar(i / 3);
        scene.add(line);
      }

      const dashedMaterial = new THREE.LineDashedMaterial({
        color: '#176850', // New green color
        linewidth: 1,
        dashSize: 10,
        gapSize: 10,
      });
      const dashedLine = new THREE.Line(geometry, dashedMaterial);
      dashedLine.scale.setScalar(2);
      scene.add(dashedLine);

      // Handle window resize
      window.addEventListener('resize', onWindowResize);

      animate();
    }

    function onWindowResize() {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    }

    function animate() {
      const time = performance.now() / 1; // Adjusted for smooth animation

      scene.traverse((child) => {
        if (child instanceof THREE.Line) {
          child.rotation.x = time;
          child.rotation.z = time / 2;
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    init();

    // Cleanup on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mountRef} />
      <div
        ref={loadingRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#176850',
          fontSize: '24px',
          fontWeight: 'bold',
          zIndex: 1,
          pointerEvents: 'none', // Prevent interactions with the loading text
        }}
      >
        Loading...
      </div>
    </div>
  );
};

export default ThreeJSComponent;
