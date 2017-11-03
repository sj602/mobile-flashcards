// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'STORAGE_KEY';

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(data => JSON.parse(data));
};

export const getDeck = (id) => {
  return
}

export const saveDeckTitle = (title) => {
  return
}

export const addCardToDeck = (title, card) => {
  return
}
