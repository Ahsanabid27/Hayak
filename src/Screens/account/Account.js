import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Config/Colors';
import {Button, TextComponent} from '../../Components';
import {constraints} from '../../Config/Constraints';
import {investment} from '../../Components/Assets';
import {ProgressBar} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Account = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TextComponent
        text={'My Wallet'}
        style={[styles.title, {marginBottom: 10, marginTop: 50}]}
      />
      <View style={styles.titleContainer}>
        <TextComponent
          text={'LO'}
          style={[styles.title, {color: Colors.White, fontSize: 32}]}
        />
      </View>

      <View style={styles.stats}>
        <View style={styles.tag}>
          <Image
            source={investment}
            style={{
              tintColor: Colors.Dark_Blue,
              width: 25,
              height: 25,
            }}
            resizeMode={'contain'}
          />
          <TextComponent
            text={'Yearly Rent Return'}
            style={{fontSize: 11, color: Colors.black, marginLeft: 10}}
          />
        </View>
        <TextComponent
          text={'7.67%'}
          style={[styles.amount, {textAlign: 'right'}]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <View style={[styles.stats, {width: '49%'}]}>
          <TextComponent
            text={'Monthly Income'}
            style={{
              fontSize: 11,
              color: Colors.black,
              marginLeft: 10,
              textAlign: 'center',
            }}
          />
          <View
            style={{
              alignItems: 'baseline',
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <TextComponent
              text={'SAR'}
              style={[
                styles.PropTitle,
                {color: Colors.Dark_Blue, marginRight: 5},
              ]}
            />
            <TextComponent text={'0'} style={styles.amount} />
          </View>
        </View>

        <View style={[styles.stats, {width: '49%'}]}>
          <TextComponent
            text={'Total Income'}
            style={{
              fontSize: 11,
              color: Colors.black,
              marginLeft: 10,
              textAlign: 'center',
            }}
          />
          <View
            style={{
              alignItems: 'baseline',
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <TextComponent
              text={'SAR'}
              style={[
                styles.PropTitle,
                {color: Colors.Dark_Blue, marginRight: 5},
              ]}
            />
            <TextComponent text={'0'} style={styles.amount} />
          </View>
        </View>
      </View>

      <View style={[styles.tag, {marginTop: 15, marginBottom: 30}]}>
        <View style={{width: '30%'}}>
          <ProgressBar
            // animatedValue={item.progress / 100}
            progress={0.4}
            color={Colors.Dark_Blue}
            style={{
              height: 4,
              marginVertical: 15,
              // borderRadius: 15,
              backgroundColor: '#E0E0E0',
            }}
          />
        </View>
        <View style={{width: '10%', alignItems: 'center'}}>
          <Ionicons
            name={'radio-button-on'}
            size={20}
            color={Colors.Dark_Blue}
          />
          <TextComponent
            text={'Beginer'}
            style={[
              styles.Subtitle,
              {fontSize: 9, marginTop: 20, position: 'absolute'},
            ]}
          />
        </View>
        <View style={{width: '20%'}}>
          <ProgressBar
            // animatedValue={item.progress / 100}
            progress={0}
            color={Colors.Dark_Blue}
            style={{
              height: 4,
              marginVertical: 15,
              // borderRadius: 15,
              backgroundColor: '#E0E0E0',
            }}
          />
        </View>
        <View style={{width: '11%', alignItems: 'center'}}>
          <Ionicons name={'radio-button-on'} size={20} color={'#909194'} />
          <TextComponent
            text={'Advanced'}
            style={[
              styles.Subtitle,
              {fontSize: 9, marginTop: 20, position: 'absolute'},
            ]}
          />
        </View>
        <View style={{width: '29%'}}>
          <ProgressBar
            // animatedValue={item.progress / 100}
            progress={0}
            color={Colors.Dark_Blue}
            style={{
              height: 4,
              marginVertical: 15,
              // borderRadius: 15,
              backgroundColor: '#E0E0E0',
            }}
          />
        </View>
      </View>

      <View>
        <TextComponent
          text={'Investments in 2023'}
          style={[styles.Subtitle, {fontSize: 14, marginTop: 20}]}
        />
        <View
          style={{
            alignItems: 'baseline',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <TextComponent text={'5,000'} style={styles.amount} />
          <TextComponent
            text={'SAR'}
            style={[
              styles.PropTitle,
              {color: Colors.Dark_Blue, marginLeft: 5, fontSize: 16},
            ]}
          />
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf: 'flex-end',
              justifyContent: 'center',
            }}>
            <TextComponent
              text={'Next Stage'}
              style={[
                styles.PropTitle,
                {color: Colors.Dark_Blue, marginRight: 5, fontSize: 12},
              ]}
            />
            <Entypo
              name={'chevron-small-right'}
              size={20}
              color={Colors.Dark_Blue}
            />
          </TouchableOpacity>

          <ProgressBar
            // animatedValue={item.progress / 100}
            progress={0.6}
            color={Colors.Dark_Blue}
            style={{
              height: 10,
              marginVertical: 15,
              borderRadius: 15,
              backgroundColor: '#E0E0E0',
            }}
          />
          <View
            style={{
              alignItems: 'baseline',
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginTop: -10,
            }}>
            <TextComponent
              text={'25,000'}
              style={[styles.amount, {fontSize: 18}]}
            />
            <TextComponent
              text={'SAR'}
              style={[
                styles.PropTitle,
                {color: Colors.Dark_Blue, marginLeft: 5, fontSize: 16},
              ]}
            />
          </View>
        </View>
      </View>
      <View style={{marginVertical: 25}}>
        <Button
          text={'Support & Help'}
          theme={'gray'}
          textStyle={{fontSize: 14, fontWeight: 800, color: '#909194'}}
          styles={{backgroundColor: '#E0E0E0', height: 45}}
        />
        <TextComponent
          text={'Hayak v 1.0'}
          style={[styles.Subtitle, {fontSize: 14, marginTop: 10}]}
        />
      </View>
      <View style={{height: 65}} />
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'RB-Regular',
    fontSize: 20,
    color: Colors.Dark_Blue,
    fontWeight: 800,
    textAlign: 'center',
  },
  Subtitle: {
    fontFamily: 'RB-Regular',
    fontSize: 11,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  titleContainer: {
    alignSelf: 'center',
    width: 110,
    height: 110,
    backgroundColor: Colors.light_blue,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  stats: {
    backgroundColor: Colors.White,
    height: 100,
    borderRadius: 9,
    padding: 20,
    ...constraints.myShadow,
  },
  PropTitle: {
    fontFamily: 'RB-Regular',
    fontSize: 12,
    color: Colors.black,
    fontWeight: 'bold',
  },
  amount: {
    fontFamily: 'DIN-Next-LT-W23-Bold',
    fontSize: 26,
    color: Colors.Dark_Blue,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
