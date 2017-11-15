import React, { Component } from 'react'
import './App.css'

import Buttons from './components/Buttons'
import CardDeck from './components/CardDeck'

const MUSTACHES = [
            {   
                img: "/alex.jpg",
                fullName: "Alex Swarthout",
                practice: "Internal",
                location: "Chicago"
            },
            {   
                img: "/jason.jpg",
                fullName: "Jason",
                practice: "Internal",
                location: "Chicago"
            },
            {   
                img: "/brad.jpg",
                fullName: "brad",
                practice: "Internal",
                location: "Chicago"
            },
            {   
                img: "/jim.jpg",
                fullName: "jim",
                practice: "Internal",
                location: "Chicago"
            },
            {   
                img: "/johnd.jpg",
                fullName: "Alex Swarthout",
                practice: "Internal",
                location: "Chicago"
            },
            {   
                img: "/josh.jpg",
                fullName: "Alex Swarthout",
                practice: "Internal",
                location: "Chicago"
            },
            {   
                img: "/mike.jpg",
                fullName: "Alex Swarthout",
                practice: "Internal",
                location: "Chicago"
            }
        ];            
          //     " "/brad.jpg", "/jason.jpg", "/jim.jpg", "/johnd.jpg", "/josh.jpg", "/michael.jpg", "/mike.jpg", "/mikeb.jpg", "/paul.jpg", "/tim.jpg"]

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: MUSTACHES
    }
  }

  componentDidUpdate() {
    if (this.state.cards.length === 0) this.setState({cards: MUSTACHES})
  }

  shiftCard() {
    let cards = this.state.cards.slice()
    cards.splice(0,1)
    this.setState({cards})
  }

  render() {
    return (
      <div className="App">
        <CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
        <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
      </div>
    )
  }
}

export default App;
