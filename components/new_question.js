import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage,
   Alert, Button, StyleSheet, TouchableOpacity,
   KeyboardAvoidingView, Keyboard
} from 'react-native';
import { NavigationActions } from 'react-native'

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
    previous_questions.push(obj);

    this.QuizInput.clear();
    this.AnswerInput.clear();

    Keyboard.dismiss();

    AsyncStorage.getItem(KEY).then(res => JSON.parse(res))
      .then(data => {
        data[title]['questions'].push(obj)
        AsyncStorage.mergeItem(KEY, JSON.stringify(data))
      })

    console.log(this.props)
    return this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })]
                  }));
    // this.props.navigation.navigate('DeckDetail', { reload: true, title: title, questions: previous_questions });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{width: 300}} placeholder="Quiz" ref={ref => this.QuizInput = ref} onChangeText={question => this.setState({ question })} />
        <TextInput style={{width: 300}} placeholder="Answer" ref={ref => this.AnswerInput = ref} onChangeText={answer => this.setState({ answer })} />
        <TouchableOpacity style={styles.submit} onPress={this.submitQuestion}>
            <Text style={styles.textSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'white'
  },

  textSubmit: {
    fontSize: 15,
    color: 'white',
  },

  submit: {
    marginTop: 30,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },

});
