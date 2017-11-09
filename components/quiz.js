import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, TouchableOpacity
} from 'react-native';

export default class Quiz extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    const { questions } = this.props.navigation.state.params;
    this.setState({ questions });
  }

  render() {
    const { questions } = this.state;

    //   { questions.map(quizSet => return (
    //     <Text>{ quizSet[quiz] }</Text>
    //     <Text>{ quizSet[answer] }</Text>
    //   ))
    // }


    return (
      <View style={styles.container}>

        <TouchableOpacity>
          <Text style={styles.buttonGreen}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonRed}>Incorrect</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGreen: {
    backgroundColor: 'green',
    alignItems: 'center'
  },
  buttonRed: {
    backgroundColor: 'red',
  }

})
