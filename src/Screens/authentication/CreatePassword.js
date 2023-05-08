import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';
import {Button, InputText, TextComponent} from '../../Components';
import {Colors} from '../../Config/Colors';
import {password} from '../../Components/Assets';
import {useNavigation} from '@react-navigation/native';

const CreatePassword = () => {
  const navigation = useNavigation();

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
        source={password}
        style={{width: 50, height: 66, alignSelf: 'center'}}
        resizeMode={'stretch'}
      />
      <TextComponent text={'Create Password'} style={styles.title} />
      <TextComponent
        text={
          'We have verified your email address\nplease create password to complete your account'
        }
        style={styles.des}
      />
      <View style={{paddingHorizontal: 31, marginTop: 20}}>
        <InputText
          placeholderColor={Colors.Dark_Blue}
          secureTextEntry={true}
          // style={{fontSize: 16, color: Colors.Dark_Blue}}
          // maxLength={4}
          placeholder={'* * * * * * * *'}
          textAlign={'center'}
          onChangeText={val => console.log(val)}
        />
        <TextComponent
          text={
            'Passwords must be:\n  \u2B24  Not less than 8 digits\n  \u2B24  At least one number digit\n  \u2B24  One capital letter\n  \u2B24  One small letter'
          }
          style={styles.alert}
        />
        <Button
          text={'Create Account'}
          styles={{backgroundColor: Colors.Dark_Blue, marginTop: 15}}
          onPress={() => navigation.navigate('EmailVerify')}
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

export default CreatePassword;

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
  alert: {
    fontSize: 11,
    textAlign: 'left',
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'DIN-Next-LT-W23-Bold',
    color: Colors.black,
  },
});
