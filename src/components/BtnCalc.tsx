/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

interface props {
  text: string;
  color?: string;
  height?: boolean;
  action: (numberText: string) => void;
}

const BtnCalc = ({text, color = '#2D2D2D', height = false, action}: props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: height ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BtnCalc;
