// @ds-adherence-ignore -- React Native scaffold; not a web component
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/theme';
import type { TabParamList } from './types';

// Screens
import HomeScreen from '@/screens/home/HomeScreen';
import LawyersScreen from '@/screens/lawyers/LawyersScreen';
import BlogScreen from '@/screens/blog/BlogScreen';
import AccountScreen from '@/screens/account/AccountScreen';

const Tab = createBottomTabNavigator<TabParamList>();

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const TAB_ICONS: Record<keyof TabParamList, { active: IoniconName; inactive: IoniconName }> = {
  Home:    { active: 'home',        inactive: 'home-outline' },
  Lawyers: { active: 'scale',       inactive: 'scale-outline' },
  Blog:    { active: 'newspaper',   inactive: 'newspaper-outline' },
  Account: { active: 'person',      inactive: 'person-outline' },
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          height: 64,
          paddingBottom: 10,
          paddingTop: 6,
          borderTopColor: Colors.borderSubtle,
          backgroundColor: Colors.cardBackground,
        },
        tabBarLabelStyle: {
          fontSize: 10.5,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons = TAB_ICONS[route.name as keyof TabParamList];
          const name = focused ? icons.active : icons.inactive;
          return <Ionicons name={name} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home"    component={HomeScreen}    options={{ title: 'Home' }} />
      <Tab.Screen name="Lawyers" component={LawyersScreen} options={{ title: 'Lawyers' }} />
      <Tab.Screen name="Blog"    component={BlogScreen}    options={{ title: 'Blog' }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }} />
    </Tab.Navigator>
  );
}
