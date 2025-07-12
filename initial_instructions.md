# 🎨 INITIAL INSTRUCTIONS - COLOR PALETTE GENERATOR

## 📋 PROJETO OVERVIEW
**Aplicação web para geração de paletas de cores** baseada em uma cor primária, seguindo a lógica do https://colors.eva.design com shades de 50 a 950 (padrão Tailwind CSS).

### 🎯 OBJETIVOS PRINCIPAIS
- Gerar paleta completa (50-950) a partir de cor primária
- Criar cores semânticas (sucesso, aviso, erro, informativo)
- Gerar tom neutro (cinza) harmonioso com a primária
- Aplicar teoria das cores e técnicas de acessibilidade
- Interface web responsiva e intuitiva
- **Deploy no GitHub Pages** como projeto open source

### 🌐 AMBIENTE DE DESENVOLVIMENTO & PRODUÇÃO
- **Desenvolvimento**: WSL (Windows Subsystem for Linux) - Claude Code rodando no VS Code
- **Acesso Local**: Via IP do WSL para teste durante desenvolvimento
- **Produção**: GitHub Pages (hospedagem estática gratuita)
- **MCP Server**: Context7 (USO OBRIGATÓRIO)

### 🏗️ STACK TECNOLÓGICA DEFINIDA
- **Frontend**: Next.js 15 (App Router) com Static Export
- **Linguagem**: TypeScript para tipagem robusta
- **Estilização**: Tailwind CSS (sistema de cores 50-950 nativo)
- **Deploy**: GitHub Actions → GitHub Pages
- **Algoritmos**: Client-side JavaScript/TypeScript

---

## 🧠 MINDSET OBRIGATÓRIO

### ⚡ SEMPRE ANTES DE IMPLEMENTAR:
- [ ] Analisar impacto da mudança no sistema completo
- [ ] Questionar se existe abordagem mais eficiente
- [ ] Verificar compatibilidade com arquitetura atual
- [ ] Considerar implicações de acessibilidade
- [ ] Validar teoria das cores aplicada

### 🎯 POSTURA PROFISSIONAL:
- **Arquiteto de Software Sênior**: Visão holística e estratégica
- **Especialista em UI/UX**: Foco em experiência do usuário
- **Meticuloso**: Cada linha de código deve ter propósito
- **Preventivo**: Antecipar problemas antes que ocorram

---

## 📚 LEITURA OBRIGATÓRIA ANTES DE QUALQUER DESENVOLVIMENTO

### 📖 DOCUMENTOS ESSENCIAIS:
1. **initial_instructions.md** (este arquivo)
2. **CLAUDE.md** - Configurações específicas do projeto (atualize-o se necessário)
3. **architecture.md** - Arquitetura técnica detalhada
4. **metodologiaCores.md** - Teoria das cores e algoritmos
5. **/changelog/** - Pasta com histórico de mudanças
6. **common_errors.md** - Problemas recorrentes e soluções

SE ALGUM DESSES ARQUIVOS NÃO EXISTIREM? CRIE-OS APÓS ENTENDER O PROJETO E MANTENHA-OS ATUALIZADO SEMPRE.

### 🔍 RESEARCH OBRIGATÓRIO:
- [ ] Consultar Context7 MCP server documentation sempre
- [ ] Revisar https://colors.eva.design funcionamento
- [ ] Estudar sistema de cores Tailwind CSS (50-950)
- [ ] Verificar WCAG guidelines para contraste
- [ ] Analisar algoritmos de geração de paletas existentes
- [ ] Next.js Static Export configuration
- [ ] GitHub Pages deployment best practices
- [ ] Color manipulation algorithms (HSL, OKLCH, etc.)

---

## 🚀 PROCESSO OBRIGATÓRIO DE 4 ETAPAS

### 1️⃣ ANÁLISE PRÉVIA (OBRIGATÓRIA)
**Checklist pré-desenvolvimento:**
- [ ] Objetivo da tarefa claramente definido?
- [ ] Impacto em outras partes do sistema avaliado?
- [ ] Dependências identificadas?
- [ ] Riscos técnicos mapeados?
- [ ] Alternativas consideradas?
- [ ] Tempo estimado calculado?

### 2️⃣ PLANEJAMENTO DETALHADO (OBRIGATÓRIO)
**Checklist de planejamento:**
- [ ] Arquitetura da solução desenhada?
- [ ] Estrutura de arquivos definida?
- [ ] Fluxo de dados mapeado?
- [ ] Testes necessários identificados?
- [ ] Pontos de rollback definidos?
- [ ] Critérios de aceitação estabelecidos?

### 3️⃣ IMPLEMENTAÇÃO METODOLÓGICA (OBRIGATÓRIA)
**Checklist de implementação:**
- [ ] Código escrito seguindo padrões estabelecidos?
- [ ] Comentários técnicos adicionados onde necessário?
- [ ] Testes unitários implementados?
- [ ] Validação de acessibilidade aplicada?
- [ ] Performance otimizada?
- [ ] Rollback testado?

### 4️⃣ DOCUMENTAÇÃO E VALIDAÇÃO (OBRIGATÓRIA)
**Checklist final:**
- [ ] Changelog atualizado com formato padronizado?
- [ ] Documentação técnica atualizada?
- [ ] Testes de integração executados?
- [ ] Validação no ambiente WSL realizada?
- [ ] Feedback do usuário coletado?
- [ ] Common_errors.md atualizado se necessário?

---

## 📊 SISTEMA DE CHANGELOG (OBRIGATÓRIO)

IMPORTANTE: O CHANGELOG DEVE FICAR ORGANIZADO EM UMA PASTA ESPECÍFICA, CASO NÃO EXISTA CRIAR.

SE HOUVER APENAS UM ARQUIVO CHANGELOG.MD COM TODOS OS LOGS, DEVE LER, DIVIDIR EM ARQUIVOS POR RELEASES DENTRO DESSA PASTA DE CHANGELOG DE FORMA ORGANIZADA.

### 📝 FORMATO PADRONIZADO:
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

---

## 🛡️ PREVENÇÃO DE ERROS (OBRIGATÓRIO)

### ⚠️ VERIFICAÇÕES OBRIGATÓRIAS:
- [ ] Context7 MCP server está sendo utilizado?
- [ ] Algoritmos de cores estão matematicamente corretos?
- [ ] Acessibilidade WCAG 2.1 AA está sendo respeitada?
- [ ] Performance não degradou?
- [ ] Responsividade mantida em todos os dispositivos?
- [ ] Compatibilidade cross-browser validada?
- [ ] Build estático funciona corretamente?
- [ ] GitHub Pages deployment configurado?

### 🚨 PROBLEMAS COMUNS A EVITAR:
- **Cores**: Paletas não acessíveis, contraste insuficiente
- **Performance**: Cálculos desnecessários, rerenders excessivos
- **WSL**: Problemas de porta/proxy, paths incorretos durante dev
- **MCP**: Não utilizar Context7 server corretamente
- **Responsividade**: Quebras em dispositivos móveis
- **Static Export**: Usar recursos server-side por engano
- **GitHub Pages**: Configuração incorreta de paths/assets

---

## 📈 WORKFLOW ESTRUTURADO (OBRIGATÓRIO)

### 🔄 PROCESSO PASSO-A-PASSO:
1. **Análise** → Entender requisito completamente
2. **Research** → Context7 + documentação relevante
3. **Design** → Arquitetura e fluxo da solução
4. **Implementação** → Código com qualidade
5. **Testes** → Validação funcional e acessibilidade
6. **Documentação** → Changelog e docs técnicas
7. **Validação WSL** → Teste no ambiente real

### 🎯 CHECKPOINTS DE VALIDAÇÃO:
- [ ] **Checkpoint 1**: Análise aprovada?
- [ ] **Checkpoint 2**: Arquitetura validada?
- [ ] **Checkpoint 3**: Implementação testada?
- [ ] **Checkpoint 4**: Documentação completa?

---

## 📊 MÉTRICAS DE QUALIDADE (OBRIGATÓRIO)

### 🎯 KPIs ESPECÍFICOS:
- **Acessibilidade**: Contraste ≥ 4.5:1 (AA)
- **Performance**: Geração de paleta < 100ms
- **Responsividade**: Funcional em 320px - 1920px
- **Compatibilidade**: Chrome, Firefox, Safari, Edge
- **Cobertura de testes**: ≥ 80%

### ✅ CRITÉRIOS DE ACEITAÇÃO:
- [ ] Paleta 50-950 matematicamente correta
- [ ] Cores semânticas harmonizadas
- [ ] Interface intuitiva e responsiva
- [ ] Acessibilidade WCAG 2.1 AA
- [ ] Performance otimizada
- [ ] Funciona perfeitamente no WSL (desenvolvimento)
- [ ] Build estático otimizado para GitHub Pages
- [ ] Deploy automático via GitHub Actions funcionando

---

## 🔍 CHECKLIST FINAL (OBRIGATÓRIO)

### 🎯 ANTES DE FINALIZAR QUALQUER SESSÃO:
- [ ] Todos os objetivos da sessão foram cumpridos?
- [ ] Changelog foi atualizado corretamente?
- [ ] Documentação técnica está sincronizada?
- [ ] Testes passaram com sucesso?
- [ ] Aplicação funciona no ambiente WSL?
- [ ] Context7 MCP server foi utilizado adequadamente?
- [ ] Próximos passos estão claramente definidos?
- [ ] Rollback está disponível se necessário?

---

## 🔄 VALIDAÇÃO E FEEDBACK (OBRIGATÓRIO)

### 🧪 PROCESSO DE TESTES:
1. **Testes Unitários**: Algoritmos de cores
2. **Testes de Integração**: Fluxo completo
3. **Testes de Acessibilidade**: Contraste e navegação
4. **Testes de Performance**: Tempo de geração
5. **Testes Cross-browser**: Compatibilidade
6. **Testes WSL**: Funcionamento no ambiente real

### 📋 VALIDAÇÃO OBRIGATÓRIA:
- [ ] Inserir cor primária → Paleta 50-950 gerada
- [ ] Cores semânticas harmonizadas
- [ ] Contraste acessível validado
- [ ] Interface responsiva confirmada
- [ ] Performance adequada medida

---

## 💾 GESTÃO DE CONTEXTO (OBRIGATÓRIO)

### 📚 SEMPRE MANTER ATUALIZADO:
- **session_context.md**: Estado atual do desenvolvimento
- **decisions_log.md**: Decisões técnicas tomadas
- **pending_tasks.md**: Tarefas pendentes priorizadas
- **blockers.md**: Impedimentos identificados

### 🔄 RECUPERAÇÃO DE CONTEXTO:
- [ ] Ler initial_instructions.md
- [ ] Verificar session_context.md
- [ ] Revisar changelog.md
- [ ] Consultar pending_tasks.md
- [ ] Identificar último estado em decisions_log.md

---

## 🎯 PRIORIZAÇÃO INTELIGENTE (OBRIGATÓRIO)

### 📊 FRAMEWORK DE DECISÃO:
**Alto Impacto + Baixo Esforço** = Prioridade 1
**Alto Impacto + Alto Esforço** = Prioridade 2
**Baixo Impacto + Baixo Esforço** = Prioridade 3
**Baixo Impacto + Alto Esforço** = Prioridade 4

### 🎯 ORDEM DE IMPLEMENTAÇÃO:
1. **Project Setup**: Next.js + TypeScript + Tailwind + GitHub Pages config
2. **Core Algorithm**: Geração de paleta 50-950
3. **UI Foundation**: Interface básica funcional
4. **Accessibility**: Contraste e validação WCAG
5. **Semantic Colors**: Cores para sucesso/erro/aviso/info
6. **Neutral Tones**: Cinzas harmonizados
7. **GitHub Actions**: Deploy automático
8. **Advanced Features**: Exportação, presets, etc.

---

## 🔧 ROLLBACK E DEBUGGING (OBRIGATÓRIO)

### 🚨 PROTOCOLO DE ROLLBACK:
1. **Identificar**: Problema específico
2. **Isolar**: Commit/mudança problemática
3. **Reverter**: Usar git ou backup
4. **Documentar**: Adicionar ao common_errors.md
5. **Replanejar**: Abordagem alternativa

### 🔍 DEBUGGING SISTEMÁTICO:
- [ ] Reproduzir erro consistentemente
- [ ] Isolar componente/função problemática
- [ ] Verificar logs e console
- [ ] Testar em ambiente limpo
- [ ] Consultar common_errors.md
- [ ] Documentar solução encontrada

---

## 🌐 INSTRUÇÕES ESPECÍFICAS WSL

### 🔧 CONFIGURAÇÃO OBRIGATÓRIA:
```bash
# Verificar IP do WSL
ip addr show eth0

# Configurar servidor para acessar do Windows
# Usar IP específico do WSL, não localhost
```

### 📋 VALIDAÇÃO WSL:
- [ ] Servidor acessível via IP do WSL
- [ ] Porta correta configurada
- [ ] Firewall Windows não bloqueando
- [ ] Hot reload funcionando
- [ ] Performance adequada

---

## 🎯 CONTEXT7 MCP SERVER (USO OBRIGATÓRIO)

### 📚 SEMPRE CONSULTAR:
- [ ] Context7 para documentação de bibliotecas
- [ ] APIs de manipulação de cores
- [ ] Frameworks de UI escolhidos
- [ ] Bibliotecas de acessibilidade
- [ ] Algoritmos de geração de paletas

### 🔍 WORKFLOW CONTEXT7:
1. **Resolver Library ID** antes de usar get-library-docs
2. **Pesquisar documentação** relevante
3. **Aplicar conhecimento** na implementação
4. **Validar** usando exemplos oficiais

---

## ⚡ COMANDOS RÁPIDOS

### 🚀 DESENVOLVIMENTO:
```bash
# Setup inicial
npx create-next-app@latest --typescript --tailwind --app --src-dir

# Iniciar desenvolvimento
npm run dev

# Verificar IP do WSL para acesso do Windows
ip addr show eth0

# Acessar do Windows durante desenvolvimento
http://[WSL-IP]:3000

# Testes
npm run test

# Build para produção (static export)
npm run build

# Preview do build localmente
npm run start
```

### 🚀 CONFIGURAÇÃO NEXT.JS PARA GITHUB PAGES:
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

### 🚀 DEPLOY GITHUB PAGES:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v3
        with:
          path: ./out
```

---

## 🎯 LEMBRETE FINAL

**NUNCA IMPLEMENTE SEM:**
- ✅ Ler estas instruções
- ✅ Consultar Context7 MCP server
- ✅ Seguir o processo de 4 etapas
- ✅ Atualizar changelog
- ✅ Testar no ambiente WSL
- ✅ Validar acessibilidade
- ✅ Manter documentação sincronizada

**SEMPRE LEMBRE:**
Este projeto deve ser uma referência de excelência técnica em geração de paletas de cores acessíveis e harmoniosas. Cada decisão deve ser fundamentada em teoria das cores, acessibilidade e best practices de desenvolvimento.

**ARQUITETURA FINAL:**
- 🎨 **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- 🚀 **Deploy**: GitHub Actions → GitHub Pages (hospedagem gratuita)
- 🧪 **Desenvolvimento**: WSL (acesso via IP local para testes)
- 🎯 **Produção**: Build estático otimizado para performance
- 🔧 **Algoritmos**: Client-side para máxima velocidade