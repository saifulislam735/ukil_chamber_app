// @ds-adherence-ignore -- React Native scaffold; not a web component
import LawyerCard from "@/components/lawyers/LawyerCard";
import { blogs, lawyers } from "@/data/mockData";
import type { RootStackParamList } from "@/navigation/types";
import { Colors, Radius, Shadow, Spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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

const STATS = [
  { n: "10K+", label: "Satisfied Clients" },
  { n: "1K+", label: "Expert Lawyers" },
  { n: "98%", label: "Success Rate" },
];

const FEATURES = [
  {
    icon: "search-outline" as const,
    color: Colors.primary,
    bg: Colors.primarySoft,
    label: "Easy Search",
  },
  {
    icon: "shield-checkmark-outline" as const,
    color: Colors.success,
    bg: Colors.successSoft,
    label: "Verified Experts",
  },
  {
    icon: "calendar-outline" as const,
    color: "#BD9A2C",
    bg: Colors.accentSoft,
    label: "Easy Scheduling",
  },
];

export default function RnHomeScreen() {
  const nav = useNavigation<Nav>();

  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      {/* App bar */}
      <View style={s.appbar}>
        <Text style={s.brand}>Ukil Chamber</Text>
        <TouchableOpacity style={s.bell}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={Colors.textBody}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={s.hero}>
          <Text style={s.heroTag}>Free first chat</Text>
          <Text style={s.heroH}>Legal Help Made{""}Simple & Accessible</Text>
          <TouchableOpacity
            style={s.heroBtn}
            onPress={() => nav.navigate("Main", undefined as any)}
          >
            <Text style={s.heroBtnTxt}>Find a Lawyer</Text>
            <Ionicons name="arrow-forward" size={16} color={Colors.onAccent} />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={s.statsRow}>
          {STATS.map((st) => (
            <View key={st.label} style={s.statCard}>
              <Text style={s.statN}>{st.n}</Text>
              <Text style={s.statL}>{st.label}</Text>
            </View>
          ))}
        </View>

        {/* Features */}
        <View style={s.sectionRow}>
          <Text style={s.sectionT}>Why choose us</Text>
        </View>
        <View style={s.featsRow}>
          {FEATURES.map((f) => (
            <View key={f.label} style={s.feat}>
              <View style={[s.featIc, { backgroundColor: f.bg }]}>
                <Ionicons name={f.icon} size={20} color={f.color} />
              </View>
              <Text style={s.featT}>{f.label}</Text>
            </View>
          ))}
        </View>

        {/* Top lawyers */}
        <View style={s.sectionRow}>
          <Text style={s.sectionT}>Top rated lawyers</Text>
          <TouchableOpacity
            onPress={() => nav.navigate("Main", undefined as any)}
          >
            <Text style={s.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        {lawyers.slice(0, 3).map((l) => (
          <View key={l.id} style={s.cardWrap}>
            <LawyerCard
              lawyer={l}
              onPress={() => nav.navigate("LawyerProfile", { lawyerId: l.id })}
            />
          </View>
        ))}

        {/* Blog previews */}
        <View style={s.sectionRow}>
          <Text style={s.sectionT}>From the blog</Text>
        </View>
        {blogs.slice(0, 3).map((b) => (
          <TouchableOpacity
            key={b.id}
            style={[s.blogCard, Shadow.sm]}
            onPress={() => nav.navigate("BlogArticle", { blogId: b.id })}
          >
            <Text style={s.blogCat}>{b.category}</Text>
            <Text style={s.blogT}>{b.title_en}</Text>
            <Text style={s.blogX} numberOfLines={2}>
              {b.content_en}
            </Text>
            <View style={s.blogMeta}>
              <Ionicons
                name="calendar-outline"
                size={13}
                color={Colors.textSubtle}
              />
              <Text style={s.blogDate}>{b.date}</Text>
              <Text style={s.readMore}>Read more →</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.appBackground },
  scroll: { flex: 1 },
  appbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.gutter,
    paddingVertical: 12,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  brand: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
    color: Colors.textStrong,
    letterSpacing: -0.3,
  },
  bell: { padding: 4 },

  hero: {
    margin: Spacing[4],
    borderRadius: Radius.lg,
    padding: 20,
    backgroundColor: Colors.primary,
    overflow: "hidden",
  },
  heroTag: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#DFC76A",
    marginBottom: 8,
  },
  heroH: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    lineHeight: 30,
    marginBottom: 16,
  },
  heroBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.accent,
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: Radius.pill,
    alignSelf: "flex-start",
  },
  heroBtnTxt: { fontSize: 14, fontWeight: "700", color: Colors.onAccent },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: Spacing.gutter,
    paddingVertical: 14,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.md,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    ...Shadow.xs,
  },
  statN: { fontSize: 19, fontWeight: "800", color: Colors.primary },
  statL: {
    fontSize: 10.5,
    color: Colors.textMuted,
    marginTop: 2,
    textAlign: "center",
  },

  sectionRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.gutter,
    paddingTop: 8,
    paddingBottom: 10,
  },
  sectionT: { fontSize: 17, fontWeight: "700", color: Colors.textStrong },
  seeAll: { fontSize: 13, fontWeight: "600", color: Colors.primary },

  featsRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: Spacing.gutter,
    paddingBottom: 8,
  },
  feat: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.md,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    gap: 8,
    ...Shadow.xs,
  },
  featIc: {
    width: 34,
    height: 34,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  featT: {
    fontSize: 11.5,
    fontWeight: "700",
    color: Colors.textStrong,
    lineHeight: 16,
  },

  cardWrap: { paddingHorizontal: Spacing.gutter, marginBottom: 12 },

  blogCard: {
    marginHorizontal: Spacing.gutter,
    marginBottom: 12,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.lg,
    padding: Spacing.card,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  blogCat: {
    fontSize: 11,
    fontWeight: "700",
    color: Colors.primary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  blogT: {
    fontSize: 15.5,
    fontWeight: "700",
    color: Colors.textStrong,
    lineHeight: 21,
    marginBottom: 5,
  },
  blogX: { fontSize: 13, color: Colors.textMuted, lineHeight: 19 },
  blogMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
  blogDate: { flex: 1, fontSize: 12, color: Colors.textSubtle },
  readMore: { fontSize: 12, fontWeight: "600", color: Colors.primary },
});
