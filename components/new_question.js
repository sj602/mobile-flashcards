import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage,
   Alert, Button, StyleSheet, TouchableOpacity
} from 'react-native';

export default class New_Question extends Component {
  constructor(){
    super();
    this.state = {
      question: '',
      answer: '',
    };
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  submitQuestion() {
    const KEY = 'KEY';
    const { title } = this.props.navigation.state.params;
    const { questions } = this.props.navigation.state.params;
    let { question } = this.state;
    let { answer } = this.state;
    // console.log(question, answer, title);
    let obj = {};
    obj[title] = {
      questions : [{
        question: question,
        answer: answer
      }],
    }
    AsyncStorage.mergeItem(KEY, JSON.stringify(obj));

    this.QuizInput.clear();
    this.AnswerInput.clear();

    this.props.navigation.navigate('DeckDetail', { reload: true });
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.textTitle}>What is the title of your new deck?</Text>
        <TextInput placeholder="Quiz" ref={ref => this.QuizInput = ref} onChangeText={question => this.setState({ question })} />
        <TextInput placeholder="Answer" ref={ref => this.AnswerInput = ref} onChangeText={answer => this.setState({ answer })} />
        <TouchableOpacity style={styles.submit} onPress={this.submitQuestion}>
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
