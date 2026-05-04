import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb
} from "@material/material-color-utilities";

// The Elite Mystic Seed: High-energy violet
export const themeSeed = "#6200EE";

export const initializeTheme = () => {
  const theme = themeFromSourceColor(argbFromHex(themeSeed));
  const scheme = theme.schemes.dark; // Elite standard is always high-contrast dark
  const root = document.documentElement;

  const colorMap: Record<string, any> = {
    "--md-sys-color-primary": scheme.primary,
    "--md-sys-color-on-primary": scheme.onPrimary,
    "--md-sys-color-secondary": scheme.secondary,
    "--md-sys-color-tertiary": "#FFD700", // Gold Elite
    "--md-sys-color-surface": "#050505", // Deep Obsidian (Fixed: Not pale)
    "--md-sys-color-on-surface": "#FFFFFF", // High-contrast White
    "--md-sys-color-surface-container": "#121212",
    "--md-sys-color-outline": "rgba(255, 215, 0, 0.2)", // Golden Outline
  };

  Object.entries(colorMap).forEach(([prop, value]) => {
    const hex = typeof value === 'string' ? value : hexFromArgb(value);
    root.style.setProperty(prop, hex);
  });
};
