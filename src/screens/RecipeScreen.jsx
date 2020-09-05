import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { Typography, Color } from "../styles";
import { TabView, TabBar } from "react-native-tab-view";
import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import Nutrition from "../components/Nutrition";

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color: Color.mediumGrey,
            margin: 8,
            fontFamily: Typography.semiBoldBaloo,
          }}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: Color.lightGreen,
        height: 5,
      }}
      contentContainerStyle={{
        borderWidth: 2,
        borderColor: "red",
      }}
      style={{
        backgroundColor: "white",
      }}
    />
  );
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const ReceipeScreen = ({ route: { params: params } }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Ingredients" },
    { key: "second", title: "Nutrition" },
    { key: "third", title: "Preparation" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <Ingredients ingredients={params.ingredients} />;
      case "second":
        return <Nutrition />;
      case "third":
        return <Preparation params={"dsadsadsa"} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: params.image,
          }}
        >
          <View style={styles.filter}></View>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{params.label}</Text>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageView: {
    maxHeight: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  filter: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  content: {
    display: "flex",
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -50,
    backgroundColor: "white",
    padding: 15,
  },
  title: {
    fontFamily: Typography.semiBoldBaloo,
    fontSize: 20,
  },
  scene: {
    flex: 1,
  },
});

export default ReceipeScreen;
