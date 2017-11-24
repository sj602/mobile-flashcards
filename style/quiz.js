import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  percentage: {
    paddingBottom: 50,
  },

  question: {
    fontSize: 30,
  },

  buttonGreen: {
    width: 150,
    height: 30,
    backgroundColor: 'green',
    marginTop: 40,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonRed: {
    width: 150,
    height: 30,
    backgroundColor: 'red',
    marginTop: 20,
    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
  }
})
