import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Config/Colors';
import {Button, TextComponent} from '../../Components';
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import {image, investment} from '../../Components/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {constraints} from '../../Config/Constraints';

const Investment = () => {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: Colors.bg,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: Colors.bg,
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(5, 53, 125, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForDots: {
      strokeWidth: '1',
      stroke: Colors.White,
    },
  };

  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [20, 45, 28, 50, 78, 43, 90, 40, 70],
        color: (opacity = 1) => `rgba(5, 53, 125, ${opacity})`, // optional
        // strokeWidth: 2, // optional
      },
    ],
    // legend: ['Rainy Days'], // optional
  };

  const datas = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <TextComponent text={'My Investments'} style={styles.title} />
        <TextComponent text={'Portfolio Value'} style={styles.Subtitle} />
        <View style={{alignItems: 'baseline', flexDirection: 'row'}}>
          <TextComponent text={'430,466'} style={styles.amount} />
          <TextComponent
            text={'SAR'}
            style={[styles.PropTitle, {color: Colors.Dark_Blue, marginLeft: 5}]}
          />
        </View>
      </View>
      <View style={{height: 300, backgroundColor: '#000'}}>
        <LineChart
          style={{marginLeft: -45}}
          withInnerLines={false}
          withHorizontalLabels={false}
          data={data}
          width={screenWidth + 20}
          height={300}
          chartConfig={chartConfig}
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
        <View style={[styles.stats, {width: '48%'}]}>
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
            <TextComponent text={'2,031'} style={styles.amount} />
          </View>
        </View>

        <View style={[styles.stats, {width: '48%'}]}>
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
            <TextComponent text={'2,031'} style={styles.amount} />
          </View>
        </View>
      </View>
      <TextComponent
        text={'Investment Value'}
        style={[styles.Subtitle, {textAlign: 'left', fontSize: 14}]}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{flex: 0.48}}>
          <Button
            text={'Live (0)'}
            theme={'blue'}
            styles={{height: 40}}
            textStyle={{fontSize: 11, fontWeight: 200}}
            // onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={{flex: 0.48}}>
          <Button
            text={'Active (2)'}
            theme={'Blue'}
            textStyle={{fontSize: 11, fontWeight: 200}}
            styles={{backgroundColor: Colors.Dark_Blue, height: 40}}
            // onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.cardContainer}>
        <Image
          source={image}
          style={{width: 72, height: 72, borderRadius: 10}}
        />
        <View style={{flex: 0.9}}>
          <TextComponent
            text={'Studio, King Fahad street'}
            style={[
              styles.Subtitle,
              {color: '#909194', fontSize: 11, textAlign: 'left', marginTop: 0},
            ]}
          />
          <TextComponent
            text={'13,000 SAR'}
            style={[styles.Subtitle, {textAlign: 'left', marginTop: 0}]}
          />
          <TextComponent
            text={'Income'}
            style={[
              styles.Subtitle,
              {color: '#909194', fontSize: 9, textAlign: 'left', marginTop: 0},
            ]}
          />
        </View>
        <AntDesign name={'right'} size={20} color={Colors.black} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer}>
        <Image
          source={image}
          style={{width: 72, height: 72, borderRadius: 10}}
        />
        <View style={{flex: 0.9}}>
          <TextComponent
            text={'Studio, King Fahad street'}
            style={[
              styles.Subtitle,
              {color: '#909194', fontSize: 11, textAlign: 'left', marginTop: 0},
            ]}
          />
          <TextComponent
            text={'13,000 SAR'}
            style={[styles.Subtitle, {textAlign: 'left', marginTop: 0}]}
          />
          <TextComponent
            text={'Income'}
            style={[
              styles.Subtitle,
              {color: '#909194', fontSize: 9, textAlign: 'left', marginTop: 0},
            ]}
          />
        </View>
        <AntDesign name={'right'} size={20} color={Colors.black} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer}>
        <Image
          source={image}
          style={{width: 72, height: 72, borderRadius: 10}}
        />
        <View style={{flex: 0.9}}>
          <TextComponent
            text={'Studio, King Fahad street'}
            style={[
              styles.Subtitle,
              {color: '#909194', fontSize: 11, textAlign: 'left', marginTop: 0},
            ]}
          />
          <TextComponent
            text={'13,000 SAR'}
            style={[styles.Subtitle, {textAlign: 'left', marginTop: 0}]}
          />
          <TextComponent
            text={'Income'}
            style={[
              styles.Subtitle,
              {color: '#909194', fontSize: 9, textAlign: 'left', marginTop: 0},
            ]}
          />
        </View>
        <AntDesign name={'right'} size={20} color={Colors.black} />
      </TouchableOpacity>

      {/* <View style={[styles.stats, {height: 300}]}>
        <ProgressChart
          data={datas}
          width={screenWidth * 0.85}
          height={200}
          strokeWidth={16}
          radius={22}
          chartConfig={chartConfig}
          hideLegend={true}
        />
      </View> */}

      <View style={{height: 100}} />
    </ScrollView>
  );
};

export default Investment;

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
  stats: {
    backgroundColor: Colors.White,
    height: 100,
    borderRadius: 9,
    padding: 15,
    ...constraints.myShadow,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
    paddingHorizontal: 10,
    borderRadius: 10,
    // borderColor: Colors.Dark_Blue,
    // borderWidth: 1,
    backgroundColor: Colors.White,
    marginVertical: 5,
    ...constraints.myShadow,
  },
});
