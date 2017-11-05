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
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>This is quiz</Text>
        <Button title='Add Card' onPress={() => navigate(addCard)} />
        <Button title='Start Quiz' onPress={{() => navigate(startCard)} />
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
