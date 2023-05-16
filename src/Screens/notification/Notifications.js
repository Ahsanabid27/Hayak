import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header, TextComponent} from '../../Components';
import {Colors} from '../../Config/Colors';
import {constraints} from '../../Config/Constraints';
import Entypo from 'react-native-vector-icons/Entypo';

const Notifications = () => {
  const renderItem = () => {
    return (
      <TouchableOpacity style={styles.item}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Entypo name={'dot-single'} size={16} color={'#BE1E2D'} />
            <TextComponent
              text={'An Action-Packed Month!'}
              style={[styles.subTitle, {fontSize: 10, fontWeight: 800}]}
            />
          </View>
          <TextComponent
            text={'June 08, 2023  03:47 PM'}
            style={[styles.desc, {marginTop: 0}]}
          />
        </View>
        <TextComponent
          text={
            'In case you missed it, May was a very eventful month at Hayak, so much so that we’re switching it up this week, and giving you a full update on all the exciting things our team has been up to! There’s so much to cover, so let’s get started'
          }
          style={styles.desc}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header leftIcon={true} blue={true} />
      <TextComponent text={'Notifications'} style={styles.title} />
      <TouchableOpacity
        style={{margin: 20, alignSelf: 'flex-end', marginBottom: 10}}>
        <TextComponent text={'Mark as read'} style={styles.subTitle} />
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 15}}
        data={[1, 2]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Notifications;

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
  subTitle: {
    fontFamily: 'RB-Regular',
    fontSize: 14,
    color: Colors.light_blue,
    fontWeight: '600',
  },
  item: {
    backgroundColor: Colors.White,
    borderRadius: 9,
    padding: 20,
    marginBottom: 10,
    ...constraints.myShadow,
  },
  desc: {
    fontFamily: 'RB-Regular',
    fontSize: 10,
    color: Colors.light_blue,
    marginTop: 5,
  },
});
