/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/appTheme';
import CalcScreen from './src/Screens/CalcScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.font}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalcScreen />
    </SafeAreaView>
  );
}

export default App;
