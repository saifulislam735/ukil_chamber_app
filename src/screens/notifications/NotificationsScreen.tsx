import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors, Spacing, Radius, Shadow } from "@/theme";

const NOTIFS = [
  {
    id: 1,
    icon: "checkmark-circle" as const,
    color: Colors.success,
    bg: "#ECFDF3",
    title: "Consultation confirmed",
    body: "Adv. Farhana Akter accepted your request for Saturday 10:30 AM.",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    icon: "document-text" as const,
    color: Colors.primary,
    bg: Colors.primarySoft,
    title: "Document ready",
    body: "Your affidavit draft is ready for review.",
    time: "1h",
    unread: true,
  },
  {
    id: 3,
    icon: "shield-checkmark" as const,
    color: "#BD9A2C",
    bg: "#FAF6EA",
    title: "Verify your account",
    body: "Upload your NID to get the verified badge.",
    time: "5h",
    unread: false,
  },
  {
    id: 4,
    icon: "star" as const,
    color: Colors.success,
    bg: "#ECFDF3",
    title: "Review requested",
    body: "How was your consultation with Adv. Kamal Hossain?",
    time: "1d",
    unread: false,
  },
];

export default function NotificationsScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      <View style={s.topBar}>
        <TouchableOpacity style={s.back} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={22} color={Colors.textStrong} />
        </TouchableOpacity>
        <Text style={s.title}>Notifications</Text>
        <View style={{ width: 44 }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.list}
      >
        {NOTIFS.map((n) => (
          <View
            key={n.id}
            style={[s.card, n.unread && s.cardUnread, Shadow.xs]}
          >
            <View style={[s.ic, { backgroundColor: n.bg }]}>
              <Ionicons name={n.icon} size={20} color={n.color} />
            </View>
            <View style={s.body}>
              <View style={s.row}>
                <Text style={s.cardTitle}>{n.title}</Text>
                <Text style={s.time}>{n.time}</Text>
              </View>
              <Text style={s.cardBody}>{n.body}</Text>
            </View>
            {n.unread && <View style={s.dot} />}
          </View>
        ))}
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
  back: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: Colors.textStrong,
  },
  list: { padding: Spacing.gutter, gap: 10 },
  card: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    alignItems: "flex-start",
  },
  cardUnread: { backgroundColor: Colors.primarySoft, borderColor: "#BFDBFE" },
  ic: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  body: { flex: 1, gap: 3 },
  row: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.textStrong,
    flex: 1,
  },
  time: { fontSize: 11.5, color: Colors.textSubtle, flexShrink: 0 },
  cardBody: { fontSize: 13, color: Colors.textMuted, lineHeight: 18 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginTop: 6,
    flexShrink: 0,
  },
});
