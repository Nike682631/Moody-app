import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './App/screens/Home';
import Mood from './App/screens/Mood';
import MoodTags from './App/screens/MoodTags';
import MoodDetails from './App/screens/MoodDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mood" component={Mood} />
        <Stack.Screen name="MoodTags" component={MoodTags} />
        <Stack.Screen name="MoodDetails" component={MoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
