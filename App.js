import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Decks from './components/decks';
import New_Deck from './components/new_deck';
import DeckDetail from './components/deckDetail';
import Quiz from './components/quiz';
import New_Question from './components/new_question';
import { AppStatusBar, setLocalNotification } from './utils/helpers'
import Stacks from './utils/navigation';
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
