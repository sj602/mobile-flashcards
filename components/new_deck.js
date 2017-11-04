import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage, Alert, Button, StyleSheet } from 'react-native';


export default class New_Deck extends Component {
  state = {
    deck: '',
  }

  submitDeck(value) {
    // if(AsyncStorage.getItem(value)){
    //   Alert.alert(`Try Again`, `There is already ${value} in your decks`);
    // } else (
    const STORAGE_KEY = 'STORAGE_KEY';
      AsyncStorage.mergeItem(STORAGE_KEY, {
        value: {
          'questions': {

          }
        }
      });
    // )
    Alert.alert(this.state.deck)
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
