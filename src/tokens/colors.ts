/**
 * Verse Design System - Color Tokens
 *
 * Primary brand colors from the Verse dApps ecosystem.
 */

export const verseColors = {
  // Primary Brand Colors
  verseBlue: '#0085ff',
  versePink: '#db00ff',
  verseDisabled: '#8792a8',

  // Neutral Scale (Dark Theme Default)
  color0: '#ffffff',
  color200: '#8b92aa',
  color400: '#434c74',
  color600: '#202b58',
  color800: '#10183c',
  color1000: '#0a0a2c',

  // Status Colors - Success
  success25: '#1c4252',
  success100: '#52e0c8',

  // Status Colors - Warning
  warning25: '#433936',
  warning100: '#ebc146',

  // Status Colors - Error
  error25: '#422133',
  error100: '#eb6547',
} as const;

export const verseSurfaceColors = {
  dark: {
    background: verseColors.color1000,
    surface: verseColors.color600,
    surfaceMuted: verseColors.color800,
    surfaceElevated: verseColors.color400,
    border: verseColors.color400,
    borderStrong: verseColors.color200,
    textPrimary: verseColors.color0,
    textSecondary: verseColors.color200,
    textDisabled: verseColors.verseDisabled,
    primary: verseColors.verseBlue,
    secondary: verseColors.versePink,
  },
  light: {
    background: '#f5f7fa',
    surface: verseColors.color0,
    surfaceMuted: '#e8edf5',
    surfaceElevated: '#ffffff',
    border: '#d0d5e0',
    borderStrong: '#a0a8b8',
    textPrimary: verseColors.color1000,
    textSecondary: verseColors.color400,
    textDisabled: verseColors.verseDisabled,
    primary: verseColors.verseBlue,
    secondary: verseColors.versePink,
  },
} as const;

export type VerseColors = typeof verseColors;
export type VerseSurfaceColors = typeof verseSurfaceColors;
