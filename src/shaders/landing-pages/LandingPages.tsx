"use client";

import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "./pageTypography";
import { LandingPageFrame, type LandingPageProps } from "./LandingPageFrame";

export { LandingPageFrame, applyBackgroundPresentation } from "./LandingPageFrame";
export type { LandingPageFrameProps, LandingPageProps } from "./LandingPageFrame";

import { KAGE_TYPOGRAPHY } from "./pageRecipes";

// Adapted from `src/shaders/landing-pages/LandingPages.tsx`
// (SHA-256 4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a).
// This Next.js project only vendors the Kage entry. The full catalog file also
// exports other pages backed by private builders (tidecrest/meridian/ascii/
// betawise/axonis/nocturne/sylva sources) that are not part of the registered
// Kage bundle, so they are omitted here instead of stubbed. The Kage export
// below keeps the exact authored logic: split typography props, resolve them
// against KAGE_TYPOGRAPHY, and serve the byte-exact document at
// /landing-pages/kage.html inside LandingPageFrame.
export function KageLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAGE_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="HIMTIF — Himpunan Mahasiswa Teknik Informatika UNU Sulawesi Tenggara" sourceUrl="/landing-pages/kage.html" />;
}
