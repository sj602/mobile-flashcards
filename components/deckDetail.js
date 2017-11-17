import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, TouchableOpacity,
} from 'react-native';

export default class DeckDetail extends Component {
  state = {
    title: '',
    questions: [],
    new_questions: [],
    reload: false,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.navigation.state.params.reload) {
      const KEY = 'KEY';
      const { title } = this.state
      AsyncStorage.getItem(KEY).then(result => JSON.parse(result))
        .then(data => {
          console.log(title, this.props.navigation.state.param.new_questions)
        })
    }
  }


  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    const { questions } = this.props.navigation.state.params;
    this.setState({ title, questions });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { title } = this.state;
    const { questions } = this.state;
    // const number = this.state.questions.length;
    // console.log('deck detail: ', title);
    return (
      <View>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>

        <TouchableOpacity style={styles.buttonWhite} onPress={() => navigate('New_Question',
          {title: title, questions: questions})}>
          <Text style={{color:'black'}}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBlack} onPress={() => navigate('Quiz',
          {questions: questions})}>
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
    // flexDirection: 'column',
    marginTop: 10,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonWhite: {
    width: 150,
    height: 30,
    backgroundColor: 'white',
    marginTop: 100,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black'
  }
});
