import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Typography, Color } from '../styles';

const RecipeBox = ({ onPress, image, title }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.boxImage}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    padding: 5
  },
  boxImage: {
    borderRadius: 15,
    height: 120,
    width: 100,
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '120%',
    height: '120%'
  },
  textView: {
    padding: 5,
    flex: 1
  },
  text: {
    fontFamily: Typography.boldBaloo,
    fontSize: 16,
    color: Color.darkGreen
  }
});

export default RecipeBox;
