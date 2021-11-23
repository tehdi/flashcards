import React, { Component } from 'react';
import { cardData } from './data/cardData.js'
import './App.css';

class App extends Component {
  render() {
    const flashcards = cardData.map(card => {
      return <Flashcard key={card.id} category={card.category} prompt={card.prompt} response={card.response} />
    });

    return (
      <div className="App">
        { flashcards }
      </div>
    );
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
