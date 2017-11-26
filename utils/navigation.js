import { TabNavigator, StackNavigator } from 'react-navigation';


const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  New_Deck: {
    screen: New_Deck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }
}, {
  navigationOptions: {
    header: null // header null해서 메인화면의 stack navigation header부분이 없어졌음
  }
}
);

const Stacks = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'Deck Detail'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  },
  New_Question: {
    screen: New_Question,
    navigationOptions: {
      title: 'New Question'
    }
  }
})
