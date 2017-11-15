import React, { Component } from 'react';

import Card from './Card'

export default class CardDeck extends Component {
  render() {
    let {cards} = this.props
    return <div className="CardDeck">
      {cards && cards.slice(0).reverse().map((card, idx) => {
        return <Card person={card} idx={card.img.substring(1, card.img.length - 4)} shiftCard={this.props.shiftCard} key={idx} />
      })}
    </div>
  }
}
