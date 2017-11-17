import React, { Component } from 'react'
import fire from './fire';

export default class Results extends Component {
  constructor() {
    super()
    this.state = {
      results: []
    }
  }

  count = 0;

  componentDidMount() {
    this.timerID = setInterval(
        () => {
    //get data and set state.results.
    let self = this;
    fire.database().ref('votes').once('value')
        .then(snapshot => {
            let obj = snapshot.val();
            let totals = Object.values(obj).reduce(function(sums,value){
                if(!sums.hasOwnProperty(value.person)){sums[value.person] = {yes:0,no:0}};
                sums[value.person] = { 
                        yes: sums[value.person].yes += (value.vote === 'YES') ?  1 : 0,
                        no: sums[value.person].no += (value.vote === 'NO') ?  1 : 0 
                    }
                return sums;
            },{});
            

            self.setState({results: totals});        
    }),
       1000 });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {

    return <div>
        <h3>Results</h3>
        <ul>
          { /* Render the list of messages */
            Object.keys(this.state.results).map( key => 
                <li>{key} | {this.state.results[key].yes}</li>
            )
          }
        </ul>

    </div>
  }
}
