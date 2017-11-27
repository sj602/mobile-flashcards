import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, TouchableOpacity,
  Alert
} from 'react-native';
import styles from '../style/quiz';

export default class Quiz extends Component {
  state = {
    questions: [],
    cloneQuestions: [],
    flipped: false,
    correctQuestions: [],
  }

  componentWillMount() {
    const { questions } = this.props.navigation.state.params;
    console.log("componentWillMount's questions: ", questions)
    this.setState({
      questions: questions,
      cloneQuestions: questions.slice(0)
    });

  }

  handleFlipped = () => {
    this.setState((state) => ({ flipped: !state.flipped }))
  }

  checkAnswer = () => {
    const { questions } = this.state
    const { cloneQuestions } = this.state
    // console.log(questions[0]["question"], questions[0]["answer"])
    let { correctQuestions } = this.state

    let arr = []
    arr.push(cloneQuestions.shift())

    correctQuestions = correctQuestions.concat(arr)
    // console.log("questions", questions)
    // console.log("cloneQuestions' length", cloneQuestions.length)
    // console.log("arr", arr)
    // console.log("correctQuestions", correctQuestions)

    this.setState({ correctQuestions })

  }

  render() { // no this.setState() in render method
    const { questions } = this.state;
    let { cloneQuestions } = this.state;
    if(cloneQuestions.length === 0){
      cloneQuestions = [{"questions":1}]
      const { navigate } = this.props.navigation
      return Alert.alert(
         "Complete!", "You solved all quizzes in the deck",
         [
           {text: 'Back to Home', onPress: () => navigate("Home")},
           {text: 'Restart Quiz', onPress: () => this.setState({
             questions: this.props.navigation.state.params.questions,
             correctQuestions: this.props.navigation.state.params.questions.slice(0),
             flipped: false,
           })}
         ]
       )
    } else{
      const rate = Math.round(this.state.correctQuestions.length / questions.length * 100) || 0
      const text1 = this.state.flipped === false ? cloneQuestions[0]["question"] : cloneQuestions[0]["answer"]
      const text2 = this.state.flipped === false ?  'Answer' : 'Question'

      return (
          <View style={styles.container}>
          <Text style={styles.percentage}>Correct Rate : {rate}%</Text>
            <TouchableOpacity onPress={this.handleFlipped}>
              <View style={styles.textView}>
                <Text style={styles.text1}>{text1}</Text>
                <Text style={styles.text2}>{text2}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGreen} onPress={this.checkAnswer}>
              <Text style={{color: 'white'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRed} onPress={this.checkAnswer}>
              <Text style={{color: 'white'}}>Incorrect</Text>
            </TouchableOpacity>

          </View>
        )
    }


  }
}
