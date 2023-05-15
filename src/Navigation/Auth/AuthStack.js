import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../../Screens/authentication/GetStarted';
import Login from '../../Screens/authentication/Login';
import Verification from '../../Screens/authentication/Verification';
import Signup from '../../Screens/authentication/Signup';
import EmailVerify from '../../Screens/authentication/EmailVerify';
import CreatePassword from '../../Screens/authentication/CreatePassword';
import AdditionalInfo from '../../Screens/authentication/AdditionalInfo';
import ForgetPassword from '../../Screens/authentication/ForgetPassword';

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'GetStarted'} component={GetStarted} />
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'ForgetPassword'} component={ForgetPassword} />
      <AuthStack.Screen name={'Verification'} component={Verification} />
      <AuthStack.Screen name={'Signup'} component={Signup} />
      <AuthStack.Screen name={'CreatePassword'} component={CreatePassword} />
      <AuthStack.Screen name={'EmailVerify'} component={EmailVerify} />
      <AuthStack.Screen name={'AdditionalInfo'} component={AdditionalInfo} />
    </AuthStack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
