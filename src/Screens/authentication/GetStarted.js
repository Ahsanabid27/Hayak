import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {background, logo} from '../../Components/Assets';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Config/Colors';
import {Button, TextComponent} from '../../Components';
import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{flex: 1}}
      source={background}
      resizeMode={'stretch'}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{width: 30, height: 30}}
          onPress={() => console.log('first')}>
          <Fontisto name={'world-o'} size={24} color={Colors.White} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.4, justifyContent: 'center'}}>
        <Image
          source={logo}
          style={{height: 150, width: 150, alignSelf: 'center'}}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={{
          flex: 0.58,
          marginHorizontal: 32,
          justifyContent: 'flex-end',
          paddingBottom: 30,
        }}>
        <Button
          text={'Get Started'}
          theme={'Blue'}
          onPress={() => navigation.navigate('Signup')}
        />
        <Button
          text={'Login'}
          theme={'White'}
          onPress={() => navigation.navigate('Login')}
        />
        <TextComponent
          text={'Regulated by the Capital Market Authority'}
          style={styles.des}
        />

        <View style={styles.footer}>
          <TextComponent
            text={'Explore Properties'}
            style={[styles.des, {fontFamily: 'RB-Light'}]}
          />
          <TouchableOpacity style={styles.how}>
            <TextComponent
              text={'How it works?'}
              style={[
                styles.des,
                {
                  fontFamily: 'RB-Light',
                  color: Colors.black,
                  marginTop: 0,
                  marginRight: 5,
                },
              ]}
            />
            <AntDesign name={'play'} size={14} color={Colors.Green} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  des: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'DIN-Next-LT-W23-Bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20%',
  },
  how: {
    backgroundColor: Colors.White,
    padding: 5,
    paddingHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
});
