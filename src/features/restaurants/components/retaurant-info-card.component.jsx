import React from "react";
import { SvgXml } from "react-native-svg";

import Spacer from "../../../components/spacer/spacer.component";

import star from "../../../assets/star";
import open from "../../../assets/open";
import Text from "../../../components/typography/text.component";

import {
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Section,
  Rating,
  SeactionEnd,
} from "./restaurnat-info-card-styles";

const RestaurantInfoCard = ({ restaurant = {} }, props) => {
  const {
    name = "Some Resturant",
    icon = "https://icon-library.com/images/icon-sleep/icon-sleep-27.jpg",
    photos = [
      "https://www.diana-food.com/fileadmin/diana_food/5_Landing_pages/Culinary_Creations/Diana_Food_Culinary_Creations_3col_424x424.jpg",
    ],
    address = restaurant.vicinity,
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                xml={star}
                key={`start-${placeId}-${i}`}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SeactionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer size="large" position="left" />
            {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
            <Spacer size="large" position="left" />
            <Icon source={{ uri: icon }} />
          </SeactionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
