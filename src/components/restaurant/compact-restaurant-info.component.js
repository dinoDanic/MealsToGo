import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import Text from "../typography/text.component";
import WebView from "react-native-webview";

const isAndroid = Platform.OS === "android";
const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export default CompactRestaurantInfo;
