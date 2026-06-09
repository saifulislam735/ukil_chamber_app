// @ds-adherence-ignore -- React Native scaffold; not a web component
// Ukil Chamber — Spacing + radii + shadows

export const Spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  gutter: 20,   // screen side padding
  card: 16,     // card inner padding
};

export const Radius = {
  xs: 6,
  sm: 10,
  md: 14,    // buttons + most cards
  lg: 18,    // larger cards + sheets
  xl: 24,    // modals
  pill: 999,
};

export const Shadow = {
  xs: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  lg: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 28,
    elevation: 8,
  },
  primary: {
    shadowColor: '#0F4C81',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 6,
  },
};

export const Layout = {
  tabBarHeight: 64,
  appBarHeight: 56,
  screenMaxWidth: 420,
};
