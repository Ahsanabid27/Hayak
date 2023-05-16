import {Image, SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../Config/Colors';
import {Header, TextComponent} from '../../Components';
import {down, up} from '../../Components/Assets';
import Entypo from 'react-native-vector-icons/Entypo';

const Transactions = () => {
  const DATA = [
    {
      title: '09/28/20222',
      data: [1, 23, 4],
    },
    {
      title: '09/28/2022',
      data: [1, 2],
    },
    {
      title: '09/28/2022',
      data: [1],
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={item != 4 ? down : up}
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
          <Entypo name={'chevron-small-right'} size={20} color={Colors.black} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header leftIcon={true} blue={true} />
      <TextComponent text={'Transactions'} style={styles.title} />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        style={{marginVertical: 10}}
        renderSectionHeader={({section: {title}}) =>
          title != '09/28/20222' ? (
            <View style={styles.dateview}>
              <TextComponent text={title} style={styles.date} />
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  title: {
    fontFamily: 'RB-Regular',
    fontSize: 20,
    color: Colors.Dark_Blue,
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: 10,
  },
  date: {
    fontFamily: 'RB-Regular',
    fontSize: 12,
    color: '#909194',
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
  Subtitle: {
    fontFamily: 'RB-Regular',
    fontSize: 11,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginBottom: 10,
    backgroundColor: Colors.White,
    borderBottomColor: '#CACBCD',
    borderBottomWidth: 1,
  },
  dateview: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginBottom: 10,
    // backgroundColor: Colors.White,
    borderBottomColor: '#CACBCD',
    borderBottomWidth: 1,
  },
});
