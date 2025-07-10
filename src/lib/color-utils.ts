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
  let h: number, s: number, l: number;

  l = (max + min) / 2;

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

export function getColorFamily(hue: number): 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' {
  if (hue >= 330 || hue <= 30) return 'red';
  if (hue > 30 && hue <= 60) return 'orange';
  if (hue > 60 && hue <= 90) return 'yellow';
  if (hue > 90 && hue <= 150) return 'green';
  if (hue > 180 && hue <= 240) return 'blue';
  return 'purple';
}

export function generateSemanticColor(baseColor: string, colorType: 'success' | 'warning' | 'error' | 'info', variation: number = 0): ColorPalette {
  const rgb = hexToRgb(baseColor);
  if (!rgb) throw new Error('Invalid hex color');
  
  const hsl = rgbToHsl(rgb);
  const family = getColorFamily(hsl.h);
  
  let targetHue: number;
  let saturationMultiplier: number;
  let lightnessMultiplier: number;
  let minLightness: number;
  
  // Define base hues for each semantic color based on color family
  switch (family) {
    case 'red': // 330°-30°
      targetHue = colorType === 'error' ? (hsl.h + 315) % 360 :
                 colorType === 'success' ? (hsl.h + 105) % 360 :
                 colorType === 'warning' ? (hsl.h + 30) % 360 :
                 (hsl.h + 185) % 360; // info
      break;
    case 'orange': // 30°-60°
      targetHue = colorType === 'error' ? (hsl.h + 320) % 360 :
                 colorType === 'success' ? (hsl.h + 105) % 360 :
                 colorType === 'warning' ? (hsl.h + 30) % 360 :
                 (hsl.h + 170) % 360; // info
      break;
    case 'yellow': // 60°-90°
      targetHue = colorType === 'error' ? (hsl.h + 270) % 360 :
                 colorType === 'success' ? (hsl.h + 45) % 360 :
                 colorType === 'warning' ? (hsl.h - 30 + 360) % 360 :
                 (hsl.h + 140) % 360; // info
      break;
    case 'green': // 90°-150°
      targetHue = colorType === 'error' ? (hsl.h + 230) % 360 :
                 colorType === 'success' ? (hsl.h + 10) % 360 :
                 colorType === 'warning' ? (hsl.h - 60 + 360) % 360 :
                 (hsl.h + 80) % 360; // info
      break;
    case 'blue': // 180°-240°
      targetHue = colorType === 'error' ? (hsl.h + 170) % 360 :
                 colorType === 'success' ? (hsl.h - 80 + 360) % 360 :
                 colorType === 'warning' ? (hsl.h - 150 + 360) % 360 :
                 (hsl.h + 15) % 360; // info
      break;
    case 'purple': // 240°-330°
      targetHue = colorType === 'error' ? (hsl.h + 80) % 360 :
                 colorType === 'success' ? (hsl.h - 110 + 360) % 360 :
                 colorType === 'warning' ? (hsl.h - 180 + 360) % 360 :
                 (hsl.h - 60 + 360) % 360; // info
      break;
    default:
      throw new Error('Invalid color family');
  }
  
  // Define saturation and lightness multipliers for each semantic color
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
  
  // Apply variation to create different versions
  const hueVariation = (variation * 15) % 30 - 15; // ±15° variation
  const saturationVariation = (variation * 0.1) % 0.2 - 0.1; // ±10% variation
  const lightnessVariation = (variation * 0.05) % 0.1 - 0.05; // ±5% variation
  
  const finalHue = (targetHue + hueVariation + 360) % 360;
  const finalSaturation = Math.min(Math.max(hsl.s * (saturationMultiplier + saturationVariation), 20), 95);
  const finalLightness = Math.max(hsl.l * (lightnessMultiplier + lightnessVariation), minLightness);
  
  const semanticColorHex = rgbToHex(hslToRgb({
    h: finalHue,
    s: finalSaturation,
    l: finalLightness
  }));
  
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

