// @ds-adherence-ignore -- React Native scaffold; not a web component
import { lawyers } from "@/data/mockData";
import type {
  RootStackParamList,
  RootStackScreenProps,
} from "@/navigation/types";
import { Colors, Radius, Shadow, Spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Route = RootStackScreenProps<"LawyerProfile">["route"];

function InfoRow({
  icon,
  text,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  text: string;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
      <Ionicons name={icon} size={14} color={Colors.textMuted} />
      <Text style={{ fontSize: 13, color: Colors.textMuted }}>{text}</Text>
    </View>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <View style={p.pill}>
      <Text style={p.pillTxt}>{text}</Text>
    </View>
  );
}

export default function LawyerProfileScreen() {
  const nav = useNavigation<Nav>();
  const route = useRoute<Route>();
  const lawyer = lawyers.find((l) => l.id === route.params.lawyerId);

  if (!lawyer) return null;

  const initials = lawyer.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <SafeAreaView style={s.safe} edges={["top", "bottom"]}>
      {/* Back bar */}
      <View style={s.topBar}>
        <TouchableOpacity style={s.backBtn} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={22} color={Colors.textStrong} />
        </TouchableOpacity>
        <Text style={s.topTitle}>Lawyer profile</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView
        style={s.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Hero */}
        <View style={s.hero}>
          <View style={s.avatar}>
            <Text style={s.avatarTxt}>{initials}</Text>
          </View>
          <Text style={s.name}>{lawyer.name}</Text>
          <Text style={s.spec}>{lawyer.specialization}</Text>
          <View style={s.metaRow}>
            <InfoRow
              icon="star"
              text={`${lawyer.rating} (${lawyer.reviewCount})`}
            />
            <InfoRow icon="location-outline" text={lawyer.location} />
            <View
              style={[s.badge, lawyer.available ? s.badgeGreen : s.badgeGray]}
            >
              <View
                style={[
                  s.dot,
                  {
                    backgroundColor: lawyer.available
                      ? Colors.success
                      : Colors.textSubtle,
                  },
                ]}
              />
              <Text
                style={[
                  s.badgeTxt,
                  {
                    color: lawyer.available
                      ? Colors.successText
                      : Colors.textMuted,
                  },
                ]}
              >
                {lawyer.available ? "Available" : "Busy"}
              </Text>
            </View>
          </View>
        </View>

        {/* KPIs */}
        <View style={s.kpis}>
          {[
            [lawyer.experience, "Experience"],
            [`${lawyer.cases}+`, "Cases"],
            [lawyer.successRate, "Success"],
          ].map(([n, l]) => (
            <View key={l} style={s.kpi}>
              <Text style={s.kpiN}>{n}</Text>
              <Text style={s.kpiL}>{l}</Text>
            </View>
          ))}
        </View>

        {/* About */}
        <Section title="About">
          <Text style={s.bio}>{lawyer.description}</Text>
        </Section>

        {/* Expertise */}
        <Section title="Expertise">
          <View style={s.pills}>
            {lawyer.expertise.map((e) => (
              <Pill key={e} text={e} />
            ))}
          </View>
        </Section>

        {/* Education */}
        <Section title="Education">
          <View style={s.pills}>
            {lawyer.education.map((e) => (
              <Pill key={e} text={e} />
            ))}
          </View>
        </Section>

        {/* Languages */}
        <Section title="Languages">
          <View style={s.pills}>
            {lawyer.languages.map((l) => (
              <Pill key={l} text={l} />
            ))}
          </View>
        </Section>

        {/* Availability */}
        <Section title="Weekly availability">
          {Object.entries(lawyer.availability).map(([day, time]) => (
            <View key={day} style={s.availRow}>
              <Text style={s.availDay}>{day}</Text>
              <Text style={s.availTime}>{time}</Text>
            </View>
          ))}
        </Section>
      </ScrollView>

      {/* Sticky CTA */}
      <View style={s.cta}>
        <View>
          <Text style={s.feeAmt}>৳{lawyer.consultationFee}</Text>
          <Text style={s.feeLbl}>per session</Text>
        </View>
        <TouchableOpacity
          style={s.bookBtn}
          onPress={() => nav.navigate("Login", { redirectTo: "Booking" })}
        >
          <Ionicons name="calendar-outline" size={18} color="#fff" />
          <Text style={s.bookBtnTxt}>Book consultation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        paddingHorizontal: Spacing.gutter,
        paddingTop: 16,
        paddingBottom: 4,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
          color: Colors.textStrong,
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.appBackground },
  scroll: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing[3],
    paddingVertical: 10,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  backBtn: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  topTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    color: Colors.textStrong,
    textAlign: "center",
  },
  hero: {
    backgroundColor: Colors.cardBackground,
    padding: Spacing.gutter,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
    gap: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primarySoft,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  avatarTxt: { fontSize: 26, fontWeight: "700", color: Colors.primary },
  name: { fontSize: 20, fontWeight: "800", color: Colors.textStrong },
  spec: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
    marginTop: 2,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 6,
    justifyContent: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Radius.pill,
  },
  badgeGreen: { backgroundColor: Colors.successSoft },
  badgeGray: { backgroundColor: Colors.sunken },
  dot: { width: 6, height: 6, borderRadius: 3 },
  badgeTxt: { fontSize: 12, fontWeight: "600" },
  kpis: { flexDirection: "row", gap: 10, padding: Spacing.gutter },
  kpi: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.md,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    ...Shadow.xs,
  },
  kpiN: { fontSize: 17, fontWeight: "800", color: Colors.textStrong },
  kpiL: { fontSize: 11, color: Colors.textMuted, marginTop: 2 },
  bio: { fontSize: 14, lineHeight: 22, color: Colors.textBody },
  pills: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  availRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  availDay: { fontSize: 13.5, color: Colors.textMuted, fontWeight: "600" },
  availTime: { fontSize: 13.5, color: Colors.textStrong },
  cta: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: Spacing.gutter,
    paddingBottom: 28,
    backgroundColor: "rgba(255,255,255,0.97)",
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
  },
  feeAmt: { fontSize: 20, fontWeight: "800", color: Colors.textStrong },
  feeLbl: { fontSize: 11, color: Colors.textSubtle },
  bookBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.primary,
    borderRadius: Radius.md,
    paddingVertical: 15,
    ...Shadow.primary,
  },
  bookBtnTxt: { fontSize: 15, fontWeight: "700", color: "#fff" },
});

const p = StyleSheet.create({
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.pill,
    backgroundColor: Colors.primarySoft,
  },
  pillTxt: { fontSize: 12.5, fontWeight: "600", color: Colors.primary },
});
