import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Appearance, Vibration } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LiveScreen from './src/pages/Live';
import LeaderboardScreen from './src/pages/Leaderboard';
import UpcomingScreen from './src/pages/Upcoming';
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

const tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  const MyTheme = {
    colors: {
      background: 'red'
    },
  };
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <tab.Navigator
        initialRouteName="Live"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == 'Live') {
              iconName = 'pulse-outline'
            } else if (route.name == 'Leaderboard') {
              iconName = 'medal-outline'
            } else if (route.name == 'Upcoming matches') {
              iconName = 'time-outline'
            }
            return <Ionicons name={iconName} size={28} color={'#3791F3'} />
          }
        })}>
        <tab.Screen name='Live' component={LiveScreen} />
        <tab.Screen name='Upcoming matches' component={UpcomingScreen} />
        <tab.Screen name='Leaderboard' component={LeaderboardScreen} />
      </tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  containerLive: {
    backgroundColor: "#519aec",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    color: '#FFFFFF'
  },
  square: {
    backgroundColor: "#eca351",
    width: 150,
    height: 50,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    color: '#FFFFFF'
  },
  bandeau: {
    backgroundColor: "#eca351",
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    height: 120,
    textAlign: 'center'
  },
  teext: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center'
  },
  left: {
    color: '#FF0000',
  },
  right: {
    color: '#0000FF',
  },
  player: {
    fontSize: 13.5,
  },
  linePlayers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
  },
  bandeau2: {
    backgroundColor: "#eca351",
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    height: 120,
    width: 360,
    textAlign: 'center'
  }
});