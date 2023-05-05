import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../Config/Colors';

const Textinput = props => {
  return (
    <View>
      <TextInput
        style={props?.style}
        keyboardType={props.keyboardType}
        numberOfLines={props?.numberOfLines}
        maxLength={props.maxLength}
        placeholderTextColor={'#B1B1B1'}
        placeholder={props?.placeholder}
        value={props?.value}
        onChangeText={props?.onChangeText}
        {...props}
      />
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
 
});
