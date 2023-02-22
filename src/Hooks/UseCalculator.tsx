import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
  Unknow,
}

export const UseCalculator = () => {
  const [number, setNumber] = useState('100');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
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

  const deleteLastnumber = () => {
    setNumber(number.slice(0, -1));
    //delete the last number when have only one number and have a negative sign
    if (number.length === 2 && number.includes('-')) {
      setNumber('0');
    }

    if (number.length === 1) {
      setNumber('0');
    }
  };

  const changueNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changueNumberToPrevious();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changueNumberToPrevious();
    lastOperation.current = Operators.multiply;
  };
  const btnSubtract = () => {
    changueNumberToPrevious();
    lastOperation.current = Operators.subtract;
  };
  const btnAdd = () => {
    changueNumberToPrevious();
    lastOperation.current = Operators.add;
  };
  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);
    if (isNaN(num1) || isNaN(num2)) {
      setNumber('0');
    } else {
      switch (lastOperation.current) {
        case Operators.add:
          setNumber(`${num1 + num2}`);
          break;
        case Operators.subtract:
          setNumber(`+
          m1}`);
          break;
        case Operators.multiply:
          setNumber(`${num1 * num2}`);
          break;
        case Operators.divide:
          if (num1 === 0 && num2 === 0) {
            setNumber('0');
          } else if (num1 === 0) {
            setNumber('0');
          } else if (num2 === 0) {
            setNumber('0');
          } else {
            setNumber(`${num2 / num1}`);
          }
          break;
        default:
          setNumber('0');
          setPreviousNumber('0');
          Operators.Unknow;
          break;
      }
    }
    setPreviousNumber('0');
    // if NaN
    if (isNaN(Number(number))) {
      setNumber('0');
    }
  };

  return {
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
  };
};
