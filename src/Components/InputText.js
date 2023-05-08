import {
  StyleSheet,
  Text,
  View,
  TextInput,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../Config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from './TextComponent';
const InputText = props => {
  return props?.sidebar ? (
    <View
      style={[
        styles.inputContainer,
        {
          flexDirection: 'row',
          paddingHorizontal: 5,
        },
      ]}>
      <View
        style={{
          justifyContent: 'center',
          borderBottomLeftRadius: 9,
          borderTopLeftRadius: 9,
        }}>
        <AntDesign name={props.iconname} color={props.iconColor} size={24} />
      </View>
      <View
        style={{
          width: '85%',
          // flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
          backgroundColor: Colors.White,
          opacity: 0.7,
        }}>
        <TextInput
          style={[styles.input, {...props?.style}]}
          placeholderTextColor={
            props?.placeholderColor
              ? props?.placeholderColor
              : Colors.Placeholder
          }
          textAlign={'center'}
          value={props?.value}
          onChangeText={props?.onChangeText}
          {...props}
        />
      </View>
    </View>
  ) : (
    <>
      <View
        style={[
          styles.inputContainer,
          {
            ...props.containterStyle,
          },
        ]}>
        <TextInput
          style={[styles.input, {...props?.style}]}
          placeholderTextColor={Colors.Placeholder}
          // textAlign={I18nManager.isRTL ? 'right' : 'left'}
          {...props}
        />
      </View>
      {props.error ? (
        <TextComponent
          text={props.errorMessage}
          style={[styles.text, {color: '#FF0000'}]}
        />
      ) : null}
    </>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#05357D',
    backgroundColor: Colors.White,
    opacity: 0.7,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    height: 45,
  },
  text: {
    color: Colors.Light_gray,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  input: {
    color: '#000',
    minHeight: 45,
    fontSize: 15,
    fontFamily: 'RB-Regular',
  },
});
