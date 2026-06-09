import { SafeAreaProvider } from "react-native-safe-area-context";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AppNavigator from "@/navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import MuhariChat from "@/components/chatbot/MuhariChat";

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <AppNavigator />
        <MuhariChat />
        <StatusBar style="auto" />
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
