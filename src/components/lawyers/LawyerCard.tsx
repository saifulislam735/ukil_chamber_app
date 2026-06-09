// @ds-adherence-ignore -- React Native scaffold; not a web component
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Radius, Shadow, Spacing } from '@/theme';
import type { Lawyer } from '@/data/mockData';

interface Props {
  lawyer: Lawyer;
  onPress: () => void;
}

export default function RnLawyerCard({ lawyer, onPress }: Props) {
  const initials = lawyer.name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <TouchableOpacity style={s.card} onPress={onPress} activeOpacity={0.85}>
      {/* Avatar */}
      <View style={s.avatar}><Text style={s.initials}>{initials}</Text></View>

      {/* Body */}
      <View style={s.body}>
        <View style={s.topRow}>
          <Text style={s.name} numberOfLines={1}>{lawyer.name}</Text>
          {lawyer.available && (
            <View style={s.badge}>
              <View style={s.dot} />
              <Text style={s.badgeTxt}>Available</Text>
            </View>
          )}
        </View>
        <Text style={s.spec}>{lawyer.specialization}</Text>
        <View style={s.metaRow}>
          <Ionicons name="star" size={13} color={Colors.accent} />
          <Text style={s.meta}>{lawyer.rating} ({lawyer.reviewCount})</Text>
          <Ionicons name="location-outline" size={13} color={Colors.textMuted} />
          <Text style={s.meta}>{lawyer.location}</Text>
        </View>
      </View>

      {/* Fee */}
      <View style={s.fee}>
        <Text style={s.feeAmt}>৳{lawyer.consultationFee}</Text>
        <Text style={s.feeLbl}>per session</Text>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card:    { flexDirection: 'row', gap: 12, backgroundColor: Colors.cardBackground, borderRadius: Radius.lg, padding: Spacing.card, borderWidth: 1, borderColor: Colors.borderSubtle, alignItems: 'flex-start', ...Shadow.sm },
  avatar:  { width: 52, height: 52, borderRadius: 26, backgroundColor: Colors.primarySoft, borderWidth: 1.5, borderColor: '#AEC9E2', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  initials:{ fontSize: 17, fontWeight: '700', color: Colors.primary },
  body:    { flex: 1, gap: 2, minWidth: 0 },
  topRow:  { flexDirection: 'row', alignItems: 'center', gap: 6 },
  name:    { flex: 1, fontSize: 15, fontWeight: '700', color: Colors.textStrong },
  badge:   { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.pill, backgroundColor: Colors.successSoft },
  dot:     { width: 5, height: 5, borderRadius: 3, backgroundColor: Colors.success },
  badgeTxt:{ fontSize: 11, fontWeight: '600', color: Colors.successText },
  spec:    { fontSize: 13, color: Colors.primary, fontWeight: '500' },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  meta:    { fontSize: 12, color: Colors.textMuted, marginRight: 6 },
  fee:     { alignItems: 'flex-end', flexShrink: 0 },
  feeAmt:  { fontSize: 15, fontWeight: '800', color: Colors.textStrong },
  feeLbl:  { fontSize: 10.5, color: Colors.textSubtle },
});
