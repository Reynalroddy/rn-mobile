/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import {store,persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
// import { PersistGate } from 'redux-persist/es/integration/react';
import AppNav from './navs/AppNav';
const  App=()=>{
  return (
    <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
 <AppNav/>
 </PersistGate>
</Provider>
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily:'Roboto-Bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
