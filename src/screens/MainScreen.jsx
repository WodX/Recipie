import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { search } from "../api/edamam";
import { Spacing, Color } from "../styles";
import SearchBar from "../components/SearchBar";
import RecipeBox from "../components/RecipeBox";

const MainScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(0);

  const filter = {
    from: 0,
    to: 30,
  };

  const searchFetch = async () => {
    const res = await search(value, filter);
    setData(res);
  };

  const scrollFetch = async () => {
    const res = await search(value, filter);

    setData((data) => {
      res.forEach((response) => {
        data.push(response);
      });
      return data;
    });
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     scrollFetch();
  //   }, 1000);
  // }, [page]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Color.darkGreen, "#676B55"]}
        style={styles.searchView}
      >
        <Text style={styles.logo}>Recipie</Text>
        <SearchBar
          onChangeText={(text) => setValue(text)}
          onPress={searchFetch}
        />
      </LinearGradient>
      <FlatList
        data={data}
        keyExtractor={(item) => "recipe-" + item.recipe.uri}
        onEndReached={() => {
          setPage((data) => data + 1);
        }}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <RecipeBox
            onPress={() => navigation.navigate("Recipe", item.recipe)}
            image={item.recipe.image}
            title={item.recipe.label}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  searchView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    height: 190,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  logo: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  scrollView: { paddingHorizontal: Spacing.globalPadding },
});

export default MainScreen;
