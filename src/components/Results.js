import React, { Component } from 'react'
import fire from './fire';

export default class Results extends Component {
  constructor() {
    super()
    this.state = {
      results: []
    }
    this.state = {
        isResults: false
      }
  }

  componentDidMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('votes').orderByKey();
    debugger;
    let totals = Object.values(messagesRef).reduce(function(sums,value){
        if(!sums.hasOwnProperty(value.person)){sums[value.person] = {yes:0,no:0}};
         sums[value.person] = { yes: sums[value.person].yes += (value.vote === 'YES') ?  1 : 0,
                               no: sums[value.person].no += (value.vote === 'NO') ?  1 : 0 }
         return sums;
      },{});
      this.setState({results: totals});

/*     messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database 
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ results: [message].concat(this.state.messages) });
    }) */
  }

  render() {
    //let {results} = this.state.results

    return <div>Results</div>
  }
}
