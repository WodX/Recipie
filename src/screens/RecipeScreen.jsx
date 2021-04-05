import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal
} from 'react-native';
import { Typography, Color } from '../styles';
import { TabView, TabBar } from 'react-native-tab-view';
import Ingredients from '../components/Ingredients';
import Preparation from '../components/Preparation';
import Nutrition from '../components/Nutrition';
import FullRecipe from '../components/FullRecipe';

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color: Color.mediumGrey,
            fontFamily: Typography.semiBoldBaloo,
            fontSize: 16
          }}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: Color.lightGreen,
        height: 5
      }}
      style={{
        backgroundColor: 'white'
      }}
    />
  );
};

const ReceipeScreen = ({ route: { params: params } }) => {
  const [index, setIndex] = useState(0);
  const [modalVisible, setmodalVisible] = useState(false);
  const [routes] = useState([
    { key: 'first', title: 'Ingredients' },
    { key: 'second', title: 'Nutrition' },
    { key: 'third', title: 'Preparation' }
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Ingredients ingredients={params.ingredients} />;
      case 'second':
        return <Nutrition />;
      case 'third':
        return <Preparation params={'dsadsadsa'} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <FullRecipe url={params.url} close={setmodalVisible} />
      </Modal>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: params.image
            }}
          >
            <View style={styles.filter}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => setmodalVisible((data) => !data)}
              >
                <Text style={styles.buttonText}>View Full Repice</Text>
              </TouchableOpacity>
            </View>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageView: {
    maxHeight: 250
  },
  image: {
    width: '100%',
    height: '100%'
  },
  filter: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -50,
    backgroundColor: 'white',
    padding: 15
  },
  title: {
    fontFamily: Typography.semiBoldBaloo,
    fontSize: 20
  },
  scene: {
    flex: 1
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Color.lightGreen,
    opacity: 0.8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: -20
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: Typography.boldRoboto,
    color: 'white',
    fontSize: 16
  }
});

export default ReceipeScreen;
