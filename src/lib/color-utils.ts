export interface HSL {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

export interface RGB {
  r: number; // 0-255
  g: number; // 0-255
  b: number; // 0-255
}

export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function rgbToHsl(rgb: RGB): HSL {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: h = 0;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

export function hslToRgb(hsl: HSL): RGB {
  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

export function rgbToHex(rgb: RGB): string {
  return `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
}

export function generatePalette(baseColor: string): ColorPalette {
  const rgb = hexToRgb(baseColor);
  if (!rgb) throw new Error('Invalid hex color');
  
  const hsl = rgbToHsl(rgb);
  
  // Define lightness values for each shade
  const shades: Record<keyof ColorPalette, number> = {
    50: 95,
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: 50, // Base color
    600: 40,
    700: 30,
    800: 20,
    900: 10,
    950: 5
  };

  const palette: Partial<ColorPalette> = {};
  
  // Adjust base saturation for different shades
  (Object.keys(shades) as unknown as (keyof ColorPalette)[]).forEach((shade) => {
    const lightness = shades[shade];
    
    // Adjust saturation based on lightness for better color harmony
    let adjustedSaturation = hsl.s;
    
    if (lightness > 80) {
      // Very light shades: reduce saturation
      adjustedSaturation = hsl.s * 0.3;
    } else if (lightness > 60) {
      // Light shades: slightly reduce saturation
      adjustedSaturation = hsl.s * 0.7;
    } else if (lightness < 30) {
      // Dark shades: increase saturation for richness
      adjustedSaturation = Math.min(hsl.s * 1.2, 100);
    }
    
    const adjustedHsl: HSL = {
      h: hsl.h,
      s: adjustedSaturation,
      l: lightness
    };
    
    const adjustedRgb = hslToRgb(adjustedHsl);
    palette[shade] = rgbToHex(adjustedRgb);
  });
  
  return palette as ColorPalette;
}

export interface SemanticColors {
  success: ColorPalette;
  warning: ColorPalette;
  error: ColorPalette;
  info: ColorPalette;
}

export function getColorTemperature(hue: number): 'warm' | 'cool' {
  return (hue >= 0 && hue <= 180) ? 'warm' : 'cool';
}

export function calculateColorDistance(color1: HSL, color2: HSL): number {
  // Calculate the shortest distance between two hues on the color wheel
  const hueDiff = Math.min(
    Math.abs(color1.h - color2.h),
    360 - Math.abs(color1.h - color2.h)
  );
  const satDiff = Math.abs(color1.s - color2.s);
  const lumDiff = Math.abs(color1.l - color2.l);
  
  // Weight hue difference more heavily as it's more perceptually important
  return (hueDiff * 0.6) + (satDiff * 0.2) + (lumDiff * 0.2);
}

export function hasSemanticConflict(baseColor: HSL, semanticColor: HSL, minDistance: number = 30): boolean {
  return calculateColorDistance(baseColor, semanticColor) < minDistance;
}

export type SemanticType = 'success' | 'warning' | 'error' | 'info';

export interface SemanticStrategy {
  primary: number;
  fallback: number;
}

export interface FamilySemanticMap {
  success: SemanticStrategy;
  warning: SemanticStrategy;
  error: SemanticStrategy;
  info: SemanticStrategy;
}

export const SEMANTIC_STRATEGIES: Record<ColorFamily, FamilySemanticMap> = {
  red: {
    success: { primary: 120, fallback: 140 },   // Verde -> Verde-azulado
    warning: { primary: 45, fallback: 60 },     // Laranja -> Amarelo
    error: { primary: 320, fallback: 300 },     // Magenta -> Roxo
    info: { primary: 210, fallback: 240 }      // Azul -> Azul-roxo
  },
  orange: {
    success: { primary: 120, fallback: 140 },   // Verde -> Verde-azulado
    warning: { primary: 60, fallback: 80 },     // Amarelo -> Amarelo-verde
    error: { primary: 0, fallback: 320 },       // Vermelho -> Magenta
    info: { primary: 210, fallback: 190 }      // Azul -> Azul-ciano
  },
  yellow: {
    success: { primary: 120, fallback: 100 },   // Verde -> Verde-amarelo
    warning: { primary: 30, fallback: 15 },     // Laranja -> Vermelho-laranja
    error: { primary: 0, fallback: 320 },       // Vermelho -> Magenta
    info: { primary: 210, fallback: 240 }      // Azul -> Azul-roxo
  },
  green: {
    success: { primary: 140, fallback: 160 },   // Verde-azul -> Ciano
    warning: { primary: 45, fallback: 30 },     // Laranja -> Vermelho-laranja
    error: { primary: 0, fallback: 320 },       // Vermelho -> Magenta
    info: { primary: 210, fallback: 240 }      // Azul -> Azul-roxo
  },
  cyan: {
    success: { primary: 120, fallback: 90 },    // Verde -> Verde-amarelo
    warning: { primary: 35, fallback: 50 },     // Laranja -> Amarelo
    error: { primary: 0, fallback: 320 },       // Vermelho -> Magenta
    info: { primary: 210, fallback: 240 }      // Azul -> Azul-roxo
  },
  blue: {
    success: { primary: 120, fallback: 140 },   // Verde -> Verde-azul
    warning: { primary: 45, fallback: 60 },     // Laranja -> Amarelo
    error: { primary: 0, fallback: 320 },       // Vermelho -> Magenta
    info: { primary: 200, fallback: 180 }      // Azul-ciano -> Ciano
  },
  purple: {
    success: { primary: 120, fallback: 140 },   // Verde -> Verde-azul
    warning: { primary: 45, fallback: 60 },     // Laranja -> Amarelo
    error: { primary: 0, fallback: 15 },        // Vermelho -> Vermelho-laranja
    info: { primary: 200, fallback: 180 }      // Azul-ciano -> Ciano
  },
  magenta: {
    success: { primary: 120, fallback: 150 },   // Verde -> Verde-azul
    warning: { primary: 45, fallback: 60 },     // Laranja -> Amarelo
    error: { primary: 0, fallback: 15 },        // Vermelho -> Vermelho-laranja
    info: { primary: 210, fallback: 180 }      // Azul -> Ciano
  }
};

export function optimizeSemanticColor(baseHsl: HSL, targetHue: number, colorType: SemanticType): HSL {
  // Define saturation and lightness multipliers for each semantic color
  let saturationMultiplier: number;
  let lightnessMultiplier: number;
  let minLightness: number;
  
  switch (colorType) {
    case 'success':
      saturationMultiplier = 0.9;
      lightnessMultiplier = 0.95;
      minLightness = 45;
      break;
    case 'warning':
      saturationMultiplier = 1.1;
      lightnessMultiplier = 0.98;
      minLightness = 50;
      break;
    case 'error':
      saturationMultiplier = 1.0;
      lightnessMultiplier = 0.9;
      minLightness = 42;
      break;
    case 'info':
      saturationMultiplier = 0.85;
      lightnessMultiplier = 1.05;
      minLightness = 48;
      break;
  }
  
  const finalSaturation = Math.min(Math.max(baseHsl.s * saturationMultiplier, 20), 95);
  const finalLightness = Math.max(baseHsl.l * lightnessMultiplier, minLightness);
  
  return {
    h: targetHue,
    s: finalSaturation,
    l: finalLightness
  };
}

export type ColorFamily = 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple' | 'magenta';

export function getColorFamily(hue: number): ColorFamily {
  if (hue >= 345 || hue < 15) return 'red';      // 345°-15°
  if (hue >= 15 && hue < 45) return 'orange';    // 15°-45°
  if (hue >= 45 && hue < 75) return 'yellow';    // 45°-75°
  if (hue >= 75 && hue < 135) return 'green';    // 75°-135°
  if (hue >= 135 && hue < 165) return 'cyan';    // 135°-165°
  if (hue >= 165 && hue < 225) return 'blue';    // 165°-225°
  if (hue >= 225 && hue < 285) return 'purple';  // 225°-285°
  return 'magenta';                              // 285°-345°
}

export function generateSemanticColor(baseColor: string, colorType: SemanticType, variation: number = 0): ColorPalette {
  const rgb = hexToRgb(baseColor);
  if (!rgb) throw new Error('Invalid hex color');
  
  const baseHsl = rgbToHsl(rgb);
  const family = getColorFamily(baseHsl.h);
  
  // Get semantic strategies for this color family
  const strategies = SEMANTIC_STRATEGIES[family];
  const strategy = strategies[colorType];
  
  // Try primary color first
  const primaryHue = strategy.primary;
  const primarySemanticColor = optimizeSemanticColor(baseHsl, primaryHue, colorType);
  
  // Apply variation to create different versions
  const hueVariation = (variation * 15) % 30 - 15; // ±15° variation
  const saturationVariation = (variation * 0.1) % 0.2 - 0.1; // ±10% variation
  const lightnessVariation = (variation * 0.05) % 0.1 - 0.05; // ±5% variation
  
  let finalSemanticColor = {
    h: (primarySemanticColor.h + hueVariation + 360) % 360,
    s: Math.min(Math.max(primarySemanticColor.s + (primarySemanticColor.s * saturationVariation), 20), 95),
    l: Math.max(primarySemanticColor.l + (primarySemanticColor.l * lightnessVariation), primarySemanticColor.l)
  };
  
  // Check for semantic conflict
  if (hasSemanticConflict(baseHsl, finalSemanticColor)) {
    // Use fallback color
    const fallbackHue = strategy.fallback;
    const fallbackSemanticColor = optimizeSemanticColor(baseHsl, fallbackHue, colorType);
    
    finalSemanticColor = {
      h: (fallbackSemanticColor.h + hueVariation + 360) % 360,
      s: Math.min(Math.max(fallbackSemanticColor.s + (fallbackSemanticColor.s * saturationVariation), 20), 95),
      l: Math.max(fallbackSemanticColor.l + (fallbackSemanticColor.l * lightnessVariation), fallbackSemanticColor.l)
    };
  }
  
  const semanticColorHex = rgbToHex(hslToRgb(finalSemanticColor));
  return generatePalette(semanticColorHex);
}

export function generateSemanticColors(baseColor: string): SemanticColors {
  return {
    success: generateSemanticColor(baseColor, 'success'),
    warning: generateSemanticColor(baseColor, 'warning'),
    error: generateSemanticColor(baseColor, 'error'),
    info: generateSemanticColor(baseColor, 'info')
  };
}

export function generateNeutralPalette(baseColor: string): ColorPalette {
  const rgb = hexToRgb(baseColor);
  if (!rgb) throw new Error('Invalid hex color');
  
  const hsl = rgbToHsl(rgb);
  
  // Generate warm or cool grays based on the base color
  const neutralHue = hsl.h;
  const neutralSaturation = Math.min(hsl.s * 0.1, 5); // Very low saturation for neutrals
  
  const shades: Record<keyof ColorPalette, number> = {
    50: 98,
    100: 96,
    200: 90,
    300: 83,
    400: 64,
    500: 45,
    600: 32,
    700: 25,
    800: 15,
    900: 9,
    950: 4
  };
  
  const palette: Partial<ColorPalette> = {};
  
  (Object.keys(shades) as unknown as (keyof ColorPalette)[]).forEach((shade) => {
    const lightness = shades[shade];
    
    const neutralHsl: HSL = {
      h: neutralHue,
      s: neutralSaturation,
      l: lightness
    };
    
    const neutralRgb = hslToRgb(neutralHsl);
    palette[shade] = rgbToHex(neutralRgb);
  });
  
  return palette as ColorPalette;
}

// W3C Design Tokens Export Interfaces
export interface W3CColorToken {
  $type: 'color';
  $value: string; // hex color
}

export interface W3CColorGroup {
  [shade: string]: W3CColorToken;
}

export interface W3CDesignTokens {
  Colors: {
    Primary: W3CColorGroup;
    Success: W3CColorGroup;
    Warning: W3CColorGroup;
    Error: W3CColorGroup;
    Info: W3CColorGroup;
    Neutral: W3CColorGroup;
  };
}

export interface ExportPalettes {
  primary: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  error: ColorPalette;
  info: ColorPalette;
  neutral: ColorPalette;
}

// Convert single palette to W3C color group
function paletteToW3CGroup(palette: ColorPalette): W3CColorGroup {
  const group: W3CColorGroup = {};
  
  Object.entries(palette).forEach(([shade, hex]) => {
    group[shade] = {
      $type: 'color',
      $value: hex
    };
  });
  
  return group;
}

// Main export function for W3C Design Tokens
export function exportToFigmaJSON(palettes: ExportPalettes): W3CDesignTokens {
  return {
    Colors: {
      Primary: paletteToW3CGroup(palettes.primary),
      Success: paletteToW3CGroup(palettes.success),
      Warning: paletteToW3CGroup(palettes.warning),
      Error: paletteToW3CGroup(palettes.error),
      Info: paletteToW3CGroup(palettes.info),
      Neutral: paletteToW3CGroup(palettes.neutral)
    }
  };
}

// Download W3C Design Tokens JSON file
export function downloadFigmaJSON(palettes: ExportPalettes, filename: string = 'design-tokens.json'): void {
  const designTokens = exportToFigmaJSON(palettes);
  const jsonString = JSON.stringify(designTokens, null, 2);
  
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}

