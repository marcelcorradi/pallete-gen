# Metodologia para Definição de Cores Semânticas em Design Systems

## Introdução: O Problema Central

Quando você estabelece uma cor primária para sua marca, ela automaticamente se torna "proibida" para uso semântico. Isso cria um desafio fascinante: como construir um sistema de cores semânticas (sucesso, erro, aviso, informação) que seja harmonioso com sua cor primária, mas que faça sentido psicológico e cultural?

A metodologia que vamos construir resolve esse problema através de princípios científicos da teoria das cores, garantindo que qualquer cor primária que você escolher resulte em cores semânticas coerentes e eficazes.

## Fundamento 1: Teoria da Temperatura das Cores

Para entender como as cores comunicam emoções e significados, precisamos primeiro compreender o conceito de temperatura cromática. As cores se dividem em duas grandes famílias psicológicas:

**Cores Quentes (0°-180° no círculo cromático)**: Vermelho, laranja, amarelo e suas variações. Estas cores comunicam energia, atenção, urgência, dinamismo e ação. Psicologicamente, elas "avançam" em nossa percepção visual, criando sensação de proximidade e importância imediata.

**Cores Frias (180°-360° no círculo cromático)**: Verde, azul, roxo e suas variações. Estas cores comunicam calma, confiança, estabilidade, confiabilidade e passividade. Visualmente, elas "recuam", criando sensação de profundidade e tranquilidade.

Esta divisão é fundamental porque certas emoções semânticas funcionam melhor com certas temperaturas. Erro e aviso precisam comunicar urgência e atenção, então cores quentes são mais eficazes. Sucesso e informação podem trabalhar com ambas as temperaturas, dependendo do contexto.

## Fundamento 2: Convenções Culturais Universais

Existem associações cromáticas que transcendem culturas específicas e se tornaram praticamente universais na interface digital:

**Vermelho**: Perigo, erro, pare, urgência máxima
**Verde**: Sucesso, segurança, aprovação, "continue"
**Amarelo/Laranja**: Cuidado, atenção, "proceda com cautela"
**Azul**: Informação, confiança, neutralidade, dados
**Roxo**: Tradicionalmente associado ao luxo, mas em interfaces modernas tem se tornado um substituto elegante para o vermelho quando este já é usado como cor primária

Ignorar essas convenções cria resistência cognitiva nos usuários, que precisam "reaprender" o que cada cor significa em seu sistema específico.

## A Metodologia: Sistema de Famílias Harmônicas

### Passo 1: Classificação da Cor Primária

Primeiro, você precisa identificar em qual família sua cor primária se encaixa. Isso determinará a estratégia que seguiremos:

**Se sua cor primária é quente (vermelho, laranja, amarelo)**: Você enfrentará o desafio de que uma das cores semânticas tradicionais (geralmente erro ou aviso) competirá diretamente com sua identidade de marca.

**Se sua cor primária é fria (verde, azul, roxo)**: Você terá mais liberdade, mas ainda precisará evitar usar sua cor exata para significados semânticos.

### Passo 2: Estratégia de Deslocamento Harmônico

Para cada família de cor primária, aplicamos uma estratégia específica de deslocamento no círculo cromático que mantém harmonia visual enquanto preserva significado semântico:

#### Para Cores Primárias Vermelhas (330°-30°)

**Erro**: Deslocamento de 30°-50° em direção ao roxo (280°-300°). Este movimento mantém a urgência psicológica do vermelho, mas cria diferenciação clara da marca.

**Sucesso**: Movimento para o verde complementar (120°-150°). Esta é uma escolha natural que mantém máximo contraste perceptual.

**Aviso**: Posicionamento no laranja/amarelo (45°-75°). Mantém a família quente mas comunica "cuidado" em vez de "pare".

**Informação**: Azul frio (200°-240°). Oferece contraste de temperatura e comunica neutralidade informativa.

#### Para Cores Primárias Laranjas (30°-60°)

**Erro**: Vermelho intenso (340°-10°). Como o laranja não carrega a mesma força de "erro" que o vermelho, podemos usar vermelho puro para erro sem conflito conceitual.

**Sucesso**: Verde complementar (150°-180°). Mantém a relação complementar clássica.

**Aviso**: Sua cor primária laranja pode permanecer como aviso se for redesignada, ou você pode usar um amarelo mais intenso (75°-90°).

**Informação**: Azul médio (210°-240°). Oferece o contraste necessário e comunica dados/informação.

#### Para Cores Primárias Amarelas (60°-90°)

**Erro**: Vermelho ou roxo escuro (320°-10°). O vermelho funciona bem aqui porque há diferenciação suficiente do amarelo.

**Sucesso**: Verde puro (120°-150°). A relação amarelo-verde é naturalmente harmônica.

**Aviso**: Laranja intenso (30°-45°). Mantém proximidade familiar mas com diferenciação clara.

**Informação**: Azul médio a escuro (210°-250°). Máximo contraste de temperatura.

#### Para Cores Primárias Verdes (90°-150°)

**Erro**: Vermelho tradicional (340°-20°). Sem conflito conceitual, você pode usar a convenção padrão.

**Sucesso**: Sua estratégia aqui é crucial - você precisa de um verde diferenciado para sucesso. Use um verde mais escuro/saturado ou ligeiramente deslocado (110°-130°).

**Aviso**: Laranja/amarelo (45°-75°). Contraste complementar que funciona perfeitamente.

**Informação**: Azul (200°-240°). Cores vizinhas no espectro frio que mantêm harmonia.

#### Para Cores Primárias Azuis (180°-240°)

**Erro**: Vermelho tradicional (340°-20°). Contraste máximo que funciona perfeitamente.

**Sucesso**: Verde (120°-150°). Harmonia triádica que mantém convenções.

**Aviso**: Laranja/amarelo (45°-75°). Contraste complementar ideal.

**Informação**: Você precisa diferenciar do seu azul primário. Use um azul mais escuro, mais claro, ou ligeiramente deslocado para ciano (200°-220°).

#### Para Cores Primárias Roxas (240°-330°)

**Erro**: Vermelho intenso (340°-20°). Sem conflito, permite uso da convenção tradicional.

**Sucesso**: Verde (120°-150°). Contraste harmonioso.

**Aviso**: Amarelo/laranja (45°-75°). Contrasta bem com a frieza do roxo.

**Informação**: Azul (180°-220°). Mantém-se na família fria mas com diferenciação clara.

### Passo 3: Ajuste de Saturação e Luminosidade

Depois de determinar os matizes (hues) usando a estratégia acima, você precisa ajustar saturação e luminosidade para criar coesão visual:

**Regra da Energia Consistente**: Mantenha níveis similares de saturação entre todas as cores semânticas para que tenham "peso visual" equivalente. Se sua cor primária tem saturação de 80%, tente manter suas cores semânticas entre 70%-90%.

**Regra da Legibilidade**: Todas as cores devem passar nos testes de contraste WCAG AA (4.5:1) quando usadas sobre fundos padrão.

**Regra da Diferenciação Perceptual**: Cores adjacentes em função (como aviso e erro) devem ter pelo menos 30° de diferença no círculo cromático ou diferenças significativas de saturação/luminosidade.

### Passo 4: Validação do Sistema

Para validar se seu sistema funciona, aplique estes testes:

**Teste de Contexto Múltiplo**: Crie uma interface que mostre sua cor primária (em um botão principal), mais todas as quatro cores semânticas simultaneamente. Um usuário novo consegue distinguir imediatamente entre ação de marca e estados de sistema?

**Teste de Daltonismo**: Use simuladores para verificar se suas escolhas funcionam para usuários com diferentes tipos de daltonismo.

**Teste Cultural**: Se seu produto é global, verifique se suas escolhas não conflitam com significados culturais específicos em mercados importantes.

## Exemplos Práticos da Metodologia

### Exemplo 1: Sistema com Vermelho Primário
- **Primário**: Vermelho vibrante HSL(348°, 84%, 51%)
- **Erro**: Roxo intenso HSL(285°, 80%, 45%) - mantém urgência, evita conflito
- **Sucesso**: Verde complementar HSL(142°, 84%, 51%) - contraste máximo
- **Aviso**: Laranja quente HSL(25°, 84%, 51%) - família quente, menos intenso que erro
- **Informação**: Azul frio HSL(215°, 84%, 51%) - contraste de temperatura

### Exemplo 2: Sistema com Azul Primário
- **Primário**: Azul corporativo HSL(215°, 84%, 51%)
- **Erro**: Vermelho tradicional HSL(348°, 84%, 51%) - sem conflito conceitual
- **Sucesso**: Verde natural HSL(142°, 84%, 51%) - convenção preservada
- **Aviso**: Laranja complementar HSL(35°, 84%, 51%) - contraste perfeito
- **Informação**: Azul mais escuro HSL(215°, 84%, 35%) - diferenciação por luminosidade

### Exemplo 3: Sistema com Verde Primário
- **Primário**: Verde marca HSL(142°, 84%, 51%)
- **Erro**: Vermelho clássico HSL(348°, 84%, 51%) - sem conflito
- **Sucesso**: Verde mais escuro HSL(142°, 84%, 35%) - diferenciação por luminosidade
- **Aviso**: Laranja contrastante HSL(35°, 84%, 51%) - complementar harmonioso
- **Informação**: Azul neutro HSL(215°, 84%, 51%) - família fria coesa

## Ferramentas Recomendadas

Para implementar esta metodologia eficientemente, use estas ferramentas:

**Para análise cromática**: Coolors.co, Adobe Color, ou Paletton para visualizar relações harmônicas
**Para teste de acessibilidade**: WebAIM Contrast Checker, Colour Contrast Analyser
**Para simulação de daltonismo**: Stark (plugin Figma), Colorblinding.com
**Para validação em contexto**: Figma ou Sketch para criar protótipos de teste

## Conclusão: Flexibilidade com Fundamento

Esta metodologia oferece uma estrutura científica que pode ser adaptada para qualquer cor primária, mantendo coerência psicológica e harmonia visual. O segredo está em entender que cores não existem no vácuo - elas carregam significados culturais, psicológicos e perceptuais que devemos respeitar.

Lembre-se de que esta é uma metodologia de partida. Sempre teste com usuários reais, ajuste conforme necessário, e mantenha documentação clara das suas decisões para futuras iterações do sistema. A consistência na aplicação dos princípios é mais importante que a perfeição matemática das relações cromáticas.