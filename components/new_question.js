import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage,
   Alert, Button, StyleSheet, TouchableOpacity
} from 'react-native';

export default class New_Question extends Component {
  constructor(){
    super();
    this.state = {
      questions: [],
      question: '',
      answer: '',
    };
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  submitQuestion() {
    const KEY = 'KEY';
    const { title } = this.props.navigation.state.params;
    let { questions } = this.props.navigation.state.params;
    let { question } = this.state;
    let { answer } = this.state;

    let obj = {};
    obj = {
      question: question,
      answer: answer,
    }
    // obj[title] = {
    //   questions : [{
    //     question: question,
    //     answer: answer
    //   }],
    // }
    questions.push(obj);
    console.log('questions: ', questions)
    // this.setState({ questions: questions.push(obj) })
    // console.log('questions: ', questions)
    console.log('obj: ', obj)
    console.log('questions_push :', this.state.questions)
    // AsyncStorage.mergeItem(KEY, JSON.stringify(obj));
    // AsyncStorage.getItem(KEY).then(result => console.log(JSON.parse(result)) )

    this.QuizInput.clear();
    this.AnswerInput.clear();

    // this.props.navigation.navigate('DeckDetail', { reload: true, new_questions: questions });
  }

  render() {
    // const { questions } = this.props.navigation.state.params;
    // console.log('new_question : ', questions)
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
