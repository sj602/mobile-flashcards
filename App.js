import React, { Component } from 'react';
// import './ReactotronConfig';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Decks from './components/decks';
import New_Deck from './components/new_deck';
import DeckDetail from './components/deckDetail';

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
  }
},
// {
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//   }
// }
);

const Stacks = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTitle: 'Deck Detail'
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <Stacks />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
