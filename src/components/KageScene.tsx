"use client";

import { KageLandingPage } from "@/src/shaders/landing-pages/LandingPages";
// NOTE: `src/shaders/threeui.css` is vendored byte-exact (SHA-256
// efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf) but is not
// imported here. It is the full ThreeUI shared stylesheet and references
// `./fonts/fragment-mono.woff2`, which is outside the registered Kage bundle.
// The Kage entry only needs `.threeui-background`, which LandingPageFrame
// already provides via inline styles plus the `.shader-frame` rules in
// app/globals.css, so importing the full sheet would only break the Next.js
// build for no visual change inside the byte-exact iframe.

export function Scene() {
  return (
    <div className="shader-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}
