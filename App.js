import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Decks from './components/decks';
import New_Deck from './components/new_deck';
import DeckDetail from './components/deckDetail';
import Quiz from './components/quiz';
import New_Question from './components/new_question';
import { AppStatusBar, setLocalNotification } from './utils/helpers';
import styles from './style/App';

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
}, {
  navigationOptions: {
    header: null // header null해서 메인화면의 stack navigation header부분이 없어졌음
  }
}
);

const Stacks = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'Deck Detail'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  },
  New_Question: {
    screen: New_Question,
    navigationOptions: {
      title: 'New Question'
    }
  }
})

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
