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
        <div className="Movember" >
        <h3> Welcome to Movember! </h3> 
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus non feugiat enim.Proin egestas aliquet erat et aliquet.Vivamus imperdiet suscipit felis, id laoreet ligula feugiat id.In vitae purus pellentesque, venenatis mauris ac, sagittis lectus.Aliquam rutrum ex sit amet tortor pretium condimentum.Vestibulum auctor eleifend sagittis.Quisque pulvinar nisl non odio luctus elementum.Aliquam condimentum nisi a nunc feugiat scelerisque.Morbi nec tempus enim.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Aenean vel metus rutrum, ullamcorper purus congue, congue orci.</p>
        <p>Cras pharetra dolor justo, vitae cursus mi tincidunt a.In viverra faucibus enim, ac ultrices neque iaculis nec.In semper metus condimentum quam ultricies, eu rhoncus nisl volutpat.Proin sit amet neque vitae felis elementum posuere.Vivamus blandit felis at laoreet facilisis.Etiam aliquam elit quam, non mollis turpis fringilla sit amet.Donec quam erat, iaculis sit amet dapibus nec, eleifend nec massa.Donec vitae elit vestibulum, cursus sem quis, fermentum lacus.Sed sed sollicitudin augue.Quisque mauris magna, venenatis a erat ut, fermentum varius purus.Vestibulum sed sagittis tellus.Suspendisse nec metus massa.Pellentesque sit amet massa eget tellus lacinia bibendum vitae quis magna.Phasellus malesuada, diam sit amet tristique euismod.</p></div>
        <button onClick={props.onClick}>
        To the Staches!
      </button>        
        </div>

    );
  }

export default App;
