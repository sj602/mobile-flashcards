import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, TouchableOpacity,
  Alert
} from 'react-native';

export default class Quiz extends Component {
  state = {
    questions: [],
    flipped: false,
    correctQuestions: [],
  };

  componentDidMount() {
    const { questions } = this.props.navigation.state.params;

    this.setState({ questions });

    this.handleFlipped = this.handleFlipped.bind(this)
  }

  handleFlipped() {
    if(this.state.flipped === false){
      this.setState({ flipped: true })
    }else{
      this.setState({ flipped: false })
    }
  }

  render() {
    const { questions } = this.state;
    const rate = Math.round(this.state.correctQuestions.length / this.state.questions.length * 100) || 0

    return (
        <View style={styles.container}>
        <Text style={styles.percentage}>Correct Rate : {rate}%</Text>
          <TouchableOpacity onPress={this.handleFlipped}>
            { questions.map(q => {

              const text1 = ( this.state.flipped === false ? q['question'] : q['answer'] )
              const text2 = ( this.state.flipped === false ?  'Answer' : 'Question' )
              return (
                <View>
                  <Text style={{fontSize: 30}}>{ text1 }</Text>
                  <Text style={{fontSize: 20, color: 'red'}}>{ text2 }</Text>
                </View>
              )
            }) }
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGreen}>
            <Text style={{color: 'white'}}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRed}>
            <Text style={{color: 'white'}}>Incorrect</Text>
          </TouchableOpacity>

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  percentage: {
    paddingBottom: 50,
  },

  question: {
    fontSize: 30,
  },

  buttonGreen: {
    width: 150,
    height: 30,
    backgroundColor: 'green',
    marginTop: 40,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonRed: {
    width: 150,
    height: 30,
    backgroundColor: 'red',
    marginTop: 20,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
  }
})
