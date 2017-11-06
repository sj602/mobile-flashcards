import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import New_Question from './new_question';
// import Quiz from './quiz';

export default class DeckDetail extends Component {
  state = {
    title: '',
    questions: [],
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is deckDetail</Text>
        <Text>numbers of cards</Text>

        <TouchableOpacity style={styles.buttonWhite} onPress={() => navigate('New_Question')}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBlack} onPress={() => navigate('Quiz')}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonBlack: {
    width: 150,
    height: 30,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  buttonWhite: {
    width: 150,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center'
  }
});
