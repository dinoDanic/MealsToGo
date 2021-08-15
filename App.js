import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { ThemeProvider } from "styled-components/native";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { theme } from "./src/insfrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restarurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import Navigation from "./src/insfrastructure/navigation";

// eslint-disable-next-line no-unused-vars
const isAndroid = Platform.OS === "android";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
