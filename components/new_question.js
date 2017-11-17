import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage,
   Alert, Button, StyleSheet, TouchableOpacity
} from 'react-native';

export default class New_Question extends Component {
  constructor(){
    super();
    this.state = {
      previous_questions: [],
      question: '',
      answer: '',
    };
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  submitQuestion() {
    const KEY = 'KEY';
    const { title } = this.props.navigation.state.params;
    let previous_questions = this.props.navigation.state.params.questions;
    let { question } = this.state;
    let { answer } = this.state;

    let obj = {};
    obj = {
      question: question,
      answer: answer,
    }
    console.log(previous_questions, obj)
    previous_questions.push(obj);
    console.log('questions: ', previous_questions)

    // this.setState({ questions: questions.push(obj) })
    // console.log('questions: ', questions)
    // console.log('obj: ', obj)
    // console.log('questions_push :', this.state.questions)
    // AsyncStorage.mergeItem(KEY, JSON.stringify(obj));
    // AsyncStorage.getItem(KEY).then(result => console.log(JSON.parse(result)) )

    this.QuizInput.clear();
    this.AnswerInput.clear();

    this.props.navigation.navigate('DeckDetail', { reload: true, new_questions: previous_questions });
  }

  render() {
    // const { questions } = this.props.navigation.state.params;
    // console.log('new_question : ', questions)
    // console.log(this.props.navigation.state.params.title)
    return (
      <View style={styles.view}>
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
