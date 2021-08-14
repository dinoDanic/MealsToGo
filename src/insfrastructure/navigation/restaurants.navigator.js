import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/retaurants.screen";
import RestaurantDetailsScreen from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.ModalPresentationIOS,
};

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={screenOptions}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
