// @ds-adherence-ignore -- React Native scaffold; not a web component
import { Colors } from "@/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import type { RootStackParamList } from "./types";

import TabNavigator from "./TabNavigator";
import LawyerProfileScreen from "@/screens/lawyers/LawyerProfileScreen";
import BlogArticleScreen from "@/screens/blog/BlogArticleScreen";
import LoginScreen from "@/screens/auth/LoginScreen";
import BookingScreen from "@/screens/booking/BookingScreen";
import BookingSuccessScreen from "@/screens/booking/BookingSuccessScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.appBackground },
          animation: "slide_from_right",
        }}
      >
        {/* Tab screens — the main shell */}
        <Stack.Screen name="Main" component={TabNavigator} />

        {/* Detail / overlay screens */}
        <Stack.Screen name="LawyerProfile" component={LawyerProfileScreen} />
        <Stack.Screen name="BlogArticle" component={BlogArticleScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animation: "slide_from_bottom", presentation: "modal" }}
        />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
