import React, { Component } from 'react'
import './App.css'

import Buttons from './components/Buttons'
import CardDeck from './components/CardDeck'
import Results from './components/Results'

const MUSTACHES = [
            {   
                img: "/TimStahl.jpg",
                fullName: "Tim Stahl",
                practice: "Creative",
                location: "Chicago"
            },
            {   
                img: "/RyanCorliss.jpg",
                fullName: "Ryan Corliss",
                practice: "Sharepoint",
                location: "Chicago"
            },            
            {   
                img: "/BillFinn.jpg",
                fullName: "Bill Finn",
                practice: "Content Strategy",
                location: "Chicago"
            },            
            {   
                img: "/BradSchneider.jpg",
                fullName: "Brad Schneider ",
                practice: "Co-Founder",
                location: "Chicago"
            },            
            {   
                img: "/JimNoellsch.jpg",
                fullName: "Jim Noellsch",
                practice: "CMS",
                location: "Chicago"
            },
            {   
                img: "/AaronStarkston.jpg",
                fullName: "Aaron Starkston",
                practice: "App Dev",
                location: "Chicago"
            },
            {   
                img: "/MikeMcDermott.jpg",
                fullName: "Mike McDermott",
                practice: "Managed Services",
                location: "Chicago"
            },
            {   
                img: "/ZachQuinn.jpg",
                fullName: "Zach Quinn",
                practice: "Managed Services",
                location: "Chicago"
            },            
            {   
                img: "/TimKippley.jpg",
                fullName: "Tim Kippley",
                practice: "Solutions",
                location: "Chicago"
            },            
            {   
                img: "/BradKramer.jpg",
                fullName: "Brad Kramer",
                practice: "PMO",
                location: "Chicago"
            },
            {   
                img: "/JasonShutters.jpg",
                fullName: "Jason Shutters",
                practice: "BI",
                location: "Chicago"
            },
            {   
                img: "/ScotGoodhart.jpg",
                fullName: "Scot Goodhart",
                practice: "Salesforce",
                location: "Chicago"
            },            
            {   
                img: "/MikeJohnson.jpg",
                fullName: "Mike Johnson",
                practice: "Managed Services",
                location: "Chicago"
            },
            {   
                img: "/ChetPovin.jpg",
                fullName: "Chet Povin",
                practice: "Managed Services",
                location: "Chicago"
            }         
        ];            

class App extends Component {
  constructor() {
    super()
    this.handleWelcomeClick = this.handleWelcomeClick.bind(this);
    this.handleResultsClick = this.handleResultsClick.bind(this);
    this.state = {
      cards: this.shuffleDeck(MUSTACHES),
      isHome: true,
      isResults: false
    }
  }

  handleWelcomeClick() {
    this.setState({isHome: false});
  }

  handleResultsClick() {
    this.setState({isHome: false});
      this.setState({isResults: true});
  }

  componentDidUpdate() {
    if (this.state.cards.length === 0) this.setState({cards: this.shuffleDeck(MUSTACHES)})
  }

  shuffleDeck(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  shiftCard() {
    let cards = this.state.cards.slice()
    cards.splice(0,1)
    this.setState({cards})
  }

    render() {
        const isHome = this.state.isHome;
        const isResults = this.state.isResults;
        let page = null;
        if (isHome) {
            page = <WelcomePage onClick={this.handleWelcomeClick} show={this.handleResultsClick} />;
        } else if (isResults) {
            page = <Results />
        } else {
            page = <div className="App">
            <div className="vote">Vote</div>
            <CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
            <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} /></div>;
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
        <p className="mainTitle">Vote for your favorite stache to determine the 2018 Movember winner!</p>
        <p className="subTitle">you can vote for each stache as many times as you want</p>
        </div>
        <button className="startButton" onClick={props.onClick}>
        Start Here
      </button>        
      <button className="startButton" onClick={props.show}>
        Live Results
      </button>      
      
        </div>
    );
  }


export default App;
