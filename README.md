# Verse Design System for React

A comprehensive design system for the Bitcoin.com Verse ecosystem, built for React and Next.js applications.

## Features

- Dark-first theming (Verse's signature deep blue aesthetic)
- Tailwind CSS preset with all Verse design tokens
- CSS variables for easy customization
- Typed React components
- Accessible and responsive

## Installation

```bash
npm install @verse/design-system
# or
yarn add @verse/design-system
# or
pnpm add @verse/design-system
```

## Quick Start

### 1. Import Global Styles

Add the Verse global styles to your app:

```tsx
// app/layout.tsx (Next.js App Router)
import '@verse/design-system/styles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 2. Configure Tailwind (Optional)

Extend your Tailwind config with the Verse preset for access to all design tokens:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import versePreset from '@verse/design-system/tailwind';

const config: Config = {
  presets: [versePreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@verse/design-system/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;
```

### 3. Use Components

```tsx
import { VerseButton } from '@verse/design-system';

export default function Page() {
  return (
    <VerseButton variant="primary" size="md">
      Connect Wallet
    </VerseButton>
  );
}
```

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `verse-blue` | `#0085FF` | Primary brand, CTAs |
| `verse-pink` | `#DB00FF` | Secondary accent, gradients |
| `color-0` | `#FFFFFF` | White text/icons |
| `color-200` | `#8B92AA` | Secondary text |
| `color-400` | `#434C74` | Borders, muted elements |
| `color-600` | `#202B58` | Cards, surfaces |
| `color-800` | `#10183C` | Elevated surfaces |
| `color-1000` | `#0A0A2C` | Background |

### Status Colors

| Status | Background | Foreground |
|--------|------------|------------|
| Success | `#1C4252` | `#52E0C8` |
| Warning | `#433936` | `#EBC146` |
| Error | `#422133` | `#EB6547` |

### Typography

```tsx
// Font families available via Tailwind
font-display  // Barlow - headings
font-body     // Lexend - body text
font-numeric  // IBM Plex Sans - numbers
font-mono     // JetBrains Mono - code
```

### Spacing

```tsx
spacing-xs   // 4px
spacing-s    // 8px
spacing-m    // 16px
spacing-l    // 24px
spacing-xl   // 32px
spacing-xxl  // 40px
```

## Components

### VerseButton

```tsx
import { VerseButton } from '@verse/design-system';

// Variants
<VerseButton variant="primary">Primary</VerseButton>
<VerseButton variant="secondary">Secondary</VerseButton>
<VerseButton variant="gradient">Gradient</VerseButton>
<VerseButton variant="ghost">Ghost</VerseButton>
<VerseButton variant="link">Link</VerseButton>
<VerseButton variant="danger">Danger</VerseButton>
<VerseButton variant="success">Success</VerseButton>

// Sizes
<VerseButton size="sm">Small</VerseButton>
<VerseButton size="md">Medium</VerseButton>
<VerseButton size="lg">Large</VerseButton>
<VerseButton size="xl">Extra Large</VerseButton>

// With icons
<VerseButton leadingIcon={<WalletIcon />}>Connect</VerseButton>
<VerseButton trailingIcon={<ArrowIcon />}>Continue</VerseButton>

// States
<VerseButton loading>Loading...</VerseButton>
<VerseButton disabled>Disabled</VerseButton>
<VerseButton fullWidth>Full Width</VerseButton>
```

## Theming

### Dark Mode (Default)

The design system defaults to dark mode. No additional configuration needed.

### Light Mode

Toggle light theme by adding `data-theme="light"` to your HTML element:

```tsx
<html data-theme="light">
```

Or dynamically:

```tsx
document.documentElement.setAttribute('data-theme', 'light');
```

### CSS Variables

All colors are exposed as CSS variables for custom styling:

```css
.custom-element {
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
}
```

## Utility Classes

```tsx
// Gradient background
<div className="verse-gradient">...</div>

// Gradient text
<h1 className="verse-gradient-text">Verse</h1>
```

## TypeScript

Full TypeScript support with exported types:

```tsx
import type {
  VerseButtonProps,
  VerseButtonVariant,
  VerseButtonSize
} from '@verse/design-system';
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode
npm run dev

# Type check
npm run type-check

# Lint
npm run lint
```

## License

MIT License - Bitcoin.com Verse
