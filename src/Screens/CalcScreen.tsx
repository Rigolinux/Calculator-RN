import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../theme/appTheme';
import BtnCalc from '../components/BtnCalc';

const CalcScreen = () => {
  const [number, setNumber] = useState('100');
  const [previousNumber, setPreviousNumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal point
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // evaluate if is another zero and there is a point
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        // evaluate if is different of zero and not have a point
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // avoid 000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  return (
    <View style={styles.calccontainer}>
      <Text style={styles.resultSmall}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Row 1*/}
      <View style={styles.row}>
        <BtnCalc text="C" action={clean} />
        <BtnCalc text="+/-" action={positiveNegative} />
        <BtnCalc text="del" action={buildNumber} />
        <BtnCalc text="/" color="#FF9427" action={buildNumber} />
      </View>
      {/* Row 2*/}
      <View style={styles.row}>
        <BtnCalc text="7" action={buildNumber} />
        <BtnCalc text="8" action={buildNumber} />
        <BtnCalc text="9" action={buildNumber} />
        <BtnCalc text="X" action={buildNumber} color="#FF9427" />
      </View>
      {/* Row 3*/}
      <View style={styles.row}>
        <BtnCalc text="4" action={buildNumber} />
        <BtnCalc text="5" action={buildNumber} />
        <BtnCalc text="6" action={buildNumber} />
        <BtnCalc text="-" action={buildNumber} color="#FF9427" />
      </View>
      {/* Row 4*/}
      <View style={styles.row}>
        <BtnCalc text="1" action={buildNumber} />
        <BtnCalc text="2" action={buildNumber} />
        <BtnCalc text="3" action={buildNumber} />
        <BtnCalc text="+" action={buildNumber} color="#FF9427" />
      </View>
      {/* Row 5*/}
      <View style={styles.row}>
        <BtnCalc text="0" height action={buildNumber} />
        <BtnCalc text="." action={buildNumber} />
        <BtnCalc text="=" color="#FF9427" action={buildNumber} />
      </View>
    </View>
  );
};

export default CalcScreen;
