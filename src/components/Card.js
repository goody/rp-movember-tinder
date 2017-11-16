import React, { Component } from 'react'
import interact from 'interactjs'
import fire from './fire';
import TWEEN from '@tweenjs/tween.js'

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}

export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    let inter = interact('#card' + this.props.idx)
    inter.draggable({
      inertia: true,
      onmove: this.handleDrag.bind(this),
      onend: this.handleDragEnd.bind(this)
    })

    requestAnimationFrame(animate);
  }

  swipeVote(person, vote){
    /* Send the message to Firebase */
    fire.database().ref('votes').push( {person: person, vote: vote} );
  }


  handleDrag (event) {
     var x = (parseFloat(this.state.x) || 0) + event.dx,
         y = (parseFloat(this.state.y) || 0) + event.dy;
     // update the posiion attributes
     this.setState({x, y})
   }

    handleDragEnd(event) {
        let positionX = event.pageX;
        let card = this;
        let leftBound = -50;
        let rightBound = window.innerWidth + 50;
        if (positionX < rightBound && positionX > leftBound) {
            var tween = new TWEEN.Tween({ x: this.state.x, y: this.state.y })
            tween.to({ x: 0, y: 0 }, 250);
            tween.onUpdate(function () {
                card.setState({ x: this.x, y: this.y })
            });
            tween.start();
        } else if (positionX > rightBound) {
            console.log('SWIPE YES');
            this.swipeVote(card.props.idx, 'YES');
            this.props.shiftCard();
        } else if (positionX < leftBound) {
            console.log('SWIPE NO');
            this.swipeVote(card.props.idx, 'NO');
            this.props.shiftCard();
        }
    }

  render() {
    let {x, y} = this.state
    let cardStyle = {
        transform: 'translate(' + x + 'px, ' + y + 'px)',
    }

    return <div id={"card"+ this.props.idx} className="Card" style={cardStyle} >
      <img src={process.env.PUBLIC_URL + this.props.person.img} alt="{this.props.person.fullName}" />
      <div className="card-info">
        <div className="name">{this.props.person.fullName}</div>
        <div className="location-practice">{this.props.person.location} | {this.props.person.practice}</div>
      </div>
    </div>
  }
}
