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
    this.handleWelcomeClick = this.handleWelcomeClick.bind(this);
    this.state = {
      cards: MUSTACHES,
      isHome: true
    }
  }

  handleWelcomeClick() {
    this.setState({isHome: false});
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
    const isHome = this.state.isHome;
    let page = null;
    if(isHome){
            page =  <WelcomePage onClick={this.handleWelcomeClick} />;
    } else {
        page = <div className="App"><CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} /><Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} /></div>;
    }
    return (
          <div className="App">
            {page}
          </div>
    )
  }
}

function WelcomePage(props) {
    return (
        <div className="welcome" >
        <img className="rpLogo" src={process.env.PUBLIC_URL + '/group-2.png'} alt="RP Movemer" />
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus non feugiat enim.Proin egestas aliquet erat et aliquet. Morbi nec tempus enim.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Aenean vel metus rutrum, ullamcorper purus congue, congue orci.</p>
        </div>
        <button className="startButton" onClick={props.onClick}>
        Start Here
      </button>        
        </div>

    );
  }

export default App;
