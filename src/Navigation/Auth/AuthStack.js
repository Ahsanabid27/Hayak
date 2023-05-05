import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../../Screens/authentication/GetStarted';

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'GetStarted'} component={GetStarted} />
    </AuthStack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
