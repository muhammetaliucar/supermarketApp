import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardScreen from "./src/pages/OnBoardScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomBottomTabBar from "./src/components/CustomBottomTabBar";
import { MarketProvider } from "./src/contexts/MarketContext";

import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import PochettePage from "./src/pages/PochettePage";

export default function App() {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const Bottom = () => {
    return (
      <BottomTab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomBottomTabBar {...props} />}
      >
        <BottomTab.Screen name="HomePage" component={Home} />
        <BottomTab.Screen name="ProfilePage" component={Profile} />
      </BottomTab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MarketProvider>
        <StatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="Home" component={Bottom} />
          <Stack.Screen name="PochettePage" component={PochettePage} />
        </Stack.Navigator>
      </MarketProvider>
    </NavigationContainer>
  );
}
