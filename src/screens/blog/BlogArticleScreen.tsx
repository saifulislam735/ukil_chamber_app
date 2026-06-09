import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Share,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Colors, Spacing, Radius, Shadow } from "@/theme";
import { blogs } from "@/data/mockData";
import type {
  RootStackParamList,
  RootStackScreenProps,
} from "@/navigation/types";

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Route = RootStackScreenProps<"BlogArticle">["route"];

const CAT_COLORS: Record<string, { bg: string; text: string }> = {
  "Criminal Law": { bg: "#FEF2F2", text: "#DC2626" },
  "Family Law": { bg: "#EEF4FA", text: "#0F4C81" },
  "Property Law": { bg: "#FAF6EA", text: "#BD9A2C" },
  "Business Law": { bg: "#ECFDF3", text: "#15803D" },
  "Labor Law": { bg: "#FFF7ED", text: "#C2410C" },
  Default: { bg: "#F1F5F9", text: "#475569" },
};

export default function BlogArticleScreen() {
  const nav = useNavigation<Nav>();
  const route = useRoute<Route>();
  const blog = blogs.find((b) => b.id === route.params.blogId);
  if (!blog) return null;
  const cs = CAT_COLORS[blog.category] ?? CAT_COLORS.Default;

  return (
    <SafeAreaView style={s.safe} edges={["top", "bottom"]}>
      <View style={s.topBar}>
        <TouchableOpacity style={s.iconBtn} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={22} color={Colors.textStrong} />
        </TouchableOpacity>
        <Text style={s.topLabel}>Blog</Text>
        <TouchableOpacity
          style={s.iconBtn}
          onPress={() =>
            Share.share({ title: blog.title_en, message: blog.title_en })
          }
        >
          <Ionicons name="share-outline" size={22} color={Colors.textStrong} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.hero}>
          <View style={[s.catBadge, { backgroundColor: cs.bg }]}>
            <Text style={[s.catTxt, { color: cs.text }]}>{blog.category}</Text>
          </View>
          <Text style={s.title}>{blog.title_en}</Text>
          <View style={s.meta}>
            <Ionicons
              name="calendar-outline"
              size={14}
              color={Colors.textMuted}
            />
            <Text style={s.metaTxt}>{blog.date}</Text>
            <View style={s.dot} />
            <Text style={s.metaTxt}>5 min read</Text>
          </View>
        </View>
        <View style={s.divider} />
        <View style={s.body}>
          <Text style={s.bodyTxt}>{blog.content_en}</Text>
          <View style={s.bnBlock}>
            <Text style={s.bnLabel}>বাংলায় পড়ুন</Text>
            <Text style={s.bnTxt}>{blog.content_bn}</Text>
          </View>
        </View>
        <View style={[s.ctaCard, Shadow.sm]}>
          <Ionicons
            name="scale-outline"
            size={24}
            color={Colors.primary}
            style={{ marginBottom: 8 }}
          />
          <Text style={s.ctaH}>Need legal help?</Text>
          <Text style={s.ctaP}>
            Connect with a verified lawyer for a consultation.
          </Text>
          <TouchableOpacity
            style={s.ctaBtn}
            onPress={() => nav.navigate("Main", undefined as any)}
          >
            <Text style={s.ctaBtnTxt}>Find a lawyer</Text>
            <Ionicons name="arrow-forward" size={15} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.appBackground },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing[3],
    paddingVertical: 10,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  iconBtn: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  topLabel: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textStrong,
  },
  hero: { padding: Spacing.gutter, backgroundColor: Colors.cardBackground },
  catBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Radius.pill,
    marginBottom: 12,
  },
  catTxt: { fontSize: 12, fontWeight: "700" },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.textStrong,
    lineHeight: 30,
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  meta: { flexDirection: "row", alignItems: "center", gap: 6 },
  metaTxt: { fontSize: 13, color: Colors.textMuted },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: Colors.textSubtle,
  },
  divider: { height: 1, backgroundColor: Colors.borderSubtle },
  body: { padding: Spacing.gutter },
  bodyTxt: { fontSize: 15.5, color: Colors.textBody, lineHeight: 26 },
  bnBlock: {
    marginTop: 24,
    backgroundColor: Colors.primarySoft,
    borderRadius: Radius.md,
    padding: Spacing.card,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
  },
  bnLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.primary,
    marginBottom: 8,
  },
  bnTxt: { fontSize: 15, color: Colors.textBody, lineHeight: 26 },
  ctaCard: {
    marginHorizontal: Spacing.gutter,
    marginTop: 8,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.lg,
    padding: Spacing.card,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  ctaH: {
    fontSize: 17,
    fontWeight: "800",
    color: Colors.textStrong,
    marginBottom: 4,
  },
  ctaP: {
    fontSize: 13.5,
    color: Colors.textMuted,
    textAlign: "center",
    marginBottom: 14,
  },
  ctaBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.primary,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: Radius.pill,
  },
  ctaBtnTxt: { fontSize: 14, fontWeight: "700", color: "#fff" },
});
