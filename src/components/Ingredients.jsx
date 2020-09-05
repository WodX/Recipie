import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Color, Typography, Spacing } from "../styles";

const Ingredients = ({ ingredients }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {ingredients.map((ingredient, index) => (
        <View style={[styles.content]} key={"ingredients-" + index}>
          <Image style={styles.image} source={{ uri: ingredient.image }} />
          <Text style={styles.text}>{ingredient.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "black",
    marginRight: 10,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    flex: 1,
  },
});

export default Ingredients;
