import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage,
   Alert, Button, StyleSheet, TouchableOpacity,
   KeyboardAvoidingView
} from 'react-native';
import * as api from '../utils/api';
import styles from '../style/new_deck';

export default class New_Deck extends Component {
  constructor(){
    super();
    this.state = {
      deck: '',
    };
    this.submitDeck = this.submitDeck.bind(this);
  }

  submitDeck() {
    const KEY = 'KEY';
    let { deck } = this.state;
    let obj = {};
    obj[deck] = {
      title: deck,
      questions: [],
    };
    AsyncStorage.mergeItem(KEY, JSON.stringify(obj));
    this.textInput.clear();

    const { navigate } = this.props.navigation;
    Alert.alert(
      "WOW", "You created one deck!",
      [{text: 'OK', onPress: () => navigate("Decks", { reload: true })}])


    // this.props.navigation.goBack();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.textTitle}>What is the title of your new deck?</Text>
        <TextInput style={{width: 250}} placeholder="Deck Title" ref={ref => this.textInput = ref} textAlign="center" onChangeText={deck => this.setState({ deck })} />
        <TouchableOpacity style={styles.submit} onPress={this.submitDeck}>
            <Text style={styles.textSubmit}>Create New Deck!</Text>
        </TouchableOpacity>
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    )
  }
}
