import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from '../BottomTabs/BottomTabs';

const AppStack = () => {
  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{headerShown: false}}>
      <AppStack.Screen name="BottomTabs" component={BottomTabs} />
    </AppStack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
