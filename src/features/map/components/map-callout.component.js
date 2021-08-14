import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component";

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

export default MapCallout;
