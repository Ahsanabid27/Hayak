import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../Config/Colors';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Home from '../../Screens/home/Home';

const BottomTabs = () => {
  const BottomTab = createBottomTabNavigator();

  const user = useSelector(state => state.AuthReducer.user);

  const {t, i18n} = useTranslation();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.Dark_Blue,
        tabBarInactiveTintColor: Colors.Blue,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: Colors.bottomTabColor,
          height: 60,
          // borderTopColor: '#ccc',
          // borderTopWidth: 0.2,
          padding: 5,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: t('Home'),
          // tabBarIcon: ({color, size}) => (
          //   <Image
          //     source={color == Colors.Dark_Blue ? homeActive : home}
          //     r
          //     style={{
          //       tintColor: color == Colors.Dark_Blue ? color : null,
          //       width: 25,
          //       height: 25,
          //     }}
          //     resizeMode={'contain'}
          //   />
          // ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
