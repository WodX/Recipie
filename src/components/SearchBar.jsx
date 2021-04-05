import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Color, Typography, Spacing } from '../styles';

const SearchBar = ({ onPress, onChangeText }) => {
  return (
    <View style={styles.searchBox}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor={Color.lightGrey}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <AntDesign
          name="search1"
          size={20}
          color="white"
          style={{ alignSelf: 'center' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    borderTopRightRadius: 15,
    marginHorizontal: Spacing.globalMargin
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: Typography.lightRoboto
  },
  searchButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.mediumGreen,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    maxWidth: 50
  }
});

export default SearchBar;
