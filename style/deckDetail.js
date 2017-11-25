import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  deckTitle: {
    fontSize: 30,
  },

  cards: {
    color: 'gray',
    marginBottom: 100,
    marginTop: 20,
  },

  buttonBlack: {
    width: 150,
    height: 30,
    backgroundColor: 'black',
    // flexDirection: 'column',
    marginTop: 10,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonWhite: {
    width: 150,
    height: 30,
    backgroundColor: 'white',
    marginTop: 100,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black'
  }
});
