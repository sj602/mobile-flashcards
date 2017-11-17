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
          console.log(data)
          if( data === null ){
            this.setState({ hasDecks: false })
          } else {
            this.setState({ decks: data, hasDecks: true })
          }
        })
        .then(() => this.setState({ isReady: true }))
    }
  }

  componentDidMount() {
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

    const { navigate } = this.props.navigation;
    const { decks } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  deck: {
    flexDirection: 'column',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70,
    backgroundColor: '#fff',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    shadowRadius: 3,
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
