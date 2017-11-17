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
                img: "/JimNoellsh.jpg",
                fullName: "JimNoellsh",
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
        <p className="mainTitle">Vote for your favorite stache to determine the 2017 Movember winner!</p>
        <p className="subTitle">you can vote for each stache as many times as you want</p>
        </div>
        <button className="startButton" onClick={props.onClick}>
        Start Here
      </button>        
      <button className="startButton" onClick={props.show}>
        Show Results
      </button>         
        </div>
    );
  }

  /* 
  #################### results obj
  var obj = JSON.parse(text); 
console.dir(Object.values(obj.votes));
var totals = Object.values(obj.votes).reduce(function(sums,value){
  if(!sums.hasOwnProperty(value.person)){sums[value.person] = {yes:0,no:0}};
   sums[value.person] = { yes: sums[value.person].yes += (value.vote == 'YES') ?  1 : 0,
                         no: sums[value.person].no += (value.vote == 'NO') ?  1 : 0 }
   return sums;
},{});
  
console.dir(totals);
 */

export default App;
