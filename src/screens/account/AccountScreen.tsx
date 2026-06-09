import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Colors, Spacing, Radius, Shadow } from "@/theme";
import type { RootStackParamList } from "@/navigation/types";

type Nav = NativeStackNavigationProp<RootStackParamList>;
const LOGO_TITLE = require("../../../assets/images/logo title.png");

const MENU_ITEMS = [
  { icon: "calendar-outline" as const, label: "My consultations", badge: "2" },
  { icon: "bookmark-outline" as const, label: "Saved lawyers", badge: null },
  {
    icon: "document-text-outline" as const,
    label: "My documents",
    badge: null,
  },
  {
    icon: "shield-checkmark-outline" as const,
    label: "Verify NID",
    badge: "!",
  },
  {
    icon: "help-circle-outline" as const,
    label: "Help & support",
    badge: null,
  },
];

const FEATURES = [
  { icon: "calendar-outline" as const, text: "Book lawyer consultations" },
  { icon: "document-text-outline" as const, text: "Manage legal documents" },
  { icon: "notifications-outline" as const, text: "Get case updates" },
  { icon: "chatbubbles-outline" as const, text: "Message your lawyer" },
];

export default function AccountScreen() {
  const nav = useNavigation<Nav>();
  const isAuthed = false; // Replace with AuthContext in Phase 5

  if (!isAuthed) {
    return (
      <SafeAreaView style={s.safe} edges={["top"]}>
        <ScrollView
          contentContainerStyle={s.guestScroll}
          showsVerticalScrollIndicator={false}
        >
          <Image source={LOGO_TITLE} style={s.guestLogo} resizeMode="contain" />
          <Text style={s.guestH}>Your legal journey{"\n"}starts here</Text>
          <Text style={s.guestSub}>
            Create an account to unlock all features.
          </Text>
          <View style={s.featureList}>
            {FEATURES.map((f) => (
              <View key={f.text} style={s.featureRow}>
                <View style={s.featureIc}>
                  <Ionicons name={f.icon} size={20} color={Colors.primary} />
                </View>
                <Text style={s.featureTxt}>{f.text}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={[s.signInBtn, Shadow.primary]}
            onPress={() => nav.navigate("Login", {})}
          >
            <Text style={s.signInBtnTxt}>Sign in</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={s.signUpBtn}
            onPress={() => nav.navigate("Login", {})}
          >
            <Text style={s.signUpBtnTxt}>Create an account</Text>
          </TouchableOpacity>
          <Text style={s.guestHint}>
            Browsing as guest · Explore lawyers and blogs freely.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.profileHero}>
          <View style={s.avatar}>
            <Text style={s.avatarTxt}>RU</Text>
          </View>
          <View style={s.profileInfo}>
            <Text style={s.profileName}>Rahim Uddin</Text>
            <Text style={s.profilePhone}>+880 1712 345678</Text>
            <View style={s.verifiedBadge}>
              <Ionicons
                name="shield-checkmark"
                size={13}
                color={Colors.success}
              />
              <Text style={s.verifiedTxt}>Verified account</Text>
            </View>
          </View>
        </View>
        <View style={s.menu}>
          {MENU_ITEMS.map((item, i) => (
            <TouchableOpacity
              key={item.label}
              style={[s.menuRow, i < MENU_ITEMS.length - 1 && s.menuRowBorder]}
            >
              <View style={s.menuIc}>
                <Ionicons name={item.icon} size={19} color={Colors.primary} />
              </View>
              <Text style={s.menuLbl}>{item.label}</Text>
              {item.badge && (
                <View
                  style={[
                    s.badge,
                    item.badge === "!" && { backgroundColor: "#FFFBEB" },
                  ]}
                >
                  <Text
                    style={[
                      s.badgeTxt,
                      item.badge === "!" && { color: Colors.warning },
                    ]}
                  >
                    {item.badge}
                  </Text>
                </View>
              )}
              <Ionicons
                name="chevron-forward"
                size={17}
                color={Colors.textSubtle}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={s.logoutRow}>
          <Ionicons name="log-out-outline" size={19} color={Colors.error} />
          <Text style={s.logoutTxt}>Log out</Text>
        </TouchableOpacity>
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.appBackground },
  guestScroll: {
    flexGrow: 1,
    alignItems: "center",
    padding: Spacing.gutter,
    paddingTop: 24,
  },
  guestLogo: { width: 180, height: 60, marginBottom: 24 },
  guestH: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.textStrong,
    textAlign: "center",
    lineHeight: 34,
    letterSpacing: -0.4,
  },
  guestSub: {
    fontSize: 14.5,
    color: Colors.textMuted,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 21,
    maxWidth: 290,
  },
  featureList: { width: "100%", gap: 14, marginBottom: 28 },
  featureRow: { flexDirection: "row", alignItems: "center", gap: 14 },
  featureIc: {
    width: 40,
    height: 40,
    borderRadius: Radius.sm,
    backgroundColor: Colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  featureTxt: {
    fontSize: 14.5,
    fontWeight: "500",
    color: Colors.textBody,
    flex: 1,
  },
  signInBtn: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: Colors.primary,
    borderRadius: Radius.md,
    paddingVertical: 16,
    marginBottom: 12,
  },
  signInBtnTxt: { fontSize: 16, fontWeight: "700", color: "#fff" },
  signUpBtn: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: Radius.md,
    borderWidth: 1.5,
    borderColor: Colors.borderDefault,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpBtnTxt: { fontSize: 15, fontWeight: "600", color: Colors.primary },
  guestHint: {
    fontSize: 12,
    color: Colors.textSubtle,
    textAlign: "center",
    lineHeight: 18,
  },
  profileHero: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: Spacing.gutter,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primarySoft,
    borderWidth: 1.5,
    borderColor: Colors.borderFocus,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTxt: { fontSize: 20, fontWeight: "700", color: Colors.primary },
  profileInfo: { flex: 1, gap: 2 },
  profileName: { fontSize: 17, fontWeight: "800", color: Colors.textStrong },
  profilePhone: { fontSize: 13, color: Colors.textMuted },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 3,
  },
  verifiedTxt: { fontSize: 12, fontWeight: "600", color: Colors.success },
  menu: {
    backgroundColor: Colors.cardBackground,
    marginTop: 16,
    marginHorizontal: Spacing.gutter,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    overflow: "hidden",
  },
  menuRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 15 },
  menuRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  menuIc: {
    width: 34,
    height: 34,
    borderRadius: 9,
    backgroundColor: Colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  menuLbl: {
    flex: 1,
    fontSize: 14.5,
    fontWeight: "600",
    color: Colors.textStrong,
  },
  badge: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.pill,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: { fontSize: 11, fontWeight: "700", color: "#fff" },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: Spacing.gutter,
    padding: 15,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  logoutTxt: { fontSize: 14.5, fontWeight: "600", color: Colors.error },
});
