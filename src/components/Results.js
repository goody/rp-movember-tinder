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

    let self = this;
    fire.database().ref('votes').once('value')
        .then(snapshot => {
            let obj = snapshot.val();
            let arr = [];
            let totals = Object.values(obj).reduce(function(sums,value){
                if(!sums.hasOwnProperty(value.person)){sums[value.person] = {yes:0,no:0}};
                sums[value.person] = { 
                        yes: sums[value.person].yes += (value.vote === 'YES') ?  1 : 0,
                        no: sums[value.person].no += (value.vote === 'NO') ?  1 : 0 
                    }
                return sums;
            },{});
            Object.keys(totals).map(function (key, idx) {
                let o = { name: key, total: totals[key].yes };
                arr.push(o);
            });
            arr = arr.sort(function(a,b) {return (a.total < b.total) ? 1 : ((b.total < a.total) ? -1 : 0);} );
            self.setState({results: arr});        
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

    makeAname(combinedName) {
        let fullName = '';
        let arr = combinedName.split(/(?=[A-Z])/);
        if (arr.length === 1) {
            fullName = arr[0];
        } else {
            fullName = arr[0] + ' ' + arr[1];
        }
        return fullName
    }

  render() {
    return <div className="results">
        <h3>Results</h3>
        <div>
          { /* Render the list of messages */
            this.state.results.map( (val, idx) => 
                <div className="resultsItem"><span>{idx+1}</span>{val.name} | {val.total}</div>
            )
          }
        </div>

    </div>
  }
}
