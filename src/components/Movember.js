import React, {
    Component
} from 'react';


export default class Movember extends Component {
    constructor(props) {
        super(props)
        this.toTheStaches = this.toTheStaches.bind(this);
        this.state = {
            isHome: true
        }
    }

    toTheStaches() {
        console.log('to the staches');
        this.setState({isHome: false});
      }

    render() {
        return <div className="Movember" >
            <h3> Welcome to Movember! </h3> 
            <div>
                <button onClick={this.toTheStaches}>Take me to the staches!</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus non feugiat enim.Proin egestas aliquet erat et aliquet.Vivamus imperdiet suscipit felis, id laoreet ligula feugiat id.In vitae purus pellentesque, venenatis mauris ac, sagittis lectus.Aliquam rutrum ex sit amet tortor pretium condimentum.Vestibulum auctor eleifend sagittis.Quisque pulvinar nisl non odio luctus elementum.Aliquam condimentum nisi a nunc feugiat scelerisque.Morbi nec tempus enim.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Aenean vel metus rutrum, ullamcorper purus congue, congue orci.</p>
            <p>Cras pharetra dolor justo, vitae cursus mi tincidunt a.In viverra faucibus enim, ac ultrices neque iaculis nec.In semper metus condimentum quam ultricies, eu rhoncus nisl volutpat.Proin sit amet neque vitae felis elementum posuere.Vivamus blandit felis at laoreet facilisis.Etiam aliquam elit quam, non mollis turpis fringilla sit amet.Donec quam erat, iaculis sit amet dapibus nec, eleifend nec massa.Donec vitae elit vestibulum, cursus sem quis, fermentum lacus.Sed sed sollicitudin augue.Quisque mauris magna, venenatis a erat ut, fermentum varius purus.Vestibulum sed sagittis tellus.Suspendisse nec metus massa.Pellentesque sit amet massa eget tellus lacinia bibendum vitae quis magna.Phasellus malesuada, diam sit amet tristique euismod.</p></div>
            </div>
    }
}