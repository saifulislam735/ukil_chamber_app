// @ds-adherence-ignore -- React Native scaffold; not a web component
// Ukil Chamber — Typography tokens
import { StyleSheet } from 'react-native';

export const FontFamily = {
  regular: 'System',
  medium: 'System',
  semibold: 'System',
  bold: 'System',
  extrabold: 'System',
  // NOTE: Replace 'System' with 'Inter_400Regular' etc.
  // after loading via expo-google-fonts:
  //   npx expo install @expo-google-fonts/inter
};

export const FontSize = {
  display: 34,
  h1: 28,
  h2: 22,
  h3: 18,
  bodyLg: 17,
  body: 15,
  label: 14,
  caption: 13,
  overline: 11,
};

export const LineHeight = {
  display: 40,
  h1: 34,
  h2: 28,
  h3: 24,
  bodyLg: 26,
  body: 22,
  label: 20,
  caption: 18,
};

export const Typography = StyleSheet.create({
  display: {
    fontSize: FontSize.display,
    lineHeight: LineHeight.display,
    fontWeight: '800',
    letterSpacing: -0.68,
  },
  h1: {
    fontSize: FontSize.h1,
    lineHeight: LineHeight.h1,
    fontWeight: '700',
    letterSpacing: -0.42,
  },
  h2: {
    fontSize: FontSize.h2,
    lineHeight: LineHeight.h2,
    fontWeight: '700',
    letterSpacing: -0.22,
  },
  h3: {
    fontSize: FontSize.h3,
    lineHeight: LineHeight.h3,
    fontWeight: '600',
  },
  bodyLg: {
    fontSize: FontSize.bodyLg,
    lineHeight: LineHeight.bodyLg,
    fontWeight: '400',
  },
  body: {
    fontSize: FontSize.body,
    lineHeight: LineHeight.body,
    fontWeight: '400',
  },
  label: {
    fontSize: FontSize.label,
    lineHeight: LineHeight.label,
    fontWeight: '600',
  },
  caption: {
    fontSize: FontSize.caption,
    lineHeight: LineHeight.caption,
    fontWeight: '400',
  },
  overline: {
    fontSize: FontSize.overline,
    lineHeight: LineHeight.overline,
    fontWeight: '700',
    letterSpacing: 0.88,
    textTransform: 'uppercase',
  },
});
