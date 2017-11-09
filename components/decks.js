import React, { Component } from 'react';
import {
  StyleSheet, View, Text, AsyncStorage,
  Button, Alert, TouchableOpacity, ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as api from '../utils/api';
import { TabNavigator, StackNavigator } from 'react-navigation';



export default class Decks extends Component {
  state = {
    decks: {},
    isReady: false,
    hasDecks: false,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.navigation.state.params.reload) {
      const KEY = 'KEY';
      AsyncStorage.getItem(KEY).then(result => JSON.parse(result))
        .then(data => {
          this.setState({ decks: data })})
        .then(() => this.setState({ isReady: true, hasDecks: true }))
    }
  }

  componentDidMount() {
    const KEY = 'KEY';
    AsyncStorage.getItem(KEY).then(result => JSON.parse(result))
      .then(data => {
        this.setState({ decks: data })})
      .then(() => this.setState({ isReady: true, hasDecks: true }))
  }

  render() {
    if(!this.state.isReady) {
      return <ActivityIndicator size='large' />
    }

    if(!this.state.hasDecks) {
      const { navigate } = this.props.navigation;
      Alert.alert(
        "HEY", "You dont have any decks yet, Go create one!",
        [{text: 'OK', onPress: () => navigate("New_Deck")}]
      )
    }


    const { navigate } = this.props.navigation;
    const { decks } = this.state;
    console.log(decks);
    return (
      <ScrollView>
        <Button title='Clear Storage' onPress={() => AsyncStorage.clear()} />
        { Object.keys(decks).map((deck) => {
          return (
            <TouchableOpacity key={deck}
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
