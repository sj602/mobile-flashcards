import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage,
   Alert, Button, StyleSheet, TouchableOpacity
} from 'react-native';
import * as helpers from '../helpers';

export default class New_Question extends Component {
  constructor(){
    super();
    this.state = {
      quiz: '',
      answer: '',
    };
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  submitQuestion() {
    const KEY = 'KEY';
    const deck = this.props.navigation.state.params.deck;
    let { quiz } = this.state;
    let obj = {};
    obj[deck] = {
      questions: {},
    };
    AsyncStorage.mergeItem(KEY, JSON.stringify(obj));

    this.textInput.clear();
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.textTitle}>What is the title of your new deck?</Text>
        <TextInput placeholder="Quiz" ref={ref => this.QuizInput = ref} onChangeText={quiz => this.setState({ quiz })} />
        <TextInput placeholder="Answer" ref={ref => this.AnswerInput = ref} onChangeText={answer => this.setState({ answer })} />
        <TouchableOpacity style={styles.submit} onPress={this.submitQuiz}>
            <Text style={styles.textSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
  },

  textTitle: {
    fontSize: 25,
    textAlign: 'center'
  },

  textSubmit: {
    fontSize: 15,
    color: 'white',
  },

  submit: {
    flexDirection: 'column',
    marginTop: 30,
    width: 200,
    height: 35,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },

});
