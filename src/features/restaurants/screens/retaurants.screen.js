import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restarurants/restaurants.context";

import RestaurantInfoCard from "../components/retaurant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";

const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatContainer
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const FlatContainer = styled(FlatList)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0;
`;

export default RestaurantsScreen;
