import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Color, Typography, Spacing } from "../styles";

const Nutrition = () => {
  return (
    <View style={[styles.scene]}>
      <Text>Nutrition</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default Nutrition;
