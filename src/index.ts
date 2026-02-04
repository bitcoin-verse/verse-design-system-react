/**
 * Verse Design System for React/Next.js
 *
 * A comprehensive design system for the Bitcoin.com Verse ecosystem.
 */

// Tokens
export * from './tokens';

// Components
export { VerseButton } from './components/Button';
export type { VerseButtonProps, VerseButtonVariant, VerseButtonSize } from './components/Button';

// Re-export for convenience
export { default as versePreset } from '../tailwind.config';
