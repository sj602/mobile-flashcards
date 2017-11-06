import React, { Component } from 'react';
import {
  StyleSheet, View, Text, AsyncStorage,
  Button, Alert, TouchableOpacity, ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as helpers from '../helpers';
import { TabNavigator, StackNavigator } from 'react-navigation';



export default class Decks extends Component {
  state = {
    decks: '',
    isReady: false,
  }

  componentDidMount() {
    const KEY = 'KEY';
    AsyncStorage.getItem(KEY).then(result => {
      this.setState({
                      decks: result,
                      isReady: true,
                    })
    });
  }

  showData() {
    const { decks } = this.state;
    console.log(decks.length)
  }


  render() {
    if(!this.state.isReady) {
      return <ActivityIndicator size='large' />
    }
    const { navigate } = this.props.navigation;
    const { decks } = this.state;

    return (
      <ScrollView>
        <Button title="click" onPress={() => this.showData()} />
        <Text>decks: {decks}</Text>
        { Object.keys(decks).map((deck) => {
          return (
            <TouchableOpacity key={deck.title}
                              style={styles.container}
                              onPress={() => navigate('DeckDetail',
                                {title: deck.title, questions: deck.questions})
                              }>
              <View style={styles.deck}>
                <Text style={styles.title}>{deck}</Text>
              </View>
            </TouchableOpacity>
          )})
        }


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  deck: {
    alignItems: 'center',
    paddingBottom: 70,
    backgroundColor: '#fff',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  cards: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center'
  },
});
