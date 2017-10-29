import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Decks from './components/decks';
import New_Deck from './components/new_deck';


function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar barStyle='light-content' />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  New_Deck: {
    screen: New_Deck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  },
  // {
  //   tabBarOptions: {
  //     activeTintColor: Platform.OS === 'ios' ? purple : white,
  //   }
  // }
});

export default class App extends Component {
  render() {
    return (
      // <View>
        // <AppStatusBar />
        <Tabs />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
