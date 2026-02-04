/**
 * Verse Design System - Typography Tokens
 *
 * Font families and sizes for the Verse ecosystem.
 */

export const verseFontFamily = {
  display: "'Barlow', sans-serif",
  body: "'Lexend', sans-serif",
  numeric: "'IBM Plex Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const verseFontSize = {
  // Display
  displayXl: '56px',
  displayLg: '48px',

  // Headings
  headingXl: '40px',
  headingLg: '32px',
  headingMd: '24px',
  headingSm: '20px',

  // Body
  bodyLg: '18px',
  body: '16px',
  bodySm: '14px',
  bodyXs: '12px',

  // Labels
  labelLg: '16px',
  label: '14px',
  labelSm: '12px',

  // Numeric
  numericLg: '28px',
  numeric: '24px',
  numericSm: '20px',
  numericXs: '16px',

  // Caption
  caption: '12px',

  // Mono
  mono: '14px',
  monoSm: '12px',

  // Button
  buttonLg: '16px',
  button: '14px',
  buttonSm: '12px',
} as const;

export const verseFontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
} as const;

export const verseLineHeight = {
  tight: '1',
  snug: '1.1',
  normal: '1.4',
  relaxed: '1.6',
} as const;

export type VerseFontFamily = typeof verseFontFamily;
export type VerseFontSize = typeof verseFontSize;
export type VerseFontWeight = typeof verseFontWeight;
export type VerseLineHeight = typeof verseLineHeight;
