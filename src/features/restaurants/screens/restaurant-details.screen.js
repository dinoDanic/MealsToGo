import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import SafeArea from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/retaurant-info-card.component";

const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [brakefastExpand, setBrakefastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinksExpand, setDrinksExpand] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfest"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={brakefastExpand}
          onPress={() => setBrakefastExpand(!brakefastExpand)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={lunchExpand}
          onPress={() => setLunchExpand(!lunchExpand)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={dinnerExpand}
          onPress={() => setDinnerExpand(!dinnerExpand)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={drinksExpand}
          onPress={() => setDrinksExpand(!drinksExpand)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailsScreen;
