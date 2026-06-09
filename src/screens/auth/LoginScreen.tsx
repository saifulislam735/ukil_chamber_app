// @ds-adherence-ignore -- React Native scaffold; not a web component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing } from '@/theme';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.center}>
        <Text style={styles.emoji}>🔐</Text>
        <Text style={styles.title}>LoginScreen</Text>
        <Text style={styles.sub}>Coming soon — Phase 2+</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.appBackground },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: Spacing.gutter },
  emoji: { fontSize: 48, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '700', color: Colors.textStrong, marginBottom: 8 },
  sub: { fontSize: 14, color: Colors.textMuted },
});
