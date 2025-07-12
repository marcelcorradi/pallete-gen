'use client';

import { useState } from 'react';
import { generatePalette, generateSemanticColors, generateSemanticColor, generateNeutralPalette, ColorPalette as PaletteType, downloadFigmaJSON, ExportPalettes } from '@/lib/color-utils';

interface ColorPaletteProps {
  title: string;
  palette: PaletteType;
  onRefresh?: () => void;
  showRefresh?: boolean;
}

function ColorPaletteDisplay({ title, palette, onRefresh, showRefresh = false }: ColorPaletteProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };


  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {showRefresh && onRefresh && (
          <button
            onClick={onRefresh}
            className="inline-flex items-center px-4 py-2.5 sm:px-3 sm:py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors touch-manipulation min-h-[44px] sm:min-h-[auto]"
          >
            <svg className="w-5 h-5 sm:w-4 sm:h-4 mr-2 sm:mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="sm:inline">Refresh</span>
          </button>
        )}
      </div>
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(palette).map(([shade, color]) => (
            <div
              key={shade}
              className="relative group cursor-pointer touch-manipulation"
              onClick={() => copyToClipboard(color)}
            >
              <div
                className="h-16 rounded-lg border border-gray-200 transition-transform active:scale-95 flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <div className="text-white text-shadow text-sm font-semibold drop-shadow-lg">
                  {shade}
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-mono text-gray-700">{color}</div>
              </div>
              {copiedColor === color && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm z-10 shadow-lg">
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:block lg:hidden">
        <div className="grid grid-cols-6 gap-3">
          {Object.entries(palette).map(([shade, color]) => (
            <div
              key={shade}
              className="relative group cursor-pointer"
              onClick={() => copyToClipboard(color)}
            >
              <div
                className="aspect-square rounded-lg border border-gray-200 transition-transform hover:scale-105"
                style={{ backgroundColor: color }}
              />
              <div className="mt-2 text-center">
                <div className="text-xs font-medium text-gray-600">{shade}</div>
                <div className="text-xs text-gray-500 font-mono">{color}</div>
              </div>
              {copiedColor === color && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs z-10">
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-11 gap-2">
          {Object.entries(palette).map(([shade, color]) => (
            <div
              key={shade}
              className="relative group cursor-pointer"
              onClick={() => copyToClipboard(color)}
            >
              <div
                className="aspect-square rounded-lg border border-gray-200 transition-transform hover:scale-105"
                style={{ backgroundColor: color }}
              />
              <div className="mt-2 text-center">
                <div className="text-xs font-medium text-gray-600">{shade}</div>
                <div className="text-xs text-gray-500 font-mono">{color}</div>
              </div>
              {copiedColor === color && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs z-10">
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ColorPalette() {
  const [baseColor, setBaseColor] = useState('#3b82f6');
  const [palette, setPalette] = useState<PaletteType>(() => generatePalette('#3b82f6'));
  const [semanticColors, setSemanticColors] = useState(() => generateSemanticColors('#3b82f6'));
  const [neutralPalette, setNeutralPalette] = useState<PaletteType>(() => generateNeutralPalette('#3b82f6'));
  
  // Variation counters for each semantic color
  const [successVariation, setSuccessVariation] = useState(0);
  const [warningVariation, setWarningVariation] = useState(0);
  const [errorVariation, setErrorVariation] = useState(0);
  const [infoVariation, setInfoVariation] = useState(0);

  const handleColorChange = (color: string) => {
    setBaseColor(color);
    try {
      const newPalette = generatePalette(color);
      const newSemanticColors = generateSemanticColors(color);
      const newNeutralPalette = generateNeutralPalette(color);
      
      setPalette(newPalette);
      setSemanticColors(newSemanticColors);
      setNeutralPalette(newNeutralPalette);
      
      // Reset variation counters when base color changes
      setSuccessVariation(0);
      setWarningVariation(0);
      setErrorVariation(0);
      setInfoVariation(0);
    } catch (error) {
      console.error('Error generating palette:', error);
    }
  };

  // Refresh functions for each semantic color
  const refreshSuccess = () => {
    const newVariation = successVariation + 1;
    setSuccessVariation(newVariation);
    const newSuccessColor = generateSemanticColor(baseColor, 'success', newVariation);
    setSemanticColors(prev => ({ ...prev, success: newSuccessColor }));
  };

  const refreshWarning = () => {
    const newVariation = warningVariation + 1;
    setWarningVariation(newVariation);
    const newWarningColor = generateSemanticColor(baseColor, 'warning', newVariation);
    setSemanticColors(prev => ({ ...prev, warning: newWarningColor }));
  };

  const refreshError = () => {
    const newVariation = errorVariation + 1;
    setErrorVariation(newVariation);
    const newErrorColor = generateSemanticColor(baseColor, 'error', newVariation);
    setSemanticColors(prev => ({ ...prev, error: newErrorColor }));
  };

  const refreshInfo = () => {
    const newVariation = infoVariation + 1;
    setInfoVariation(newVariation);
    const newInfoColor = generateSemanticColor(baseColor, 'info', newVariation);
    setSemanticColors(prev => ({ ...prev, info: newInfoColor }));
  };

  // Export function for Figma JSON
  const handleExportToFigma = () => {
    const exportPalettes: ExportPalettes = {
      primary: palette,
      success: semanticColors.success,
      warning: semanticColors.warning,
      error: semanticColors.error,
      info: semanticColors.info,
      neutral: neutralPalette
    };
    
    downloadFigmaJSON(exportPalettes, 'design-tokens.json');
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">🎨 Color Palette Generator</h1>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Generate beautiful color palettes following the Tailwind CSS 50-950 system
        </p>
        
        {/* Mobile-first responsive color picker */}
        <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4 mb-6">
          <label htmlFor="color-picker" className="block text-sm font-medium text-gray-700 sm:text-sm">
            Base Color:
          </label>
          
          {/* Mobile: Stack vertically */}
          <div className="flex items-center gap-3 sm:gap-4">
            <input
              id="color-picker"
              type="color"
              value={baseColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-14 h-14 sm:w-12 sm:h-12 rounded-lg border border-gray-300 cursor-pointer touch-manipulation"
            />
            <input
              type="text"
              value={baseColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="flex-1 sm:flex-none px-3 py-3 sm:py-2 border border-gray-300 rounded-lg font-mono text-base sm:text-sm text-gray-900 placeholder-gray-500 min-h-[44px] sm:min-h-[auto] touch-manipulation"
              placeholder="#3b82f6"
            />
          </div>
        </div>
        
        {/* Export Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">Export Design Tokens</h3>
            <p className="text-xs text-gray-600">Download W3C Design Tokens JSON compatible with Figma plugins (Tokens Studio, etc.)</p>
          </div>
          <button
            onClick={handleExportToFigma}
            className="inline-flex items-center px-4 py-2.5 sm:px-4 sm:py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors touch-manipulation min-h-[44px] sm:min-h-[auto] w-full sm:w-auto justify-center sm:justify-start"
          >
            <svg className="w-5 h-5 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export JSON
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <ColorPaletteDisplay title="Primary Palette" palette={palette} />
        
        <ColorPaletteDisplay 
          title="Success Colors" 
          palette={semanticColors.success} 
          showRefresh={true}
          onRefresh={refreshSuccess}
        />
        
        <ColorPaletteDisplay 
          title="Warning Colors" 
          palette={semanticColors.warning} 
          showRefresh={true}
          onRefresh={refreshWarning}
        />
        
        <ColorPaletteDisplay 
          title="Error Colors" 
          palette={semanticColors.error} 
          showRefresh={true}
          onRefresh={refreshError}
        />
        
        <ColorPaletteDisplay 
          title="Info Colors" 
          palette={semanticColors.info} 
          showRefresh={true}
          onRefresh={refreshInfo}
        />
        
        <ColorPaletteDisplay title="Neutral Colors" palette={neutralPalette} />
      </div>
    </div>
  );
}