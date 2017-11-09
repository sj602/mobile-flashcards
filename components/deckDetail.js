import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, TouchableOpacity,
} from 'react-native';
// import New_Question from './new_question';
// import Quiz from './quiz';

export default class DeckDetail extends Component {
  state = {
    title: '',
    questions: [],
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    console.log(title);
    this.setState({title});
  }

  render() {
    const { navigate } = this.props.navigation;
    const { title } = this.state;
    const { questions } = this.state;
    const number = this.state.questions.length;

    return (
      <View>
        <Text>{title}</Text>
        <Text>{number} of cards</Text>

        <TouchableOpacity style={styles.buttonWhite} onPress={() => navigate('New_Question'),
          {title: title}}>
          <Text style={{color:'black'}}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBlack} onPress={() => navigate('Quiz'),
          {qustions: questions}}>
          <Text style={{color:'white'}}>Start Quiz</Text>
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
    alignItems: 'center',
  },
  buttonWhite: {
    width: 150,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center'
  }
});
