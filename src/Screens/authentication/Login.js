import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../Config/Colors';
import {Header, TextComponent, InputText, Button} from '../../Components';
import {name} from '../../Components/Assets';
import RadialGradient from 'react-native-radial-gradient';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header leftIcon={true} />
      <View style={{flex: 0.4, justifyContent: 'center'}}>
        <Image
          source={name}
          style={{width: 148, height: 70, alignSelf: 'center', marginLeft: 15}}
          resizeMode={'cover'}
        />
        <TextComponent text={'Welcome Back !'} style={styles.title} />
      </View>
      <View style={styles.bottom}>
        <RadialGradient
          style={{
            position: 'absolute',
            width: '100%',
            height: 400,
            opacity: 0.5,
            alignSelf: 'flex-end',
          }}
          colors={['#3D9FD7', '#3D9FD72B', '#3D9FD700', '#3D9FD700']}
          stops={[0.1]}
          center={[250, 100]}
          radius={200}
        />
        <RadialGradient
          style={{
            position: 'absolute',
            width: '100%',
            height: 400,
            opacity: 0.2,
          }}
          colors={['#6B057D', '#D73DD72B', '#3D9FD700']}
          stops={[0.1]}
          center={[90, 350]}
          radius={300}
        />

        <InputText
          placeholder={'Email Address'}
          textAlign={'center'}
          onChangeText={val => console.log(val)}
        />
        <InputText
          placeholder={'Password'}
          textAlign={'center'}
          onChangeText={val => console.log(val)}
        />
        <Button
          text={'Login'}
          styles={{backgroundColor: Colors.Dark_Blue, marginTop: 10}}
          onPress={() => navigation.navigate('Verification')}
        />
        <TouchableOpacity>
          <TextComponent text={'Forget Password ?'} style={styles.forgot} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TextComponent
            text={'By clicking Login you agree to Hayak’s '}
            style={styles.terms}
          />
          <TouchableOpacity>
            <TextComponent
              text={'Terms and Conditions'}
              style={[styles.terms, {color: Colors.light_blue}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Dark_Blue,
  },
  title: {
    fontFamily: 'RB-Regular',
    fontSize: 20,
    color: Colors.White,
    textAlign: 'center',
    marginTop: 15,
    marginRight: 20,
  },
  forgot: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'DIN-Next-LT-W23-Bold',
    color: Colors.light_blue,
  },
  terms: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'RB-Regular',
    color: Colors.black,
  },
  bottom: {
    flex: 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 31,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
});
