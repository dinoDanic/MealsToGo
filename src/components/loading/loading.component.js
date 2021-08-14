import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

const Loading = ({ isLoading = false }) => {
  return (
    <>
      {isLoading && (
        <Loader>
          <ActivityIndicator animating={true} size={30} color={Colors.red800} />
        </Loader>
      )}
    </>
  );
};

const Loader = styled.View`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

export default Loading;
