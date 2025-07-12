# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 color palette generator application that creates Tailwind CSS-compatible color palettes. The application generates primary, semantic (success, warning, error, info), and neutral color palettes based on a user-provided base color.

**IMPORTANTE**: Este projeto segue metodologia rigorosa definida em `initial_instructions.md` (português). Sempre consulte este arquivo antes de qualquer desenvolvimento.

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

### Core Algorithm Functions

Key functions in `src/lib/color-utils.ts`:
- `generatePalette(baseColor: string)` - Creates 11-shade Tailwind palette
- `generateSemanticColor(type, baseColor, variation)` - Generates semantic colors with conflict avoidance
- `generateNeutralPalette(baseColor: string)` - Creates harmonized neutral grays
- `hasSemanticConflict(baseHue, semanticHue)` - Detects color conflicts using perceptual distance

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

### Responsive Design

The UI implements a mobile-first responsive approach with three distinct layouts:
- **Mobile** (default): 2-column grid with larger touch targets
- **Tablet** (sm breakpoint): 6-column grid with medium-sized swatches  
- **Desktop** (lg breakpoint): 11-column grid showing all shades in a row

### Deployment

The application is configured for static deployment to GitHub Pages:
- GitHub Actions workflow deploys automatically on push to master branch
- Static export configuration in `next.config.ts`
- Two deployment workflows exist: `nextjs.yml` (standard) and `deploy.yml` (legacy)

### Testing and Quality Assurance

External test files exist for algorithm validation:
- `test-color-algorithm-v2.js` - Semantic color algorithm testing
- `test-semantic-colors.js` - Semantic color validation
- Run `npm run lint` to check code quality before commits

### Development Environment

- **Development**: WSL (Windows Subsystem for Linux) environment
- **Local Access**: Use WSL IP address (not localhost) for testing from Windows host
- **Production**: GitHub Pages static hosting

### Quality Standards

The project follows strict quality requirements:
- **Accessibility**: WCAG 2.1 AA compliance (contrast ≥ 4.5:1)
- **Performance**: Palette generation < 100ms
- **Responsiveness**: Functional from 320px to 1920px
- **Browser Support**: Chrome, Firefox, Safari, Edge
- **Test Coverage**: ≥ 80% target

### Important Documentation

Before making changes, reference these key files:
- `initial_instructions.md` - Complete development methodology and requirements (Portuguese)
- `metodologiaCores.md` - Scientific color theory methodology for semantic colors (Portuguese)
- `color-algorithm-evolution.md` - Algorithm version history and improvements (Portuguese)
- `changelog.md` - Detailed version history with technical changes
- `test-color-algorithm-v2.js` - Comprehensive test cases for algorithm validation
- `test-semantic-colors.js` - Semantic color methodology verification

### Development Methodology

This project follows a strict 4-step development process:
1. **Análise Prévia** - Pre-development analysis and planning
2. **Planejamento Detalhado** - Detailed solution architecture
3. **Implementação Metodológica** - Methodical implementation following patterns
4. **Documentação e Validação** - Documentation updates and testing

### Color Algorithm Details

The semantic color generation follows scientific color theory principles:
- **8 Color Families**: red (345°-15°), orange (15°-45°), yellow (45°-75°), green (75°-135°), cyan (135°-165°), blue (165°-225°), purple (225°-285°), magenta (285°-345°)
- **Conflict Detection**: `hasSemanticConflict()` with minimum 30° perceptual distance
- **Fallback System**: `SEMANTIC_STRATEGIES` provides primary and fallback hues for each family
- **Harmonic Displacement**: Family-specific strategies to avoid conflicts with brand colors

### Missing Documentation Files

The following files are referenced in `initial_instructions.md` but don't exist yet:
- `architecture.md` - Technical architecture documentation
- `common_errors.md` - Common problems and solutions  
- `session_context.md` - Current development state
- `decisions_log.md` - Technical decisions record
- `pending_tasks.md` - Prioritized task list
- `blockers.md` - Identified impediments

Create these files as needed when working on the project.

## 🚀 PROCESSO OBRIGATÓRIO DE 4 ETAPAS

**SEMPRE SEGUIR** esta metodologia antes de qualquer implementação:

### 1️⃣ ANÁLISE PRÉVIA (OBRIGATÓRIA)
- [ ] Objetivo da tarefa claramente definido?
- [ ] Impacto em outras partes do sistema avaliado?
- [ ] Dependências identificadas?
- [ ] Riscos técnicos mapeados?
- [ ] Alternativas consideradas?

### 2️⃣ PLANEJAMENTO DETALHADO (OBRIGATÓRIO)  
- [ ] Arquitetura da solução desenhada?
- [ ] Estrutura de arquivos definida?
- [ ] Fluxo de dados mapeado?
- [ ] Testes necessários identificados?
- [ ] Critérios de aceitação estabelecidos?

### 3️⃣ IMPLEMENTAÇÃO METODOLÓGICA (OBRIGATÓRIA)
- [ ] Código escrito seguindo padrões estabelecidos?
- [ ] Comentários técnicos adicionados onde necessário?
- [ ] Testes unitários implementados?
- [ ] Validação de acessibilidade aplicada?
- [ ] Performance otimizada?

### 4️⃣ DOCUMENTAÇÃO E VALIDAÇÃO (OBRIGATÓRIA)
- [ ] Changelog atualizado com formato padronizado?
- [ ] Documentação técnica atualizada?
- [ ] Testes de integração executados?
- [ ] Validação no ambiente WSL realizada?
- [ ] Common_errors.md atualizado se necessário?

## 🎯 CONTEXT7 MCP SERVER (USO OBRIGATÓRIO)

**SEMPRE CONSULTAR** Context7 antes de implementar:
- [ ] Resolver Library ID antes de usar get-library-docs
- [ ] Pesquisar documentação relevante para bibliotecas
- [ ] Aplicar conhecimento na implementação
- [ ] Validar usando exemplos oficiais

## Important Guidelines

### Before Making Changes
- **OBRIGATÓRIO**: Ler `initial_instructions.md` (metodologia completa)
- **OBRIGATÓRIO**: Usar Context7 MCP server para documentação
- Always run `npm run lint` after code changes
- Test external algorithm files when modifying color logic:
  - `node test-color-algorithm-v2.js`
  - `node test-semantic-colors.js`
- Reference the Portuguese documentation files for methodology and color theory context

### WSL Development Environment
- **Development**: WSL (Windows Subsystem for Linux) environment
- **Local Access**: Use WSL IP address (not localhost) for testing from Windows host
- **Command to get WSL IP**: `ip addr show eth0`
- **Local URL**: `http://[WSL-IP]:3000`

### Quality Standards (OBRIGATÓRIO)
- **Acessibilidade**: Contraste ≥ 4.5:1 (WCAG 2.1 AA)
- **Performance**: Geração de paleta < 100ms
- **Responsividade**: Funcional de 320px - 1920px
- **Compatibilidade**: Chrome, Firefox, Safari, Edge
- **Cobertura de testes**: ≥ 80%

### Common Development Tasks
- **Adding new semantic colors**: Modify `SEMANTIC_STRATEGIES` in `color-utils.ts`
- **Changing color algorithm**: Update functions in `color-utils.ts` and validate with test files
- **UI modifications**: Edit `ColorPalette.tsx` following the responsive grid pattern
- **Deployment**: Changes to master branch auto-deploy via GitHub Actions

## 📊 SISTEMA DE CHANGELOG (OBRIGATÓRIO)

**FORMATO PADRONIZADO** para `/changelog/` directory:
```markdown
## [YYYY-MM-DD] - Versão X.X.X

### ✅ ADICIONADO
- [FEATURE] Descrição detalhada da funcionalidade
- [COMPONENT] Nome do componente criado

### 🔄 MODIFICADO
- [ENHANCEMENT] Melhoria implementada  
- [REFACTOR] Refatoração realizada

### 🐛 CORRIGIDO
- [BUGFIX] Problema específico corrigido
- [HOTFIX] Correção urgente aplicada

### 📋 TÉCNICO
- [DEPENDENCY] Dependência adicionada/atualizada
- [CONFIG] Configuração alterada
- [PERFORMANCE] Otimização implementada

### 🧪 TESTES
- [TEST] Teste adicionado/modificado
- [VALIDATION] Validação implementada
```