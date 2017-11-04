import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage,
  Button, Alert, TouchableOpacity, } from 'react-native';
import * as helpers from '../helpers';



export default class Decks extends Component {
  state = {
    storageData: '',
  }

  componentDidMount() {
    const STORAGE_KEY = 'STORAGE_KEY';
    AsyncStorage.setItem(STORAGE_KEY, {});
    const data = AsyncStorage.getItem(STORAGE_KEY).then(result => {
      return result.json()
    })
    console.log(data)
    this.setState({storageData: data})
  }

  showData() {
    console.log(this.state.storageData)
  }


  render() {
    return (
      <View>
        <Text>AsyncStorage Data: </Text>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
          <Text>DECK1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
          <Text>DECK2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
          <Text>DECK3</Text>
          </View>
        </TouchableOpacity>
        <Button title="Click" onPress={() => Alert.alert('clicked')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
});
