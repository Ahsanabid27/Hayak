import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';
import {Button, InputText, TextComponent} from '../../Components';
import {Colors} from '../../Config/Colors';
import {Verify, user} from '../../Components/Assets';
import Entypo from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown';

const AdditionalInfo = () => {
  const array = ['asda', 'asd'];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
      }}>
      <RadialGradient
        style={{
          width: '100%',
          height: 500,
          opacity: 0.5,
          position: 'absolute',
          zIndex: -1,
          top: -10,
        }}
        colors={['#3D9FD7', '#3D9FD72B', '#3D9FD700', '#3D9FD700']}
        stops={[0.1]}
        center={[320, 100]}
        radius={580}
      />
      <Image
        source={user}
        style={{width: 55, height: 62, alignSelf: 'center'}}
        resizeMode={'stretch'}
      />
      <TextComponent text={'Additional Information'} style={styles.title} />
      <TextComponent
        text={
          'To Complete your investing account please fill the information below'
        }
        style={styles.des}
      />
      <View style={{paddingHorizontal: 31, marginTop: 40}}>
        <SelectDropdown
          dropdownIconPosition={'left'}
          buttonStyle={[
            styles.inputx,
            {
              borderColor: Colors.Dark_Blue,
            },
          ]}
          buttonTextStyle={{
            color: Colors.Placeholder,
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 800,
          }}
          defaultButtonText={'The amount you intend to invest'}
          // Placeholder={'The amount you intend to invest'}
          data={array}
          selectedRowTextStyle={{color: Colors?.Blue}}
          // onSelect={(selectedItem, index) => {
          //   setcity(selectedItem);
          // }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return (
              <Text style={{color: Colors?.Blue, justifyContent: 'flex-start'}}>
                {selectedItem}
              </Text>
            );
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Entypo
                name={'chevron-small-down'}
                size={24}
                color={Colors.Dark_Blue}
              />
            );
          }}
        />
        <SelectDropdown
          dropdownIconPosition={'left'}
          buttonStyle={[
            styles.inputx,
            {
              borderColor: Colors.Dark_Blue,
            },
          ]}
          buttonTextStyle={{
            color: Colors.Placeholder,
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 800,
          }}
          defaultButtonText={'Work Status'}
          // Placeholder={'The amount you intend to invest'}
          data={array}
          selectedRowTextStyle={{color: Colors?.Blue}}
          // onSelect={(selectedItem, index) => {
          //   setcity(selectedItem);
          // }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return (
              <Text style={{color: Colors?.Blue, justifyContent: 'flex-start'}}>
                {selectedItem}
              </Text>
            );
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Entypo
                name={'chevron-small-down'}
                size={24}
                color={Colors.Dark_Blue}
              />
            );
          }}
        />
        <SelectDropdown
          dropdownIconPosition={'left'}
          buttonStyle={[
            styles.inputx,
            {
              borderColor: Colors.Dark_Blue,
            },
          ]}
          buttonTextStyle={{
            color: Colors.Placeholder,
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 800,
          }}
          defaultButtonText={'Wealth Source'}
          // Placeholder={'The amount you intend to invest'}
          data={array}
          selectedRowTextStyle={{color: Colors?.Blue}}
          // onSelect={(selectedItem, index) => {
          //   setcity(selectedItem);
          // }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return (
              <Text style={{color: Colors?.Blue, justifyContent: 'flex-start'}}>
                {selectedItem}
              </Text>
            );
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Entypo
                name={'chevron-small-down'}
                size={24}
                color={Colors.Dark_Blue}
              />
            );
          }}
        />
        <Button
          text={'Complete Registration'}
          styles={{backgroundColor: Colors.Dark_Blue, marginTop: 10}}
          // onPress={() => navigation.navigate('Verification')}
        />
      </View>
      <RadialGradient
        style={{
          width: '100%',
          height: 500,
          opacity: 0.2,
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
        }}
        colors={['#6B057D', '#D73DD72B', '#3D9FD700']}
        stops={[0.1]}
        center={[100, 390]}
        radius={400}
      />
    </View>
  );
};

export default AdditionalInfo;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SST-Arabic-Roman',
    fontSize: 20,
    color: Colors.Dark_Blue,
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 800,
  },
  des: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'DIN-Next-LT-W23-Bold',
    color: Colors.black,
  },
  resent: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'DIN-Next-LT-W23-Bold',
    color: Colors.light_blue,
  },
  inputx: {
    color: Colors.BLACK,
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: Colors.Light_gray,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: Colors.Placeholder,
    marginTop: 10,
  },
});
