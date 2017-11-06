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

        <TouchableOpacity>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Incorrect</Text>
        </TouchableOpacity>

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
