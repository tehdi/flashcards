import React, { Component } from 'react';
import { cardData } from './data/cardData.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardIds: [1, 2],
      currentCardIdIndex: 0
    }
  }

  render() {
    const card = cardData[this.state.currentCardIdIndex];

    return (
      <div className="App">
        <Flashcard key={card.id} category={card.category} prompt={card.prompt} response={card.response} />

        <button onClick={this.nextCard}>Next Card</button>
      </div>
    );
  }

  nextCard = () => {
    const currentCardIdIndex = this.state.currentCardIdIndex;
    const nextCardIdIndex = currentCardIdIndex + 1;
    if (nextCardIdIndex >= this.state.cardIds.length) {
      console.log("All done!"); // TODO do "done" better
    } else {
      this.setState({ currentCardIdIndex: nextCardIdIndex })
    }
  }
}

class Flashcard extends Component {
  render() {
    return (
      <div className="flashcard">
        <div className="card-category">{this.props.category}</div>
        <div className="card-prompt">{this.props.prompt}</div>
        <div className="card-response">{this.props.response}</div>
      </div>
    );
  }
}

export default App;
