import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../../Config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import {Button, TextComponent} from '../../Components';
import {alert, image} from '../../Components/Assets';
import {ProgressBar, MD3Colors} from 'react-native-paper';

const Home = () => {
  const data = [1, 2, 3, 4, 5];

  const [ishide, setishide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setishide(false);
    }, 3000);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.card,
          {marginBottom: data.length - 1 == index ? 85 : 10},
        ]}>
        <ImageBackground
          source={image}
          style={{width: '100%', height: 220}}
          resizeMode={'stretch'}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 5,
              paddingHorizontal: 12,
            }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: Colors.White,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name={'hearto'} size={22} color={'#D52900'} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.tag}>
                <Feather
                  name={'key'}
                  size={22}
                  color={Colors.light_blue}
                  style={{marginRight: 5}}
                />
                <TextComponent
                  text={'Rented'}
                  style={{fontSize: 11, color: Colors.black}}
                />
              </View>
              <View style={styles.tag}>
                {/* <Image
                source={user?.isMale ? malesymbol : femalesymbol}
                style={{
                  width: 20,
                  height: 15,
                  marginRight: 2,
                  tintColor: Colors.White,
                }}
                resizeMode={'contain'}
              /> */}
                <TextComponent
                  text={'Riyadh'}
                  style={{fontSize: 11, color: Colors.black}}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 15, paddingTop: 10}}>
          <TextComponent
            text={'Studio, King Fahad street'}
            style={styles.PropTitle}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.flex, {alignItems: 'baseline'}]}>
              <TextComponent text={'430,466'} style={styles.amount} />
              <TextComponent
                text={'SAR'}
                style={[
                  styles.PropTitle,
                  {color: Colors.Dark_Blue, marginLeft: 5},
                ]}
              />
            </View>
            <View style={[styles.flex, {alignItems: 'baseline'}]}>
              <View style={{width: 138, marginRight: 5}}>
                <ProgressBar
                  // animatedValue={item.progress / 100}
                  progress={0.6}
                  color={Colors.Dark_Blue}
                  style={{height: 6, borderRadius: 15}}
                />
              </View>
              <TextComponent
                text={'19%'}
                style={[styles.amount, {color: Colors.black}]}
              />
              <TextComponent
                text={'Sold'}
                style={[styles.PropTitle, {marginLeft: 5}]}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: '#F4F4F5',
              padding: 10,
              marginVertical: 10,
            }}>
            <View style={{alignItems: 'center'}}>
              <TextComponent
                text={'40'}
                style={[styles.PropTitle, {fontSize: 14}]}
              />
              <TextComponent
                text={'Remaining Days'}
                style={[
                  styles.PropTitle,
                  {fontWeight: '100', color: '#A1A1AA', fontSize: 11},
                ]}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TextComponent
                text={'7.9%'}
                style={[styles.PropTitle, {fontSize: 14}]}
              />
              <TextComponent
                text={'Total Rent Return'}
                style={[
                  styles.PropTitle,
                  {fontWeight: '100', color: '#A1A1AA', fontSize: 11},
                ]}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TextComponent
                text={'49%'}
                style={[styles.PropTitle, {fontSize: 14}]}
              />
              <TextComponent
                text={'Total Return'}
                style={[
                  styles.PropTitle,
                  {fontWeight: '100', color: '#A1A1AA', fontSize: 11},
                ]}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.flex, {alignItems: 'baseline'}]}>
              <TextComponent
                text={'Rent'}
                style={[
                  styles.PropTitle,
                  {fontWeight: '100', color: '#A1A1AA', fontSize: 11},
                ]}
              />
              <TextComponent
                text={'2,500'}
                style={[
                  styles.PropTitle,
                  {color: Colors.Dark_Blue, marginHorizontal: 5, fontSize: 14},
                ]}
              />
              <TextComponent
                text={'SAR / Month'}
                style={[
                  styles.PropTitle,
                  {fontWeight: '100', color: Colors.Dark_Blue, fontSize: 11},
                ]}
              />
            </View>
            <View style={[styles.flex, {alignItems: 'baseline'}]}>
              <TextComponent
                text={'Income'}
                style={[
                  styles.PropTitle,
                  {fontWeight: '100', color: '#A1A1AA', fontSize: 11},
                ]}
              />

              <TextComponent
                text={'Monthly'}
                style={[
                  styles.PropTitle,
                  {
                    fontWeight: '100',
                    color: Colors.Dark_Blue,
                    fontSize: 11,
                    marginLeft: 5,
                  },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <View style={styles.header}>
          <TouchableOpacity>
            <AntDesign name={'hearto'} size={22} color={'#D52900'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto name={'bell'} size={22} color={Colors.Dark_Blue} />
          </TouchableOpacity>
        </View>
        <TextComponent text={'Properties'} style={styles.title} />
        {!ishide ? (
          <TouchableOpacity
            style={styles.completeAccount}
            onPress={() => setishide(true)}>
            <Image source={alert} style={{width: 48, height: 48}} />
            <View style={{flex: 0.9}}>
              <TextComponent
                text={'Complete your account'}
                style={[
                  styles.title,
                  {fontSize: 13, textAlign: 'left', marginBottom: -5},
                ]}
              />
              <TextComponent
                text={
                  'Please complete your file to start investing in properties'
                }
                style={[
                  styles.title,
                  {
                    fontSize: 10,
                    textAlign: 'left',
                    color: Colors.gray,
                    marginVertical: 5,
                  },
                ]}
              />
              <View style={{width: 138}}>
                <ProgressBar
                  // animatedValue={item.progress / 100}
                  progress={0.6}
                  color={Colors.Dark_Blue}
                  style={{height: 6, borderRadius: 15}}
                />
              </View>
            </View>
            <AntDesign name={'right'} size={20} color={Colors.Dark_Blue} />
          </TouchableOpacity>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View style={{flex: 0.48}}>
            <Button
              text={'Available'}
              theme={'Blue'}
              styles={{backgroundColor: Colors.Dark_Blue, height: 40}}
              // onPress={() => navigation.navigate('Signup')}
            />
          </View>
          <View style={{flex: 0.48}}>
            <Button
              text={'Sold'}
              theme={'blue'}
              styles={{height: 40}}
              // onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginTop: 5}}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Dark_Blue,
  },
  bottom: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 17,
    // paddingBottom: 50,
    marginTop: 60,
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RB-Regular',
    fontSize: 20,
    color: Colors.Dark_Blue,
    fontWeight: 800,
    textAlign: 'center',
  },
  completeAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: Colors.Dark_Blue,
    borderWidth: 1,
    backgroundColor: Colors.White,
    marginTop: 24,
  },
  card: {
    height: 400,
    elevation: 1,
    backgroundColor: Colors.White,
    marginBottom: 10,
    borderRadius: 9,
  },
  tag: {
    backgroundColor: Colors.White,
    paddingHorizontal: 5,
    borderRadius: 15,
    width: 90,
    paddingVertical: 5,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  PropTitle: {
    fontFamily: 'RB-Regular',
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },

  amount: {
    fontFamily: 'DIN-Next-LT-W23-Bold',
    fontSize: 18,
    color: Colors.Dark_Blue,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
