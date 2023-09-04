import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../../components/customButton/customButton';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';

const Intro = (props: any) => {
  const {navigation} = props;

  return (
    <View style={style.container}>
      <Image
        source={require('../../../assets/images/electric_car.png')}
        style={style.image}
        resizeMode="contain"
      />

      <View style={style.container1}>
        <View style={style.container2}>
          <Text style={style.textStyle}>Enjoy Betting and Fun with Friends</Text>
          {/* <Text style={style.textStyle}>Bet, Play, Party: Ultimate Betting Fun</Text> */}
          <Text style={style.textSubStyle}>
            Introducing our exciting betting app for endless fun! Bet on your
            favorite games with friends, and the ultimate loser foots the bill
            for the epic party or trip. Let the games begin!
          </Text>
        </View>
        <View>
          <View style={style.button}>
            <CustomButton
              text="Get Started"
              disabled={false}
              backgroundColor="#000"
              onPress={() => {
                navigation.navigate('IntroSlider0');
              }}></CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Intro;
