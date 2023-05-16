import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../Config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import TextComponent from './TextComponent';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {props?.leftIcon ? (
        <TouchableOpacity
          style={{width: 25, height: 25}}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name={'chevron-back'}
            size={24}
            color={props?.blue ? Colors.light_blue : Colors.White}
          />
        </TouchableOpacity>
      ) : (
        <View style={{width: 24}} />
      )}
      <TextComponent text={props?.title} style={styles.heading} />
      <View>
        {props?.rightIcon ? (
          <TouchableOpacity onPress={props?.onPressRightIcon}>
            {props?.IconRight}
          </TouchableOpacity>
        ) : (
          <View style={{width: 24}} />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    alignItems: 'center',
  },

  heading: {
    color: Colors.Blue,
    fontSize: 20,
    fontWeight: '700',
  },
});
