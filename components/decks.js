import React, { Component } from 'react';
import {
  StyleSheet, View, Text, AsyncStorage,
  Button, Alert, TouchableOpacity, ScrollView
} from 'react-native';
import * as helpers from '../helpers';
import DeckDetail from './deckDetail';



export default class Decks extends Component {
  state = {
    storageData: '',
  }

  componentDidMount() {
    const KEY = 'KEY';
    AsyncStorage.getItem(KEY).then(result => {
      this.setState({ storageData: result })
    });
    console.log(this.state.storageData)
  }

  showData() {
    const { storageData } = this.state;
    console.log(storageData.length)
  }


  render() {
    const { navigate } = this.props.navigation;
    const { storageData } = this.state;

    return (
      <ScrollView>
        <Button title="click" onPress={() => this.showData()} />
        <Text>AsyncStorage Data: {this.state.storageData}</Text>
        { Object.keys(storageData).map((deck) => {
          return (
            <TouchableOpacity style={styles.container} onPress={() => navigate(DeckDetail)}>
              <View style={styles.deck}>
                <Text key={deck} style={styles.title}>{deck}</Text>
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
  },

  cards: {
    fontSize: 15,
  },
});
