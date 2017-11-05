import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage,
  Button, Alert, TouchableOpacity, } from 'react-native';
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
      console.log(result);
    });
  }

  showData() {
    console.log(this.state.storageData)
  }


  render() {
    const { navigate } = this.props.navigation;
    const { storageData } = this.state;

    return (
      <View>
        <Text>AsyncStorage Data: {this.state.storageData}</Text>



        <Button title="Click" onPress={() => Alert.alert('clicked')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  deck: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
});
