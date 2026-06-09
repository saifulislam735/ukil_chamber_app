// @ds-adherence-ignore -- React Native scaffold; not a web component
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// ---- Root Stack (modal-style screens on top of tabs) --------------------
export type RootStackParamList = {
  Main: undefined;
  LawyerProfile: { lawyerId: number };
  BlogArticle: { blogId: number };
  Login: { redirectTo?: keyof RootStackParamList };
  Booking: { lawyerId: number };
  BookingSuccess: { lawyerId: number; reference: string };
};

// ---- Bottom Tab Navigator -----------------------------------------------
export type TabParamList = {
  Home: undefined;
  Lawyers: undefined;
  Blog: undefined;
  Account: undefined;
};

// ---- Screen prop types ---------------------------------------------------
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof TabParamList> =
  BottomTabScreenProps<TabParamList, T>;
