'use client';
import Script from 'next/script';

export default function SplineViewer() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
      />
      <spline-viewer url="https://prod.spline.design/5kR2TTnDGFEtO6UW/scene.splinecode" />
    </>
  );
}
