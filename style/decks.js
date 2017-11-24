import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  deleteDecks: {
    backgroundColor: 'deepskyblue',
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center'
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  deck: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70,
    backgroundColor: 'white',
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
