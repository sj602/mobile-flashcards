import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Quiz extends Component {
  addCard() {
    return;
  }

  startQuiz() {
    return;
  }

  render() {
    return (
      <View>
        <Text>This is quiz</Text>
        <Button title='Add Card' onPress={this.addCard} />
        <Button title='Start Quiz' onPress={this.startQuiz} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonBlack: {
    backgroundColor: 'black',
    alignItems: 'center'
  },
  buttonWhite: {
    backgroundColor: 'white',
  }

})
