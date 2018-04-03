import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import Liste from './src/components/Liste';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <Header />
      <Liste />
      </View>
    );
  }
}


