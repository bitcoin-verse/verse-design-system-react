/**
 * Verse Design System - Spacing Tokens
 *
 * T-shirt sized spacing scale for consistent spacing.
 */

export const verseSpacing = {
  0: '0px',
  px: '1px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  xxxl: '48px',
  xxxxl: '64px',
} as const;

export const verseBorderRadius = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
  pill: '9999px',
} as const;

export const verseBorderWidth = {
  none: '0px',
  hairline: '1px',
  sm: '2px',
  lg: '4px',
} as const;

export type VerseSpacing = typeof verseSpacing;
export type VerseBorderRadius = typeof verseBorderRadius;
export type VerseBorderWidth = typeof verseBorderWidth;
