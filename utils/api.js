// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card,
 // and will add the card to the list of questions for the deck with the associated title.

import { AsyncStorage } from 'react-native';

export const KEY = 'KEY';

export const getDecks = () => {
  AsyncStorage.getItem(KEY).then(result => JSON.parse(result))
    .then(data => {
      this.setState({ decks: data })})
    .then(() => this.setState({ isReady: true, hasDecks: true }))
};

export const getDeck = (title) => {
  AsyncStorage.getItem(KEY).then(result => JSON.parse(result))
    .then(data => data[title]);
}

export const saveDeckTitle = (title) => {
  let obj = {};
  obj[title] = {
    title: title,
    questions: [],
  };
  AsyncStorage.mergeItem(KEY, obj);
}

export const addCardToDeck = (title, card) => {
  let obj = {};
  obj[title] = {
    title: title,
    questions: [{ card }],
  };
  AsyncStorage.mergeItem(KEY, obj);
}
