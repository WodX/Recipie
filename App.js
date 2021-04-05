import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import { AppLoading } from 'expo';
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_600SemiBold,
  Baloo2_700Bold
} from '@expo-google-fonts/baloo-2';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_300Light
} from '@expo-google-fonts/roboto';

const Stack = createStackNavigator();

const mainNavigationOptions = {
  headerShown: false
};

const recipeNavigationOptions = {
  headerTransparent: true,
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerTitle: ''
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={mainNavigationOptions}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={recipeNavigationOptions}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainStack />
    </NavigationContainer>
  );
}
