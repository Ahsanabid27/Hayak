import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Button, TextComponent} from '../../Components';
import {Colors} from '../../Config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {constraints} from '../../Config/Constraints';
import {down} from '../../Components/Assets';
import {useNavigation} from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <TextComponent text={'My Wallet'} style={styles.title} />
        <TextComponent text={'Available Balance'} style={styles.Subtitle} />
        <View style={{alignItems: 'baseline', flexDirection: 'row'}}>
          <TextComponent text={'430,466'} style={styles.amount} />
          <TextComponent
            text={'SAR'}
            style={[styles.PropTitle, {color: Colors.Dark_Blue, marginLeft: 5}]}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{flex: 0.48}}>
          <Button
            text={'Withdraw'}
            theme={'blue'}
            styles={{height: 40}}
            textStyle={{fontSize: 11, fontWeight: 200}}
          />
        </View>
        <View style={{flex: 0.48}}>
          <Button
            text={'Add Fund'}
            theme={'Blue'}
            textStyle={{fontSize: 11, fontWeight: 200}}
            styles={{backgroundColor: Colors.Dark_Blue, height: 40}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <View style={[styles.stats, {width: '48%'}]}>
          <TextComponent
            text={'Rewards Balance'}
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
              alignSelf: 'flex-start',
            }}>
            <TextComponent text={'2,031'} style={styles.amount} />
            <TextComponent
              text={'SAR'}
              style={[
                styles.PropTitle,
                {color: Colors.Dark_Blue, marginLeft: 5},
              ]}
            />
          </View>
        </View>

        <View style={[styles.stats, {width: '48%'}]}>
          <TextComponent
            text={'Cash Balance'}
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
              alignSelf: 'flex-start',
            }}>
            <TextComponent text={'2,031'} style={styles.amount} />

            <TextComponent
              text={'SAR'}
              style={[
                styles.PropTitle,
                {color: Colors.Dark_Blue, marginLeft: 5},
              ]}
            />
          </View>
        </View>
      </View>

      <TextComponent
        text={'Transactions'}
        style={[
          styles.title,
          {textAlign: 'left', fontSize: 14, marginVertical: 10},
        ]}
      />

      <View style={[styles.stats, {height: 200}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={down}
              style={{width: 40, height: 40, marginRight: 15}}
            />
            <View>
              <TextComponent
                text={'Rent Paid'}
                style={[styles.Subtitle, {textAlign: 'left', marginTop: 0}]}
              />
              <TextComponent
                text={'Completed'}
                style={[
                  styles.Subtitle,
                  {
                    textAlign: 'left',
                    marginTop: 0,
                    color: Colors.completedGreen,
                  },
                ]}
              />
            </View>
          </View>
          <View>
            <TextComponent
              text={'09/28/2022'}
              style={[
                styles.Subtitle,
                {textAlign: 'left', marginTop: 0, color: '#909194'},
              ]}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                marginTop: -10,
              }}>
              <TextComponent
                text={'2,031'}
                style={[
                  styles.amount,
                  {color: Colors.light_blue, fontSize: 16},
                ]}
              />

              <TextComponent
                text={'SAR'}
                style={[
                  styles.PropTitle,
                  {color: Colors.light_blue, marginLeft: 5},
                ]}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={down}
              style={{width: 40, height: 40, marginRight: 15}}
            />
            <View>
              <TextComponent
                text={'Rent Paid'}
                style={[styles.Subtitle, {textAlign: 'left', marginTop: 0}]}
              />
              <TextComponent
                text={'Failed'}
                style={[
                  styles.Subtitle,
                  {
                    textAlign: 'left',
                    marginTop: 0,
                    color: '#D52900',
                  },
                ]}
              />
            </View>
          </View>
          <View>
            <TextComponent
              text={'09/28/2022'}
              style={[
                styles.Subtitle,
                {textAlign: 'left', marginTop: 0, color: '#909194'},
              ]}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                marginTop: -10,
              }}>
              <TextComponent
                text={'2,031'}
                style={[
                  styles.amount,
                  {color: Colors.light_blue, fontSize: 16},
                ]}
              />

              <TextComponent
                text={'SAR'}
                style={[
                  styles.PropTitle,
                  {color: Colors.light_blue, marginLeft: 5},
                ]}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={down}
              style={{width: 40, height: 40, marginRight: 15}}
            />
            <View>
              <TextComponent
                text={'Rent Paid'}
                style={[styles.Subtitle, {textAlign: 'left', marginTop: 0}]}
              />
              <TextComponent
                text={'Pending'}
                style={[
                  styles.Subtitle,
                  {
                    textAlign: 'left',
                    marginTop: 0,
                    color: '#919490',
                  },
                ]}
              />
            </View>
          </View>
          <View>
            <TextComponent
              text={'09/28/2022'}
              style={[
                styles.Subtitle,
                {textAlign: 'left', marginTop: 0, color: '#909194'},
              ]}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                marginTop: -10,
              }}>
              <TextComponent
                text={'2,031'}
                style={[
                  styles.amount,
                  {color: Colors.light_blue, fontSize: 16},
                ]}
              />

              <TextComponent
                text={'SAR'}
                style={[
                  styles.PropTitle,
                  {color: Colors.light_blue, marginLeft: 5},
                ]}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate('Transactions')}>
        <TextComponent
          text={'See All'}
          style={[
            styles.title,
            {textAlign: 'left', fontSize: 14, marginLeft: 10},
          ]}
        />
        <AntDesign name={'right'} size={20} color={Colors.black} />
      </TouchableOpacity>

      <TextComponent
        text={'Payment Method'}
        style={[
          styles.title,
          {textAlign: 'left', fontSize: 14, marginVertical: 10},
        ]}
      />
      <View>
        <TextComponent
          text={'Cards'}
          style={[styles.Subtitle, {textAlign: 'left'}]}
        />
        <TouchableOpacity style={styles.btn}>
          <AntDesign name={'plus'} size={14} color={'#909194'} />
          <TextComponent
            text={'Add New Card'}
            style={[
              styles.Subtitle,
              {color: '#909194', marginTop: 0, marginLeft: 5},
            ]}
          />
        </TouchableOpacity>
        <TextComponent
          text={'Bank Accounts'}
          style={[styles.Subtitle, {textAlign: 'left'}]}
        />
        <TouchableOpacity style={styles.btn}>
          <AntDesign name={'plus'} size={14} color={'#909194'} />
          <TextComponent
            text={'Add Bank Account'}
            style={[
              styles.Subtitle,
              {color: '#909194', marginTop: 0, marginLeft: 5},
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={{height: 100}} />
    </ScrollView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: 15,
  },
  header: {
    paddingTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  stats: {
    backgroundColor: Colors.White,
    height: 100,
    borderRadius: 9,
    padding: 15,
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
    fontSize: 18,
    color: Colors.Dark_Blue,
  },

  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    // borderColor: Colors.Dark_Blue,
    // borderWidth: 1,
    backgroundColor: Colors.White,
    marginVertical: 5,
    ...constraints.myShadow,
  },
  btn: {
    height: 40,
    borderRadius: 9,
    borderColor: '#CACBCD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:15,
    marginVertical: 10,
    flexDirection: 'row',
  },
});
