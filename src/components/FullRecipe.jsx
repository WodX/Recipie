import React from "react";
import { WebView } from "react-native-webview";
import { View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Color } from "../styles";

const FullRecipe = ({ url, close }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Color.darkGrey} />
      <WebView source={{ uri: url }} />
      <Button title="Close" onPress={() => close((data) => !data)} />
    </View>
  );
};

export default FullRecipe;
