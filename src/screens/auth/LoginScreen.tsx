import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Colors, Spacing, Radius, Shadow } from "@/theme";
import type { RootStackParamList } from "@/navigation/types";

type Nav = NativeStackNavigationProp<RootStackParamList>;
const LOGO = require("../../../assets/images/logo drk.png");

export default function LoginScreen() {
  const nav = useNavigation<Nav>();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <SafeAreaView style={s.safe} edges={["top", "bottom"]}>
      <View style={s.topRow}>
        <TouchableOpacity style={s.closeBtn} onPress={() => nav.goBack()}>
          <Ionicons name="close" size={22} color={Colors.textStrong} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={s.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={s.logoWrap}>
            <Image source={LOGO} style={s.logo} resizeMode="contain" />
            <Text style={s.h1}>
              {mode === "signin" ? "Welcome back" : "Create account"}
            </Text>
            <Text style={s.sub}>
              {mode === "signin"
                ? "Sign in to book consultations."
                : "Join to connect with verified lawyers."}
            </Text>
          </View>
          <View style={s.tabs}>
            <TouchableOpacity
              style={[s.tab, mode === "signin" && s.tabOn]}
              onPress={() => setMode("signin")}
            >
              <Text style={[s.tabTxt, mode === "signin" && s.tabTxtOn]}>
                Sign in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[s.tab, mode === "signup" && s.tabOn]}
              onPress={() => setMode("signup")}
            >
              <Text style={[s.tabTxt, mode === "signup" && s.tabTxtOn]}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={s.form}>
            {mode === "signup" && (
              <View style={s.field}>
                <Text style={s.fieldLbl}>Full name</Text>
                <View style={s.input}>
                  <Ionicons
                    name="person-outline"
                    size={18}
                    color={Colors.textMuted}
                  />
                  <TextInput
                    style={s.inputTxt}
                    placeholder="Rahim Uddin"
                    placeholderTextColor={Colors.textSubtle}
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="words"
                  />
                </View>
              </View>
            )}
            <View style={s.field}>
              <Text style={s.fieldLbl}>
                Phone number <Text style={{ color: Colors.error }}>*</Text>
              </Text>
              <View style={s.input}>
                <Ionicons
                  name="phone-portrait-outline"
                  size={18}
                  color={Colors.textMuted}
                />
                <TextInput
                  style={s.inputTxt}
                  placeholder="01XXXXXXXXX"
                  placeholderTextColor={Colors.textSubtle}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
              <Text style={s.helper}>
                We will send a one-time verification code.
              </Text>
            </View>
            <View style={s.field}>
              <Text style={s.fieldLbl}>
                Password <Text style={{ color: Colors.error }}>*</Text>
              </Text>
              <View style={s.input}>
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color={Colors.textMuted}
                />
                <TextInput
                  style={[s.inputTxt, { flex: 1 }]}
                  placeholder="••••••••"
                  placeholderTextColor={Colors.textSubtle}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPass}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <Ionicons
                    name={showPass ? "eye-off-outline" : "eye-outline"}
                    size={18}
                    color={Colors.textMuted}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={[s.btn, Shadow.primary]}
              onPress={() => nav.goBack()}
            >
              <Text style={s.btnTxt}>Continue</Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>
            <View style={s.orRow}>
              <View style={s.orLine} />
              <Text style={s.orTxt}>or continue with</Text>
              <View style={s.orLine} />
            </View>
            <TouchableOpacity style={s.socialBtn} onPress={() => nav.goBack()}>
              <Ionicons name="logo-google" size={20} color="#DB4437" />
              <Text style={s.socialTxt}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.legal}>
            By continuing you agree to our{" "}
            <Text style={s.legalLink}>Terms</Text> and{" "}
            <Text style={s.legalLink}>Privacy Policy</Text>.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.cardBackground },
  topRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: Spacing[3],
  },
  closeBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.sunken,
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: { flexGrow: 1, paddingHorizontal: Spacing.gutter, paddingBottom: 32 },
  logoWrap: { alignItems: "center", paddingTop: 8, paddingBottom: 24 },
  logo: { width: 80, height: 80, marginBottom: 16 },
  h1: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.textStrong,
    letterSpacing: -0.4,
    textAlign: "center",
  },
  sub: {
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
    maxWidth: 280,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: Colors.sunken,
    borderRadius: Radius.md,
    padding: 4,
    marginBottom: 24,
  },
  tab: { flex: 1, alignItems: "center", paddingVertical: 10, borderRadius: 10 },
  tabOn: { backgroundColor: Colors.cardBackground, ...Shadow.xs },
  tabTxt: { fontSize: 14, fontWeight: "600", color: Colors.textMuted },
  tabTxtOn: { color: Colors.primary },
  form: { gap: 16 },
  field: { gap: 6 },
  fieldLbl: { fontSize: 14, fontWeight: "600", color: Colors.textStrong },
  input: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 50,
    paddingHorizontal: 14,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.md,
    borderWidth: 1.5,
    borderColor: Colors.borderDefault,
  },
  inputTxt: { flex: 1, fontSize: 15.5, color: Colors.textStrong },
  helper: { fontSize: 12.5, color: Colors.textMuted, marginTop: 2 },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: Colors.primary,
    borderRadius: Radius.md,
    paddingVertical: 16,
    marginTop: 6,
  },
  btnTxt: { fontSize: 16, fontWeight: "700", color: "#fff" },
  orRow: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 4 },
  orLine: { flex: 1, height: 1, backgroundColor: Colors.borderSubtle },
  orTxt: { fontSize: 12.5, color: Colors.textSubtle },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 48,
    borderWidth: 1.5,
    borderColor: Colors.borderDefault,
    borderRadius: Radius.md,
    backgroundColor: Colors.cardBackground,
  },
  socialTxt: { fontSize: 14, fontWeight: "600", color: Colors.textStrong },
  legal: {
    fontSize: 12,
    color: Colors.textSubtle,
    textAlign: "center",
    marginTop: 24,
    lineHeight: 18,
  },
  legalLink: { color: Colors.primary, fontWeight: "600" },
});
