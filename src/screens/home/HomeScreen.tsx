import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Colors, Spacing, Radius, Shadow } from "@/theme";
import { lawyers, blogs } from "@/data/mockData";
import type { RootStackParamList } from "@/navigation/types";
import LawyerCard from "@/components/lawyers/LawyerCard";
import { useLanguage } from "@/contexts/LanguageContext";

type Nav = NativeStackNavigationProp<RootStackParamList>;

const LOGO_TITLE = require("../../../assets/images/logo title.png");

const STATS = [
  { n: "10K+", en: "Satisfied Clients", bn: "সন্তুষ্ট ক্লায়েন্ট" },
  { n: "1K+", en: "Expert Lawyers", bn: "দক্ষ আইনজীবী" },
  { n: "98%", en: "Success Rate", bn: "সাফল্যের হার" },
];

const FEATURES = [
  {
    icon: "search-outline" as const,
    color: Colors.primary,
    bg: Colors.primarySoft,
    en: "Easy Search",
    bn: "সহজ অনুসন্ধান",
  },
  {
    icon: "shield-checkmark-outline" as const,
    color: Colors.success,
    bg: "#ECFDF3",
    en: "Verified Experts",
    bn: "যাচাইকৃত বিশেষজ্ঞ",
  },
  {
    icon: "calendar-outline" as const,
    color: "#BD9A2C",
    bg: "#FAF6EA",
    en: "Easy Scheduling",
    bn: "সহজ বুকিং",
  },
];

type Lang = "en" | "bn";

export default function HomeScreen() {
  const nav = useNavigation<Nav>();
  const { lang, setLang, t } = useLanguage();
  const goLawyers = () => (nav as any).navigate("Lawyers");
  const goBlog = () => (nav as any).navigate("Blog");

  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      {/* App bar */}
      <View style={s.appbar}>
        <Image source={LOGO_TITLE} style={s.logo} resizeMode="contain" />
        <View style={s.appbarRight}>
          {/* Language toggle */}
          <View style={s.langToggle}>
            <TouchableOpacity
              style={[s.langBtn, lang === "en" && s.langBtnOn]}
              onPress={() => setLang("en")}
            >
              <Text style={[s.langTxt, lang === "en" && s.langTxtOn]}>EN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[s.langBtn, lang === "bn" && s.langBtnOn]}
              onPress={() => setLang("bn")}
            >
              <Text style={[s.langTxt, lang === "bn" && s.langTxtOn]}>বাং</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={Colors.textBody}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={s.hero}>
          <Text style={s.heroTag}>
            {t("Free first chat", "বিনামূল্যে প্রথম পরামর্শ")}
          </Text>
          <Text style={s.heroH}>
            {t(
              "Legal Help Made\nSimple & Accessible",
              "সহজ ও সুলভ\nআইনি সহায়তা",
            )}
          </Text>
          <TouchableOpacity style={s.heroBtn} onPress={goLawyers}>
            <Text style={s.heroBtnTxt}>
              {t("Find a Lawyer", "আইনজীবী খুঁজুন")}
            </Text>
            <Ionicons name="arrow-forward" size={16} color={Colors.onAccent} />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={s.statsRow}>
          {STATS.map((st) => (
            <View key={st.en} style={s.statCard}>
              <Text style={s.statN}>{st.n}</Text>
              <Text style={s.statL}>{t(st.en, st.bn)}</Text>
            </View>
          ))}
        </View>

        {/* Features */}
        <View style={s.sectionRow}>
          <Text style={s.sectionT}>
            {t("Why choose us", "কেন আমাদের বেছে নেবেন")}
          </Text>
        </View>
        <View style={s.featsRow}>
          {FEATURES.map((f) => (
            <View key={f.en} style={s.feat}>
              <View style={[s.featIc, { backgroundColor: f.bg }]}>
                <Ionicons name={f.icon} size={20} color={f.color} />
              </View>
              <Text style={s.featT}>{t(f.en, f.bn)}</Text>
            </View>
          ))}
        </View>

        {/* Top lawyers */}
        <View style={s.sectionRow}>
          <Text style={s.sectionT}>
            {t("Top rated lawyers", "শীর্ষ আইনজীবী")}
          </Text>
          <TouchableOpacity onPress={goLawyers}>
            <Text style={s.seeAll}>{t("See all", "সব দেখুন")}</Text>
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

        {/* Blog */}
        <View style={s.sectionRow}>
          <Text style={s.sectionT}>{t("From the blog", "ব্লগ থেকে")}</Text>
          <TouchableOpacity onPress={goBlog}>
            <Text style={s.seeAll}>{t("See all", "সব দেখুন")}</Text>
          </TouchableOpacity>
        </View>
        {blogs.slice(0, 3).map((b) => (
          <TouchableOpacity
            key={b.id}
            style={[s.blogCard, Shadow.sm]}
            onPress={() => nav.navigate("BlogArticle", { blogId: b.id })}
          >
            <View style={s.blogCatRow}>
              <Text style={s.blogCat}>{b.category}</Text>
              <Text style={s.blogDate}>{b.date}</Text>
            </View>
            <Text style={s.blogT}>
              {lang === "bn" ? b.title_bn : b.title_en}
            </Text>
            <Text style={s.blogX} numberOfLines={2}>
              {lang === "bn" ? b.content_bn : b.content_en}
            </Text>
            <Text style={s.readMore}>{t("Read more →", "আরও পড়ুন →")}</Text>
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
    justifyContent: "space-between",
    paddingHorizontal: Spacing.gutter,
    paddingVertical: 10,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  logo: { height: 32, width: 130 },
  appbarRight: { flexDirection: "row", alignItems: "center", gap: 12 },
  langToggle: {
    flexDirection: "row",
    backgroundColor: Colors.sunken,
    borderRadius: Radius.pill,
    padding: 3,
  },
  langBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.pill,
  },
  langBtnOn: { backgroundColor: Colors.cardBackground },
  langTxt: { fontSize: 12, fontWeight: "600", color: Colors.textMuted },
  langTxtOn: { color: Colors.primary },
  hero: {
    margin: Spacing[4],
    borderRadius: Radius.lg,
    padding: 20,
    backgroundColor: Colors.primary,
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
  blogCatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  blogCat: {
    fontSize: 11,
    fontWeight: "700",
    color: Colors.primary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  blogDate: { fontSize: 11, color: Colors.textSubtle },
  blogT: {
    fontSize: 15.5,
    fontWeight: "700",
    color: Colors.textStrong,
    lineHeight: 21,
    marginBottom: 5,
  },
  blogX: { fontSize: 13, color: Colors.textMuted, lineHeight: 19 },
  readMore: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primary,
    marginTop: 8,
  },
});
