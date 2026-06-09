// @ds-adherence-ignore -- React Native scaffold; not a web component
// Ukil Chamber — Color tokens
// Matches the design system: tokens/colors.css

export const Colors = {
  // Primary — Trust Blue
  primary: "#0F4C81",
  primaryHover: "#0C3E6A",
  primaryPress: "#0A3052",
  primarySoft: "#EEF4FA",
  onPrimary: "#FFFFFF",

  // Accent — Professional Gold
  accent: "#D4AF37",
  accentHover: "#BD9A2C",
  accentSoft: "#FAF6EA",
  onAccent: "#0F172A",

  // Neutrals — Slate scale
  white: "#FFFFFF",
  slate50: "#F8FAFC", // app background
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1F2937", // secondary brand
  slate900: "#0F172A",

  // Semantic
  success: "#22C55E",
  successSoft: "#ECFDF3",
  successText: "#15803D",
  warning: "#F59E0B",
  warningSoft: "#FFFBEB",
  error: "#EF4444",
  errorSoft: "#FEF2F2",

  // Surfaces
  appBackground: "#F8FAFC",
  cardBackground: "#FFFFFF",
  sunken: "#F1F5F9",
  inverse: "#1F2937",

  // Text
  textStrong: "#0F172A",
  textBody: "#334155",
  textMuted: "#64748B",
  textSubtle: "#94A3B8",
  textLink: "#0F4C81",

  // Borders
  borderSubtle: "#E2E8F0",
  borderDefault: "#CBD5E1",
  borderFocus: "#1A5E9A",
} as const;
