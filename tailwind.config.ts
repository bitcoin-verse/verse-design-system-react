import type { Config } from 'tailwindcss';

/**
 * Verse Design System Tailwind Preset
 *
 * Extend your Tailwind config with Verse design tokens.
 *
 * Usage in tailwind.config.ts:
 * ```ts
 * import versePreset from '@verse/design-system/tailwind';
 *
 * export default {
 *   presets: [versePreset],
 *   // your config...
 * }
 * ```
 */
const versePreset: Config = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Brand
        'verse-blue': '#0085ff',
        'verse-pink': '#db00ff',
        'verse-disabled': '#8792a8',

        // Neutral Scale
        'color-0': '#ffffff',
        'color-200': '#8b92aa',
        'color-400': '#434c74',
        'color-600': '#202b58',
        'color-800': '#10183c',
        'color-1000': '#0a0a2c',

        // Status
        'success-25': '#1c4252',
        'success-100': '#52e0c8',
        'warning-25': '#433936',
        'warning-100': '#ebc146',
        'error-25': '#422133',
        'error-100': '#eb6547',

        // Semantic (CSS variables)
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: 'var(--surface)',
        'surface-muted': 'var(--surface-muted)',
        'surface-elevated': 'var(--surface-elevated)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-disabled': 'var(--text-disabled)',
      },
      fontFamily: {
        display: ['Barlow', 'sans-serif'],
        body: ['Lexend', 'sans-serif'],
        numeric: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['56px', { lineHeight: '1', letterSpacing: '-1px', fontWeight: '900' }],
        'display-lg': ['48px', { lineHeight: '1', letterSpacing: '-0.8px', fontWeight: '900' }],
        'heading-xl': ['40px', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '700' }],
        'heading-lg': ['32px', { lineHeight: '1.1', letterSpacing: '-0.4px', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '1.2', letterSpacing: '-0.3px', fontWeight: '700' }],
        'heading-sm': ['20px', { lineHeight: '1.2', letterSpacing: '-0.2px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-lg': ['16px', { lineHeight: '1', fontWeight: '500' }],
        'label': ['14px', { lineHeight: '1', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '1', fontWeight: '500' }],
        'numeric-lg': ['28px', { lineHeight: '1', fontWeight: '700' }],
        'numeric': ['24px', { lineHeight: '1', fontWeight: '700' }],
        'numeric-sm': ['20px', { lineHeight: '1', fontWeight: '700' }],
        'numeric-xs': ['16px', { lineHeight: '1', fontWeight: '600' }],
        'caption': ['12px', { lineHeight: '1.2', letterSpacing: '0.2px', fontWeight: '500' }],
      },
      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        'xxl': '40px',
        'xxxl': '48px',
        'xxxxl': '64px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'xxl': '32px',
        'pill': '9999px',
      },
      boxShadow: {
        'verse-sm': '0px 2px 60px 0px rgba(47, 169, 238, 0.2)',
        'verse-md': '0px 4px 24px 0px rgba(0, 0, 0, 0.32)',
        'verse-lg': '0px 8px 40px 0px rgba(0, 0, 0, 0.4)',
        'verse-inner': '0px 1px 1px 0px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'verse-gradient': 'linear-gradient(90deg, #0085ff, #db00ff)',
        'verse-gradient-vertical': 'linear-gradient(180deg, #0a0a2c, #10183c)',
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-out',
        'fade-out': 'fadeOut 150ms ease-in',
        'slide-in': 'slideIn 200ms ease-out',
        'slide-out': 'slideOut 200ms ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default versePreset;
