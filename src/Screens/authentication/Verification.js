import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';
import {Button, InputText, TextComponent} from '../../Components';
import {Colors} from '../../Config/Colors';
import {Verify} from '../../Components/Assets';
import {useDispatch} from 'react-redux';
import {login} from '../../Store/Actions/AuthAction';
import {hideLoading, showLoading} from '../../Store/Actions/GeneralActions';

const Verification = () => {
  const dispatch = useDispatch();
  const logins = () => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(hideLoading());
      dispatch(login(true));
    }, 1000);
  };
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
        source={Verify}
        style={{width: 75, height: 55, alignSelf: 'center'}}
        resizeMode={'stretch'}
      />
      <TextComponent text={'Verify Password'} style={styles.title} />
      <TextComponent
        text={
          'We have sent you a verification code to your\nregistered mobile that end with ***54'
        }
        style={styles.des}
      />
      <View style={{paddingHorizontal: 31, marginTop: 50}}>
        <InputText
          iconname={'check'}
          iconColor={Colors.Dark_Blue}
          placeholderColor={Colors.Dark_Blue}
          sidebar={true}
          style={{fontSize: 20, color: Colors.Dark_Blue}}
          maxLength={4}
          placeholder={'- - - -'}
          textAlign={'center'}
          onChangeText={val => console.log(val)}
        />
        <Button
          text={'Verify'}
          styles={{backgroundColor: Colors.Dark_Blue, marginTop: 10}}
          onPress={() => logins()}
        />
        <TextComponent
          text={'Resend verification code 00:30'}
          style={styles.resent}
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

export default Verification;

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
});
