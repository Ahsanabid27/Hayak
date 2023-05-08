import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {Colors} from '../Config/Colors';

const Button = props => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor:
            props?.theme == 'White' ? Colors.White : Colors.light_blue,
          ...props?.styles,
        },
      ]}
      {...props}>
      {props.icon ? (
        {...props.icon}
      ) : (
        <TextComponent
          style={[
            styles.text,
            {
              color: props?.theme == 'White' ? Colors.Dark_Blue : Colors.White,
              ...props.textStyle,
            },
          ]}
          text={props?.text}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.light_blue,
    borderRadius: 10,
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  text: {
    fontFamily: 'RB-Regular',
    fontSize: 18,
    color: Colors.White,
    fontWeight: 800,
  },
});
