import { useLanguage } from "@/contexts/LanguageContext";
import { blogs } from "@/data/mockData";
import type { RootStackParamList } from "@/navigation/types";
import { Colors, Radius, Shadow, Spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Nav = NativeStackNavigationProp<RootStackParamList>;

const CATEGORIES = [
  "All",
  "Criminal Law",
  "Family Law",
  "Property Law",
  "Business Law",
  "Labor Law",
];

const CAT_COLORS: Record<string, { bg: string; text: string }> = {
  "Criminal Law": { bg: "#FEF2F2", text: "#DC2626" },
  "Family Law": { bg: "#EEF4FA", text: "#0F4C81" },
  "Property Law": { bg: "#FAF6EA", text: "#BD9A2C" },
  "Business Law": { bg: "#ECFDF3", text: "#15803D" },
  "Labor Law": { bg: "#FFF7ED", text: "#C2410C" },
  Default: { bg: "#F1F5F9", text: "#475569" },
};

export default function BlogScreen() {
  const nav = useNavigation<Nav>();
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");
  const { lang, t } = useLanguage();

  const filtered = blogs.filter(
    (b) =>
      (activeCat === "All" || b.category === activeCat) &&
      (query === "" || b.title_en.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      <View style={s.header}>
        <Text style={s.headerTitle}>{t("Legal Blog", "আইনি ব্লগ")}</Text>
        <Text style={s.headerSub}>
          {t("Insights from verified lawyers", "যাচাইকৃত আইনজীবীদের থেকে")}
        </Text>
      </View>

      <View style={s.searchWrap}>
        <Ionicons name="search-outline" size={18} color={Colors.textMuted} />
        <TextInput
          style={s.searchInput}
          placeholder="Search articles…"
          placeholderTextColor={Colors.textSubtle}
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Ionicons name="close-circle" size={17} color={Colors.textMuted} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.chips}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[s.chip, activeCat === cat && s.chipOn]}
            onPress={() => setActiveCat(cat)}
          >
            <Text style={[s.chipTxt, activeCat === cat && s.chipTxtOn]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.list}
      >
        {filtered.map((b) => {
          const cs = CAT_COLORS[b.category] ?? CAT_COLORS.Default;
          return (
            <TouchableOpacity
              key={b.id}
              style={[s.card, Shadow.sm]}
              activeOpacity={0.85}
              onPress={() => nav.navigate("BlogArticle", { blogId: b.id })}
            >
              <View style={[s.catBadge, { backgroundColor: cs.bg }]}>
                <Text style={[s.catTxt, { color: cs.text }]}>{b.category}</Text>
              </View>
              <Text style={s.cardTitle}>
                {lang === "bn" ? b.title_bn : b.title_en}
              </Text>
              <Text style={s.cardExcerpt} numberOfLines={2}>
                {lang === "bn" ? b.content_bn : b.content_en}
              </Text>

              <View style={s.cardFooter}>
                <View style={s.cardMeta}>
                  <Ionicons
                    name="calendar-outline"
                    size={13}
                    color={Colors.textSubtle}
                  />
                  <Text style={s.cardDate}>{b.date}</Text>
                </View>
                <View style={s.readMore}>
                  <Text style={s.readMoreTxt}>
                    {t("Read more", "আরও পড়ুন")}
                  </Text>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.appBackground },
  header: {
    paddingHorizontal: Spacing.gutter,
    paddingTop: 6,
    paddingBottom: 14,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.textStrong,
    letterSpacing: -0.3,
  },
  headerSub: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: Spacing.gutter,
    marginVertical: 12,
    height: 44,
    paddingHorizontal: 14,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
  },
  searchInput: { flex: 1, fontSize: 14.5, color: Colors.textStrong },
  chips: { paddingHorizontal: Spacing.gutter, gap: 8, paddingBottom: 12 },
  chip: {
    height: 36,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: Colors.borderDefault,
    backgroundColor: Colors.cardBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  chipOn: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipTxt: { fontSize: 13, fontWeight: "600", color: Colors.textBody },
  chipTxtOn: { color: "#fff" },
  list: { paddingHorizontal: Spacing.gutter, paddingTop: 4 },
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.lg,
    padding: Spacing.card,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  catBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.pill,
    marginBottom: 10,
  },
  catTxt: { fontSize: 11.5, fontWeight: "700", letterSpacing: 0.3 },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textStrong,
    lineHeight: 22,
    marginBottom: 6,
  },
  cardExcerpt: {
    fontSize: 13.5,
    color: Colors.textMuted,
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardMeta: { flexDirection: "row", alignItems: "center", gap: 5 },
  cardDate: { fontSize: 12, color: Colors.textSubtle },
  readMore: { flexDirection: "row", alignItems: "center", gap: 4 },
  readMoreTxt: { fontSize: 13, fontWeight: "600", color: Colors.primary },
});
