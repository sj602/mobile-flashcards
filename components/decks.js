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
    reload: false,
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

  componentWillMount() {
    const KEY = 'KEY';
    AsyncStorage.getItem(KEY).then(result => JSON.parse(result))
      .then(data => {
        console.log(data)
        if( data === null ){
          this.setState({ hasDecks: false })
        } else {
          this.setState({ decks: data, hasDecks: true })
        }
      })
      .then(() => this.setState({ isReady: true }))
  }

  render() {
    if(!this.state.isReady) {
      return <ActivityIndicator size='large' />
    }

    if(!this.state.hasDecks) {
      const { navigate } = this.props.navigation;
      Alert.alert(
        "HEY", "You don't have any decks yet, Go create one!",
        [{text: 'OK', onPress: () => navigate("New_Deck")}]
      )
    }

    // console.log(this.state.decks)


    const { navigate } = this.props.navigation;
    const { decks } = this.state;
    // console.log(decks['React']['questions'])
    return (
      <ScrollView>
        <Button title='Clear Storage' onPress={() => {
          this.setState({ decks: {} })
          AsyncStorage.clear()}} />
        { Object.keys(decks).map((deck) => {
          return (
            <TouchableOpacity key={deck}
                              style={styles.container}
                              onPress={() => navigate('DeckDetail',
                                {title: decks[deck].title, questions: decks[deck].questions})
                              }>
              <View style={styles.deck}>
                <Text style={styles.title}>{decks[deck].title}</Text>
                <Text style={styles.cards}>{decks[deck].questions.length} cards</Text>
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
