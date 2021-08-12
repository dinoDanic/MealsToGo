import React from "react";
import styled from "styled-components/native";

import { Card } from "react-native-paper";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some resturant",
    icon,
    photos = [
      "https://www.diana-food.com/fileadmin/diana_food/5_Landing_pages/Culinary_Creations/Diana_Food_Culinary_Creations_3col_424x424.jpg",
    ],
    address = "some street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const Title = styled.Text`
  padding: 16px;
`;

export default RestaurantInfoCard;
