// @ds-adherence-ignore -- React Native scaffold; not a web component
import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors, Spacing, Radius, Shadow } from '@/theme';
import { lawyers, specializations } from '@/data/mockData';
import type { RootStackParamList } from '@/navigation/types';
import LawyerCard from '@/components/lawyers/LawyerCard';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function LawyersScreen() {
  const nav = useNavigation<Nav>();
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = lawyers.filter(l =>
    (cat === 'All' || l.specialization.includes(cat)) &&
    (query === '' || `${l.name} ${l.specialization}`.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      {/* Search bar */}
      <View style={s.searchWrap}>
        <View style={s.search}>
          <Ionicons name="search-outline" size={19} color={Colors.textMuted} />
          <TextInput
            style={s.searchInput}
            placeholder="Name or practice area…"
            placeholderTextColor={Colors.textSubtle}
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Ionicons name="close-circle" size={18} color={Colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category chips */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={specializations}
        keyExtractor={i => i}
        contentContainerStyle={s.chips}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[s.chip, cat === item && s.chipOn]}
            onPress={() => setCat(item)}
          >
            <Text style={[s.chipTxt, cat === item && s.chipTxtOn]}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Count */}
      <Text style={s.count}><Text style={s.countN}>{filtered.length}</Text> lawyers</Text>

      {/* List */}
      <FlatList
        data={filtered}
        keyExtractor={l => String(l.id)}
        contentContainerStyle={s.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={s.empty}>
            <Ionicons name="search" size={32} color={Colors.textSubtle} />
            <Text style={s.emptyTxt}>No lawyers found</Text>
          </View>
        }
        renderItem={({ item }) => (
          <LawyerCard
            lawyer={item}
            onPress={() => nav.navigate('LawyerProfile', { lawyerId: item.id })}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:        { flex: 1, backgroundColor: Colors.appBackground },
  searchWrap:  { paddingHorizontal: Spacing.gutter, paddingVertical: 10, backgroundColor: Colors.cardBackground, borderBottomWidth: 1, borderBottomColor: Colors.borderSubtle },
  search:      { flexDirection: 'row', alignItems: 'center', gap: 10, height: 46, paddingHorizontal: 14, backgroundColor: Colors.sunken, borderRadius: Radius.md, borderWidth: 1, borderColor: Colors.borderDefault },
  searchInput: { flex: 1, fontSize: 14.5, color: Colors.textStrong },
  chips:       { paddingHorizontal: Spacing.gutter, paddingVertical: 12, gap: 8 },
  chip:        { paddingHorizontal: 14, paddingVertical: 9, borderRadius: Radius.pill, borderWidth: 1.5, borderColor: Colors.borderDefault, backgroundColor: Colors.cardBackground },
  chipOn:      { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipTxt:     { fontSize: 13, fontWeight: '600', color: Colors.textBody },
  chipTxtOn:   { color: '#fff' },
  count:       { paddingHorizontal: Spacing.gutter, paddingBottom: 6, fontSize: 12.5, color: Colors.textMuted },
  countN:      { fontWeight: '700', color: Colors.textStrong },
  list:        { paddingHorizontal: Spacing.gutter, paddingBottom: 32 },
  empty:       { alignItems: 'center', paddingTop: 60, gap: 12 },
  emptyTxt:    { fontSize: 14, color: Colors.textMuted },
});
