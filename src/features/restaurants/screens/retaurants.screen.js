import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restarurants/restaurants.context";

import RestaurantInfoCard from "../components/retaurant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
import Loading from "../../../components/loading/loading.component";
import Search from "../components/search.component";
import FavoriteBar from "../../../components/favorites/favorite-bar.component";

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Loading isLoading={isLoading} />
      <Search
        isFavaoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavoriteBar />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const RestaurantList = styled(FlatList)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0;
`;

export default RestaurantsScreen;
