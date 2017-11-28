import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { AppStatusBar, setLocalNotification } from './utils/helpers'
import { Tabs, Stacks } from './utils/navigation';
import styles from './style/App';

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <Stacks />
      </View>
    );
  }
}
