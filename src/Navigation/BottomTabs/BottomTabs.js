import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../Config/Colors';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Home from '../../Screens/home/Home';
import {
  home,
  support,
  investment,
  account,
  wallet,
} from '../../Components/Assets';
import Account from '../../Screens/account/Account';
import Support from '../../Screens/support/Support';
import Investment from '../../Screens/investment/Investment';
import Wallet from '../../Screens/wallet/Wallet';

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
        tabBarActiveTintColor: Colors.light_blue,
        tabBarInactiveTintColor: Colors.White,
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarStyle: {
          backgroundColor: Colors.Dark_Blue,
          height: 63,
          padding: 10,
          marginHorizontal: 16,
          marginBottom: 14,
          borderRadius: 9,
          // Remove border top on both android & ios
          borderTopWidth: 0,
          borderTopColor: 'transparent',

          // elevation: 0,
          shadowOpacity: 0,
          // shadowOffset: {
          //   // height: 0,
          // },
          // shadowRadius: 0,
          position: 'absolute',
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: t('Home'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={home}
              style={{
                tintColor: color,
                width: 25,
                height: 25,
              }}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Investments"
        component={Investment}
        options={{
          tabBarLabel: t('Investments'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={investment}
              style={{
                tintColor: color,
                width: 25,
                height: 25,
              }}
              resizeMode={'contain'}
            />
          ),
        }}
      />
       <BottomTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: t('Wallet'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={wallet}
              style={{
                tintColor: color,
                width: 25,
                height: 25,
              }}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarLabel: t('Support'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={support}
              style={{
                tintColor: color,
                width: 25,
                height: 25,
              }}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Accounts"
        component={Account}
        options={{
          tabBarLabel: t('Accounts'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={account}
              style={{
                tintColor: color,
                width: 25,
                height: 25,
              }}
              resizeMode={'contain'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
