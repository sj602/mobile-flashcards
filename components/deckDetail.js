import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../style/deckDetail';
import { getDeck } from '../utils/api';

export default class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <TouchableOpacity>
            <Ionicons onPress={() => navigation.navigate('Decks', { reload: true })}
              name={'md-arrow-back'}
              size={25}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
  })

  state = {
    title: '',
    questions: [],
    reload: false,
  };

  componentWillReceiveProps(nextProps) {
    console.log('receivedNewProps')
    // if(nextProps.navigation.state.params.reload) {
    //   getDeck(title).then((data) => {
    //     this.setState({
    //       title: title,
    //       questions: data['questions']
    //     });
    //   })
    // }
  }

  componentWillMount() {
    const { title } = this.props.navigation.state.params || this.state.title;

    getDeck(title).then((data) => {
      this.setState({
        title: title,
        questions: data['questions']
      });
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { title } = this.state;
    const { questions } = this.state;

    // console.log(this.state)

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.cards}>{questions.length} cards</Text>

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
