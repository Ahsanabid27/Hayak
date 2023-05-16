import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from '../BottomTabs/BottomTabs';
import Transactions from '../../Screens/wallet/Transactions';
import Favourites from '../../Screens/home/Favourites';
import Notifications from '../../Screens/notification/Notifications';

const AppStack = () => {
  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{headerShown: false}}>
      <AppStack.Screen name="BottomTabs" component={BottomTabs} />
      <AppStack.Screen name="Favourites" component={Favourites} />
      <AppStack.Screen name="Notifications" component={Notifications} />
      <AppStack.Screen name="Transactions" component={Transactions} />

    </AppStack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
