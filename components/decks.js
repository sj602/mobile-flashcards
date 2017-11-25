import React, { Component } from 'react';
import {
  View, Text, AsyncStorage,
  Button, Alert, TouchableOpacity, ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getDecks } from '../utils/api';
import { TabNavigator, StackNavigator } from 'react-navigation';
import styles from '../style/decks';

export default class Decks extends Component {
  state = {
    decks: {},
    isReady: false,
    hasDecks: false,
    reload: false,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.navigation.state.params.reload) {
      getDecks()
        .then(data => {
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
    getDecks()
      .then(data => {
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
      <View style={{backgroundColor: 'white'}}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <TouchableOpacity
                          onPress={() => {
                          this.setState({ decks: {} })
                          AsyncStorage.clear()}}
                          >
            <View style={styles.deleteDecks}>
              <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>Delete All Decks</Text>
            </View>
          </TouchableOpacity>
          <View style={{height: 40}}/>
          { Object.keys(decks).map((deck) => {
            return (
              <TouchableOpacity key={decks[deck].title}
                                style={{ flexDirection: 'row' }}
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
      </View>
    );
  }
}
