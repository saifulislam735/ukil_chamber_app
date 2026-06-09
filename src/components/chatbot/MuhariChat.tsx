import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Radius, Spacing, Shadow } from "@/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const RESPONSES: { keywords: string[]; en: string; bn: string }[] = [
  {
    keywords: ["divorce", "talaq", "separation", "বিবাহ", "তালাক"],
    en: "Divorce in Bangladesh is governed by the Muslim Family Laws Ordinance 1961 (for Muslims). The husband can give talaq with 90-day notice to the local chairman. A wife may file for khula through court. I recommend consulting a verified family lawyer.",
    bn: "বাংলাদেশে বিবাহবিচ্ছেদ মুসলিম পারিবারিক আইন অধ্যাদেশ ১৯৬১ দ্বারা পরিচালিত। একজন যাচাইকৃত পারিবারিক আইনজীবীর সাথে পরামর্শ করার পরামর্শ দিচ্ছি।",
  },
  {
    keywords: ["property", "land", "mutation", "deed", "জমি", "সম্পত্তি"],
    en: "Land registration in Bangladesh requires verifying sale deeds, paying stamp duty at the Sub-Registrar's office, and mutation. Verify ownership documents carefully to avoid disputes. Consult a property lawyer.",
    bn: "জমি নিবন্ধনের জন্য দলিল যাচাই, স্ট্যাম্প শুল্ক প্রদান এবং মিউটেশন প্রয়োজন। একজন সম্পত্তি আইনজীবীর সাথে পরামর্শ করুন।",
  },
  {
    keywords: ["criminal", "arrest", "bail", "fir", "অপরাধ", "জামিন"],
    en: "For criminal matters in Bangladesh, you have the right to bail for bailable offences. Non-bailable offences require court approval. File an FIR at the nearest police station. A criminal defence lawyer can protect your rights.",
    bn: "ফৌজদারি মামলায় জামিনযোগ্য অপরাধে জামিন পাওয়ার অধিকার আছে। একজন অভিজ্ঞ ফৌজদারি আইনজীবীর সাথে যোগাযোগ করুন।",
  },
  {
    keywords: [
      "business",
      "company",
      "registration",
      "trade",
      "ব্যবসা",
      "কোম্পানি",
    ],
    en: "To register a business in Bangladesh, you need to register with the Registrar of Joint Stock Companies, get a trade licence from your local municipality, and obtain a TIN. Cost is typically BDT 5,000–20,000.",
    bn: "বাংলাদেশে ব্যবসা নিবন্ধনে জয়েন্ট স্টক কোম্পানির রেজিস্ট্রার, ট্রেড লাইসেন্স এবং TIN প্রয়োজন।",
  },
  {
    keywords: ["fee", "cost", "price", "charge", "খরচ", "ফি"],
    en: "Lawyer consultation fees on Ukil Chamber range from ৳600 to ৳2000 per session depending on specialization and experience. You can view exact fees on each lawyer's profile.",
    bn: "উকিল চেম্বারে পরামর্শ ফি বিশেষত্ব অনুযায়ী ৳৬০০ থেকে ৳২০০০ পর্যন্ত।",
  },
  {
    keywords: ["lawyer", "advocate", "find", "আইনজীবী", "উকিল"],
    en: "You can find verified lawyers on the Lawyers tab. Filter by specialization, location and availability. All lawyers on Ukil Chamber are verified advocates.",
    bn: "আইনজীবী ট্যাবে যাচাইকৃত আইনজীবী খুঁজুন। বিশেষত্ব ও অবস্থান অনুযায়ী ফিল্টার করুন।",
  },
];

function getResponse(input: string, lang: "en" | "bn"): string {
  const lower = input.toLowerCase();
  const match = RESPONSES.find((r) =>
    r.keywords.some((k) => lower.includes(k)),
  );
  if (match) return lang === "bn" ? match.bn : match.en;
  return lang === "bn"
    ? "আমি আপনাকে আইনি প্রশ্নে সাহায্য করতে পারি। তালাক, সম্পত্তি, ব্যবসা নিবন্ধন, ফৌজদারি আইন ইত্যাদি বিষয়ে জিজ্ঞেস করুন।"
    : "I can help with legal questions about divorce, property, business registration, criminal law and more. For case-specific advice, please consult a verified lawyer on our platform.";
}

export default function MuhariChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState<"en" | "bn">("en");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text:
        lang === "bn"
          ? "হ্যালো! আমি মুহরী AI, আপনার ভার্চুয়াল আইনি সহকারী। আজ কীভাবে সাহায্য করতে পারি?"
          : "Hello! I'm মুহরী AI, your virtual legal assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const scrollRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), text, isBot: false };
    const botMsg: Message = {
      id: Date.now() + 1,
      text: getResponse(text, lang),
      isBot: true,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <TouchableOpacity
          style={[s.fab, { bottom: insets.bottom + 72 }]}
          onPress={() => setOpen(true)}
        >
          <Text style={s.fabTxt}>মু</Text>
        </TouchableOpacity>
      )}

      {/* Chat modal */}
      <Modal visible={open} transparent animationType="slide">
        <KeyboardAvoidingView
          style={s.overlay}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={[s.panel, { marginBottom: insets.bottom + 72 }]}>
            {/* Header */}
            <View style={s.header}>
              <View style={s.headerLeft}>
                <View style={s.avatar}>
                  <Text style={s.avatarTxt}>মু</Text>
                </View>
                <View>
                  <Text style={s.headerTitle}>মুহরী AI Legal Assistant</Text>
                  <Text style={s.headerSub}>Powered by Ukil Chamber</Text>
                </View>
              </View>
              <View style={s.headerRight}>
                {/* lang toggle */}
                <TouchableOpacity
                  style={s.langBtn}
                  onPress={() => setLang((l) => (l === "en" ? "bn" : "en"))}
                >
                  <Text style={s.langTxt}>{lang === "en" ? "বাং" : "EN"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOpen(false)}>
                  <Ionicons name="close" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Messages */}
            <ScrollView
              ref={scrollRef}
              style={s.messages}
              contentContainerStyle={{ padding: 12, gap: 10 }}
              showsVerticalScrollIndicator={false}
            >
              {messages.map((m) => (
                <View
                  key={m.id}
                  style={[s.bubble, m.isBot ? s.botBubble : s.userBubble]}
                >
                  {m.isBot && (
                    <View style={s.botAvatar}>
                      <Text style={s.botAvatarTxt}>মু</Text>
                    </View>
                  )}
                  <View style={[s.bubbleBox, m.isBot ? s.botBox : s.userBox]}>
                    <Text style={[s.bubbleTxt, m.isBot ? s.botTxt : s.userTxt]}>
                      {m.text}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Disclaimer */}
            <Text style={s.disclaimer}>
              {lang === "bn"
                ? "এটি AI পরামর্শ। আইনি সিদ্ধান্তের জন্য যাচাইকৃত আইনজীবীর সাথে কথা বলুন।"
                : "This is AI guidance only. Consult a verified lawyer for legal decisions."}
            </Text>

            {/* Input */}
            <View style={s.inputRow}>
              <TextInput
                style={s.input}
                value={input}
                onChangeText={setInput}
                placeholder={
                  lang === "bn"
                    ? "আপনার আইনি প্রশ্ন লিখুন…"
                    : "Type your legal question…"
                }
                placeholderTextColor={Colors.textSubtle}
                onSubmitEditing={send}
                returnKeyType="send"
              />
              <TouchableOpacity style={s.sendBtn} onPress={send}>
                <Ionicons name="send" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

const s = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 18,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    ...Shadow.lg,
    zIndex: 999,
  },
  fabTxt: { color: "#fff", fontSize: 18, fontWeight: "800" },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  panel: {
    marginHorizontal: 10,
    backgroundColor: Colors.cardBackground,
    borderRadius: Radius.xl,
    overflow: "hidden",
    maxHeight: 480,
    ...Shadow.lg,
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10, flex: 1 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTxt: { color: "#fff", fontWeight: "800", fontSize: 14 },
  headerTitle: { color: "#fff", fontWeight: "700", fontSize: 14 },
  headerSub: { color: "rgba(255,255,255,0.7)", fontSize: 11 },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 12 },
  langBtn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.pill,
  },
  langTxt: { color: "#fff", fontWeight: "700", fontSize: 12 },
  messages: { flex: 1 },
  bubble: { flexDirection: "row", gap: 8 },
  botBubble: { alignItems: "flex-start" },
  userBubble: { justifyContent: "flex-end" },
  botAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 2,
  },
  botAvatarTxt: { color: "#fff", fontWeight: "700", fontSize: 11 },
  bubbleBox: { maxWidth: "80%", borderRadius: 14, padding: 10 },
  botBox: { backgroundColor: Colors.sunken, borderTopLeftRadius: 4 },
  userBox: { backgroundColor: Colors.primary, borderTopRightRadius: 4 },
  bubbleTxt: { fontSize: 14, lineHeight: 20 },
  botTxt: { color: Colors.textBody },
  userTxt: { color: "#fff" },
  disclaimer: {
    fontSize: 10.5,
    color: Colors.textSubtle,
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: Colors.sunken,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
  },
  input: {
    flex: 1,
    height: 42,
    backgroundColor: Colors.sunken,
    borderRadius: Radius.pill,
    paddingHorizontal: 16,
    fontSize: 14,
    color: Colors.textStrong,
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
