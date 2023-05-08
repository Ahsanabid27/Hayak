import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';
import {Button, InputText, TextComponent} from '../../Components';
import {Colors} from '../../Config/Colors';
import {email} from '../../Components/Assets';
import { useNavigation } from '@react-navigation/native';

const EmailVerify = () => {
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
        source={email}
        style={{width: 75, height: 55, alignSelf: 'center'}}
        resizeMode={'stretch'}
      />
      <TextComponent text={'Verify Email Address'} style={styles.title} />
      <TextComponent
        text={'An Email sent to user@example.com'}
        style={styles.des}
      />
      <TextComponent
        text={
          'Please verify your email address by clicking on the link in your inbox'
        }
        style={styles.des}
      />
      <View style={{paddingHorizontal: 31, marginTop: 20}}>
        <Button
          text={'Open Your Email Address'}
          styles={{backgroundColor: Colors.Dark_Blue, marginTop: 10}}
          onPress={() => navigation.navigate('AdditionalInfo')}
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

export default EmailVerify;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SST-Arabic-Roman',
    fontSize: 20,
    color: Colors.Dark_Blue,
    textAlign: 'center',
    marginTop: 25,
    // marginRight: 20,
    fontWeight: 800,
  },
  des: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 5,
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
});
