import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Config/Colors';
import {Header, TextComponent, InputText, Button} from '../../Components';
import {name} from '../../Components/Assets';
import RadialGradient from 'react-native-radial-gradient';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header leftIcon={true} />
      <View style={{flex: 0.3, justifyContent: 'center'}}>
        <Image
          source={name}
          style={{
            width: 148,
            height: 70,
            alignSelf: 'center',
            marginLeft: 15,
          }}
          resizeMode={'cover'}
        />
        <TextComponent text={'Join Us'} style={styles.title} />
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
          center={[250, 120]}
          radius={190}
        />
        <RadialGradient
          style={{
            position: 'absolute',
            width: '100%',
            height: 500,
            opacity: 0.2,
          }}
          colors={['#6B057D', '#D73DD72B', '#3D9FD700']}
          stops={[0.1]}
          center={[120, 380]}
          radius={350}
        />
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}>
          <TextComponent
            text={'Enter your name and details'}
            style={[styles.label, {marginTop: '20%'}]}
          />
          <TextComponent
            text={'We will sent you email to create your account'}
            style={styles.terms}
          />
          <InputText
            placeholder={'Your Full Name'}
            textAlign={'center'}
            onChangeText={val => console.log(val)}
          />
          <InputText
            placeholder={'Email Address'}
            textAlign={'center'}
            onChangeText={val => console.log(val)}
          />
          <InputText
            placeholder={'National ID'}
            textAlign={'center'}
            onChangeText={val => console.log(val)}
          />
          <Button
            text={'Lets Go !'}
            styles={{backgroundColor: Colors.Dark_Blue, marginTop: 10}}
            onPress={() => navigation.navigate('CreatePassword')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

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
  label: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'SST-Arabic-Roman',
    color: Colors.Dark_Blue,
    fontWeight: 800,
  },
  terms: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
    fontFamily: 'RB-Regular',
    color: Colors.black,
  },
  bottom: {
    flex: 0.7,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 31,
    justifyContent: 'center',
  },
});
