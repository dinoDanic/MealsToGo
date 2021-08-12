import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme";

import RestaurantsScreen from "./src/features/restaurants/screens/retaurants.screen";

// eslint-disable-next-line no-unused-vars
const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
