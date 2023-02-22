import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import BtnCalc from '../components/BtnCalc';

import {UseCalculator} from '../Hooks/UseCalculator';

const CalcScreen = () => {
  const {
    number,
    previousNumber,
    clean,
    buildNumber,
    positiveNegative,
    deleteLastnumber,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  } = UseCalculator();

  return (
    <View style={styles.calccontainer}>
      {previousNumber !== '0' && (
        <Text style={styles.resultSmall}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Row 1*/}
      <View style={styles.row}>
        <BtnCalc text="C" action={clean} />
        <BtnCalc text="+/-" action={positiveNegative} />
        <BtnCalc text="del" action={deleteLastnumber} />
        <BtnCalc text="/" color="#FF9427" action={btnDivide} />
      </View>
      {/* Row 2*/}
      <View style={styles.row}>
        <BtnCalc text="7" action={buildNumber} />
        <BtnCalc text="8" action={buildNumber} />
        <BtnCalc text="9" action={buildNumber} />
        <BtnCalc text="X" action={btnMultiply} color="#FF9427" />
      </View>
      {/* Row 3*/}
      <View style={styles.row}>
        <BtnCalc text="4" action={buildNumber} />
        <BtnCalc text="5" action={buildNumber} />
        <BtnCalc text="6" action={buildNumber} />
        <BtnCalc text="-" action={btnSubtract} color="#FF9427" />
      </View>
      {/* Row 4*/}
      <View style={styles.row}>
        <BtnCalc text="1" action={buildNumber} />
        <BtnCalc text="2" action={buildNumber} />
        <BtnCalc text="3" action={buildNumber} />
        <BtnCalc text="+" action={btnAdd} color="#FF9427" />
      </View>
      {/* Row 5*/}
      <View style={styles.row}>
        <BtnCalc text="0" height action={buildNumber} />
        <BtnCalc text="." action={buildNumber} />
        <BtnCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalcScreen;
