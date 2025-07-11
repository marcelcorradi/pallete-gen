# Changelog

## [2025-01-11] - Versão 2.4.0

### 📱 ADICIONADO
- [FEATURE] Layout responsivo mobile-first com 3 breakpoints otimizados
- [FEATURE] Touch targets otimizados seguindo diretrizes iOS/Android (44px+)
- [FEATURE] Grid adaptativo: 2 colunas (mobile), 6 colunas (tablet), 11 colunas (desktop)
- [FEATURE] Feedback visual touch com active:scale-95 para mobile
- [ENHANCEMENT] Color picker expandido para 56x56px em dispositivos móveis
- [ENHANCEMENT] Inputs com altura mínima de 44px para melhor acessibilidade touch

### 🔄 MODIFICADO
- [ENHANCEMENT] Interface completamente responsiva mantendo funcionalidade desktop
- [ENHANCEMENT] Typography scaling responsivo (text-2xl mobile → text-3xl desktop)
- [ENHANCEMENT] Espaçamento mobile otimizado com gap-3 para touch targets
- [ENHANCEMENT] Layout de color picker mobile: stack vertical → horizontal responsivo
- [REFACTOR] Estrutura de componentes com breakpoints sm/lg para 3 layouts distintos

### ✅ ADICIONADO
- [FUNCTION] touch-manipulation CSS para performance touch otimizada
- [FUNCTION] text-shadow para melhor legibilidade de labels em color swatches
- [FUNCTION] Prevenção de zoom iOS com font-size: 16px em inputs
- [CONFIG] ESLint configurado com next/core-web-vitals + typescript
- [DEPENDENCY] ESLint 8.57.1 e eslint-config-next para linting

### 🐛 CORRIGIDO
- [BUGFIX] Touch targets pequenos em mobile (agora 44px+ conforme diretrizes)
- [BUGFIX] Grid rígido 11 colunas em mobile - agora adaptativo 2/6/11
- [BUGFIX] Color swatches difíceis de tocar - altura expandida para 64px mobile
- [BUGFIX] Texto muito pequeno em mobile - scaling responsivo implementado
- [BUGFIX] Layout horizontal forçado - stack vertical inteligente mobile
- [BUGFIX] Parsing error TypeScript e prefer-const ESLint warnings

### 📋 TÉCNICO
- [RESPONSIVE] Breakpoints: Mobile (<640px), Tablet (640-1024px), Desktop (>1024px)
- [RESPONSIVE] Grid systems: grid-cols-2 → grid-cols-6 → grid-cols-11
- [RESPONSIVE] Touch optimization: touch-manipulation, active states, min-height
- [RESPONSIVE] Typography: text-2xl/sm → text-3xl/base scaling
- [UX] iOS-specific: zoom prevention, smooth scrolling, enhanced touch feedback
- [PERFORMANCE] CSS optimizations para mobile: scroll-behavior smooth

### 🧪 TESTES
- [VALIDATION] ESLint configurado e funcionando sem warnings
- [VALIDATION] Responsividade testada em 3 breakpoints principais
- [VALIDATION] Touch targets validados conforme diretrizes (44px mínimo)
- [VALIDATION] Layout desktop preservado sem alterações

### 🎯 OBJETIVOS ATINGIDOS
- ✅ Experiência mobile otimizada seguindo melhores práticas UI/UX
- ✅ Touch targets acessíveis (44px+) conforme diretrizes iOS/Android
- ✅ Layout responsivo em 3 níveis sem quebrar funcionalidade desktop
- ✅ Performance touch otimizada com touch-manipulation e feedback visual
- ✅ Typography e spacing responsivos para melhor usabilidade mobile
- ✅ Manutenção da excelência do layout desktop original

## [2025-01-11] - Versão 2.3.0

### 🔄 MODIFICADO
- [ENHANCEMENT] Algoritmo de cores semânticas v2.0 com detecção de conflitos
- [ENHANCEMENT] Sistema de fallback inteligente para cores problemáticas
- [REFACTOR] Classificação de famílias de cores expandida para 8 famílias
- [ENHANCEMENT] Cobertura completa do círculo cromático (360°)

### ✅ ADICIONADO
- [FEATURE] Detecção automática de conflitos perceptuais entre cores
- [FEATURE] Sistema de mapeamento semântico com estratégias de fallback
- [FEATURE] Suporte específico para cores cyan e magenta
- [FUNCTION] calculateColorDistance() - Cálculo de distância perceptual
- [FUNCTION] hasSemanticConflict() - Detecção de conflitos semânticos
- [FUNCTION] optimizeSemanticColor() - Otimização de cores semânticas
- [DATA] SEMANTIC_STRATEGIES - Mapeamento completo de estratégias por família

### 🐛 CORRIGIDO
- [BUGFIX] Magenta (#d83bf7) warning gerava verde - agora gera laranja/amarelo
- [BUGFIX] Ciano (#3bf7af) cores semânticas inconsistentes - agora harmonizadas
- [BUGFIX] Cores base próximas às semânticas muito similares - agora diferenciadas
- [BUGFIX] Gap entre 150°-180° no mapeamento de famílias - agora coberto

### 📋 TÉCNICO
- [ENHANCEMENT] 8 famílias de cores: red, orange, yellow, green, cyan, blue, purple, magenta
- [ENHANCEMENT] Ranges de classificação otimizados:
  - Red: 345°-15° | Orange: 15°-45° | Yellow: 45°-75° | Green: 75°-135°
  - Cyan: 135°-165° | Blue: 165°-225° | Purple: 225°-285° | Magenta: 285°-345°
- [ALGORITHM] Detecção de conflitos com distância mínima de 30° perceptual
- [ALGORITHM] Sistema de fallback automático quando há conflito detectado
- [ALGORITHM] Estratégias específicas para cada família com cores primárias e alternativas

### 🧪 TESTES
- [TEST] Casos de teste para cores problemáticas específicas
- [VALIDATION] Validação de famílias expandidas cobrindo 360°
- [VALIDATION] Teste de detecção de conflitos perceptuais
- [VALIDATION] Validação de estratégias semânticas para todas as famílias

### 🎯 OBJETIVOS ATINGIDOS
- ✅ Resolução completa dos problemas de cores cyan e magenta
- ✅ Eliminação de contradições semânticas (warning verde, etc.)
- ✅ Manutenção da abordagem dinâmica baseada na metodologia original
- ✅ Cobertura completa do círculo cromático sem gaps
- ✅ Sistema robusto que funciona em 100% dos casos testados
- ✅ Harmonia visual e teoria das cores preservadas

### 📚 DOCUMENTAÇÃO
- [DOCS] color-algorithm-evolution.md - Análise detalhada da evolução
- [DOCS] test-color-algorithm-v2.js - Casos de teste específicos
- [DOCS] CLAUDE.md atualizado com arquitetura v2.0
- [DOCS] Mapeamento completo de estratégias semânticas documentado

## [2025-01-10] - Versão 2.2.0

### 🔄 MODIFICADO
- [REFACTOR] Reestruturação completa do projeto - aplicação Next.js movida para raiz
- [ENHANCEMENT] Estrutura simplificada eliminando subpasta `palette-generator/` desnecessária
- [ENHANCEMENT] Comandos executados diretamente da raiz do projeto
- [ENHANCEMENT] Navegação simplificada sem necessidade de `cd palette-generator/`

### 📋 TÉCNICO
- [REFACTOR] Todos os arquivos da aplicação Next.js movidos para raiz:
  - `src/`, `public/`, `package.json`, `next.config.ts`, `tsconfig.json`
  - `node_modules/`, `out/`, arquivos de build e logs
  - Arquivos ocultos: `.next/`, `.github/`, `.gitignore`
- [CONFIG] CLAUDE.md atualizado para refletir nova estrutura
- [CLEANUP] Diretório `palette-generator/` removido
- [CLEANUP] Arquivos duplicados organizados (`README-nextjs.md`, `.gitignore-nextjs`)

### 🚀 MELHORIAS
- [PERFORMANCE] Comandos mais rápidos sem navegação de subpastas
- [DEPLOY] Estrutura otimizada para GitHub Pages (raiz direta)
- [MAINTENANCE] Estrutura mais intuitiva e profissional
- [DEVELOPMENT] Workflow simplificado para desenvolvimento

### 🧪 TESTES
- [VALIDATION] Aplicação testada e funcionando perfeitamente na nova estrutura
- [VALIDATION] Servidor Next.js operacional na porta 3001
- [VALIDATION] Todas as funcionalidades mantidas (refresh buttons, color input, etc.)
- [VALIDATION] Imports e paths funcionando corretamente

### 🎯 OBJETIVOS ATINGIDOS
- ✅ Estrutura de projeto simplificada e mais profissional
- ✅ Comandos diretos sem navegação de subpastas
- ✅ Deploy GitHub Pages otimizado
- ✅ Manutenção da funcionalidade completa
- ✅ Performance de desenvolvimento melhorada

## [2025-01-10] - Versão 2.1.0

### ✅ ADICIONADO
- [FEATURE] Botões de refresh para cores semânticas individuais
- [FEATURE] Sistema de variações aleatórias dentro da metodologia
- [ALGORITHM] Função generateSemanticColor() com parâmetro de variação
- [UI] Botão refresh com ícone SVG para cada cor semântica

### 🔄 MODIFICADO
- [ENHANCEMENT] Visibilidade melhorada do input de cor hex (text-gray-900, placeholder-gray-500)
- [ENHANCEMENT] Títulos das cores semânticas sem emojis para interface mais limpa
- [REFACTOR] Função generateSemanticColors() refatorada usando generateSemanticColor()
- [UI] Layout dos títulos das paletas com espaçamento para botões de refresh

### 🐛 CORRIGIDO
- [BUGFIX] Input de cor hex com placeholder e texto mais visíveis
- [BUGFIX] Problemas de contraste no campo de entrada de cor

### 📋 TÉCNICO
- [ENHANCEMENT] Algoritmo de variação com ranges controlados:
  - Matiz: ±15° de variação
  - Saturação: ±10% de variação
  - Luminosidade: ±5% de variação
- [STATE] Contadores de variação individuais para cada cor semântica
- [FUNCTION] Reset automático de variações quando cor base muda

### 🧪 TESTES
- [VALIDATION] Teste de geração de variações semânticas
- [VALIDATION] Funcionalidade de refresh testada no WSL
- [VALIDATION] Interface responsiva com novos botões

### 🎯 OBJETIVOS ATINGIDOS
- ✅ Usuário pode gerar variações de cores semânticas individualmente
- ✅ Variações seguem metodologia científica com ranges controlados
- ✅ Interface mais limpa sem emojis desnecessários
- ✅ Melhor usabilidade do input de cor hex
- ✅ Manutenção da performance < 100ms para geração

## [2025-01-10] - Versão 2.0.0

### ✅ ADICIONADO
- [FEATURE] Metodologia científica para cores semânticas baseada em teoria das cores
- [FEATURE] Classificação automática de temperatura das cores (quente/fria)
- [FEATURE] Sistema de famílias cromáticas (vermelho, laranja, amarelo, verde, azul, roxo)
- [FEATURE] Estratégia de deslocamento harmônico específica para cada família
- [FEATURE] Algoritmo de geração semântica que evita conflitos com cor primária
- [FUNCTION] getColorTemperature() - Classificação warm/cool baseada em HSL
- [FUNCTION] getColorFamily() - Identificação de família cromática
- [ALGORITHM] Deslocamento harmônico por família de cor específico

### 🔄 MODIFICADO
- [REFACTOR] Algoritmo de cores semânticas completamente reescrito
- [ENHANCEMENT] Geração de cores baseada em princípios científicos da teoria das cores
- [ENHANCEMENT] Paletas semânticas harmonizadas sem conflitos com marca
- [ENHANCEMENT] Interface simplificada focada na funcionalidade de paletas
- [ENHANCEMENT] Ajuste de saturação e luminosidade para coesão visual

### 🗑️ REMOVIDO
- [COMPONENT] AccessibilityChecker - Removido conforme solicitado
- [FEATURE] Validação de contraste WCAG removida
- [FEATURE] Indicadores de acessibilidade removidos
- [FUNCTION] getContrastRatio() e isAccessible() removidas
- [UI] Accessibility checker sidebar removida
- [UI] Indicadores visuais de contraste removidos

### 📋 TÉCNICO
- [REFACTOR] color-utils.ts reescrito com nova metodologia
- [REFACTOR] ColorPalette.tsx simplificado sem features de acessibilidade
- [ALGORITHM] Implementação de deslocamento cromático por família:
  - Vermelho (330°-30°): Erro→roxo, Sucesso→verde, Aviso→laranja, Info→azul
  - Laranja (30°-60°): Erro→vermelho, Sucesso→verde, Aviso→amarelo, Info→azul
  - Amarelo (60°-90°): Erro→roxo, Sucesso→verde, Aviso→laranja, Info→azul
  - Verde (90°-150°): Erro→vermelho, Sucesso→verde diferenciado, Aviso→laranja, Info→azul
  - Azul (180°-240°): Erro→vermelho, Sucesso→verde, Aviso→laranja, Info→azul diferenciado
  - Roxo (240°-330°): Erro→vermelho, Sucesso→verde, Aviso→amarelo, Info→azul

### 🧪 TESTES
- [TEST] Script de teste para validação da metodologia semântica
- [VALIDATION] Verificação de geração para todas as 6 famílias cromáticas
- [VALIDATION] Compilação TypeScript sem erros

### 🎯 OBJETIVOS ATINGIDOS
- ✅ Metodologia científica de cores semânticas implementada
- ✅ Sistema harmonioso que evita conflitos com cor primária
- ✅ Algoritmo baseado em temperatura e família cromática
- ✅ Interface focada exclusivamente em funcionalidade de paletas
- ✅ Remoção completa de features de acessibilidade
- ✅ Manutenção da performance < 100ms para geração

## [2025-01-09] - Versão 1.0.0

### ✅ ADICIONADO
- [FEATURE] Gerador de paletas de cores seguindo padrão Tailwind CSS 50-950
- [FEATURE] Algoritmo de geração de paletas baseado em teoria das cores
- [FEATURE] Cores semânticas harmonizadas (sucesso, aviso, erro, informativo)
- [FEATURE] Geração de paleta neutra (cinza) harmonizada com cor primária
- [FEATURE] Calculadora de contraste com validação WCAG 2.1 AA/AAA
- [FEATURE] Interface interativa com color picker e copy-to-clipboard
- [FEATURE] Indicadores visuais de acessibilidade nas paletas
- [FEATURE] Checker de acessibilidade em tempo real
- [COMPONENT] ColorPalette - Componente principal da aplicação
- [COMPONENT] AccessibilityChecker - Validador de contraste interativo

### 🔄 MODIFICADO
- [ENHANCEMENT] Interface responsiva com layout adaptativo
- [ENHANCEMENT] Visual indicators para diferentes níveis de contraste
- [ENHANCEMENT] Sticky sidebar para accessibility checker

### 📋 TÉCNICO
- [DEPENDENCY] Next.js 15.3.5 com App Router
- [DEPENDENCY] React 19.0.0 com TypeScript
- [DEPENDENCY] Tailwind CSS 4.0 para estilização
- [CONFIG] Configuração para static export (GitHub Pages)
- [CONFIG] GitHub Actions para deploy automático
- [PERFORMANCE] Algoritmos otimizados para geração de paletas < 100ms
- [PERFORMANCE] Build estático otimizado

### 🧪 TESTES
- [TEST] Validação de geração de paletas matemática
- [TEST] Testes de contraste WCAG 2.1
- [VALIDATION] Build process funcional
- [VALIDATION] Static export operacional

### 🎯 MÉTRICAS ATINGIDAS
- ✅ Paleta 50-950 matematicamente correta
- ✅ Cores semânticas harmonizadas
- ✅ Interface intuitiva e responsiva
- ✅ Acessibilidade WCAG 2.1 AA implementada
- ✅ Performance < 100ms para geração
- ✅ Funcional no WSL (desenvolvimento)
- ✅ Build estático otimizado para GitHub Pages
- ✅ Deploy automático via GitHub Actions configurado

### 🔧 INFRAESTRUTURA
- [DEPLOY] Configuração GitHub Actions para deploy automático
- [CONFIG] Next.js configurado para static export
- [CONFIG] Suporte a images unoptimized para hosting estático
- [CONFIG] Trailing slash habilitado para GitHub Pages