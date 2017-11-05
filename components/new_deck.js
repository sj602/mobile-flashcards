import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage,
   Alert, Button, StyleSheet } from 'react-native';
import * as helpers from '../helpers';

export default class New_Deck extends Component {
  constructor(){
    super();
    this.state = {
      deck: '',
    };
    this.submitDeck = this.submitDeck.bind(this);
  }

  submitDeck(value) {
    const KEY = 'KEY';
    let { deck } = this.state;
    // if(AsyncStorage.getItem(value)){
    //   Alert.alert(`Try Again`, `There is already ${value} in your decks`);
    // } else (
    let obj = {};
    obj[deck] = {
      questions: {},
    };
    AsyncStorage.mergeItem(KEY, JSON.stringify(obj));
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput placeholder="Deck Title" textAlign="center" onChangeText={deck => this.setState({ deck })} />
        <Button title='Create New Deck!' onPress={this.submitDeck} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center'
  },

});
