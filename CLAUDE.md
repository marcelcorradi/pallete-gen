# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 color palette generator application that creates Tailwind CSS-compatible color palettes. The application generates primary, semantic (success, warning, error, info), and neutral color palettes based on a user-provided base color.

## Development Setup

The application is located in the project root directory. All commands can be run directly from the root.

## Commands

All commands should be run from the project root directory:

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Architecture

The application follows Next.js 15 App Router architecture:

- `src/app/` - App Router pages and layouts
  - `page.tsx` - Main page component
  - `layout.tsx` - Root layout with fonts and metadata
  - `globals.css` - Global styles

- `src/components/` - React components
  - `ColorPalette.tsx` - Main color palette generator component with UI

- `src/lib/` - Utility functions
  - `color-utils.ts` - Core color manipulation and palette generation logic

### Key Features

1. **Color Conversion**: Comprehensive hex ↔ RGB ↔ HSL color conversion utilities
2. **Palette Generation**: Creates 11-shade palettes (50-950) following Tailwind CSS conventions
3. **Semantic Colors**: Generates contextually appropriate success, warning, error, and info colors based on color theory
4. **Neutral Palettes**: Creates warm/cool gray palettes harmonized with the base color
5. **Copy to Clipboard**: Click any color swatch to copy its hex value

### Color Algorithm

The palette generation uses sophisticated color theory:
- Base color analysis for temperature and family classification
- Saturation adjustments for different lightness levels
- Semantic color generation using complementary and analogous color relationships
- Neutral generation with subtle base color tinting

## Configuration

- TypeScript configuration with strict mode enabled
- Tailwind CSS v4 for styling
- Path aliases: `@/*` maps to `src/*`
- Next.js 15 with React 19
- Static export enabled for GitHub Pages deployment (`output: 'export'`)
- Images are unoptimized for static hosting compatibility

## Development Notes

### Color Algorithm Architecture

The core color logic is separated into distinct functions in `src/lib/color-utils.ts`:

- **Color Conversion Pipeline**: `hexToRgb()` → `rgbToHsl()` → `hslToRgb()` → `rgbToHex()`
- **Palette Generation**: `generatePalette()` creates 11 shades using lightness mapping and saturation adjustments
- **Semantic Color Logic v2.0**: Enhanced algorithm with conflict detection and fallback system
  - **8 Color Families**: red, orange, yellow, green, cyan, blue, purple, magenta (covers full 360° spectrum)
  - **Conflict Detection**: `hasSemanticConflict()` prevents semantically inappropriate colors
  - **Fallback System**: `SEMANTIC_STRATEGIES` provides primary and fallback hues for each family
  - **Perceptual Distance**: `calculateColorDistance()` ensures minimum visual separation
- **Neutral Generation**: `generateNeutralPalette()` creates harmonized grays with subtle base color tinting

### State Management Pattern

The main component (`ColorPalette.tsx`) uses React state to manage:
- Base color and all generated palettes
- Individual variation counters for semantic colors (allows refresh without affecting other colors)
- Clipboard copy feedback with automatic timeout

### Key Features Implementation

- **Click-to-copy**: All color swatches copy hex values to clipboard
- **Refresh Variations**: Semantic colors can be refreshed individually using variation parameters
- **Real-time Updates**: All palettes regenerate when base color changes
- **Error Handling**: Graceful handling of invalid hex colors