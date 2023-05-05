import {StyleSheet, Text, View, Modal, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {hideAlert} from '../Store/Actions/GeneralActions';
import {Snackbar} from 'react-native-paper';
import {Colors} from '../Config/Colors';
import {Fold, Grid} from 'react-native-animated-spinkit';
import {useDispatch, useSelector} from 'react-redux';
import AuthStack from './Auth/AuthStack';
import AppStack from './App/AppStack';

import {Logout, login, userData} from '../Store/Actions/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionTypes from '../Store/Actions/ActionTypes';

const AppNavigation = () => {
  const loading = useSelector(state => state.GeneralReducer.loading);
  const showAlert = useSelector(state => state.GeneralReducer.showAlert);
  const alert = useSelector(state => state.GeneralReducer.alertOptions);
  const dispatch = useDispatch();
  const islogin = useSelector(state => state.AuthReducer.isLogin);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {islogin == undefined ? null : islogin ? <AppStack /> : <AuthStack />}

      <Modal visible={loading} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Grid size={48} color={Colors.White} />
          <Text style={{color: '#fff', margin: 15}}>Loading please wait..</Text>
        </View>
      </Modal>

      <Snackbar
        onDismiss={() => dispatch(hideAlert())}
        duration={4000}
        style={{backgroundColor: Colors.Dark_Blue}}
        visible={showAlert}>
        {alert?.message}
      </Snackbar>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
