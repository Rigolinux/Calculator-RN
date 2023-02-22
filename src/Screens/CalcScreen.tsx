import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import BtnCalc from '../components/BtnCalc';

const CalcScreen = () => {
  return (
    <View style={styles.calccontainer}>
      <Text style={styles.resultSmall}>1500</Text>
      <Text style={styles.result}>1500</Text>

      {/* Row 1*/}
      <View style={styles.row}>
        <BtnCalc text="C" />
        <BtnCalc text="+/-" />
        <BtnCalc text="del" />
        <BtnCalc text="/" color="#FF9427" />
      </View>
      {/* Row 2*/}
      <View style={styles.row}>
        <BtnCalc text="7" />
        <BtnCalc text="8" />
        <BtnCalc text="9" />
        <BtnCalc text="X" color="#FF9427" />
      </View>
      {/* Row 3*/}
      <View style={styles.row}>
        <BtnCalc text="4" />
        <BtnCalc text="5" />
        <BtnCalc text="6" />
        <BtnCalc text="-" color="#FF9427" />
      </View>
      {/* Row 4*/}
      <View style={styles.row}>
        <BtnCalc text="1" />
        <BtnCalc text="2" />
        <BtnCalc text="3" />
        <BtnCalc text="+" color="#FF9427" />
      </View>
      {/* Row 5*/}
      <View style={styles.row}>
        <BtnCalc text="0" height />
        <BtnCalc text="." />
        <BtnCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalcScreen;
