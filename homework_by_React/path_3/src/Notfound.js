import React, {Component} from 'react';
import not from './not.svg';
import "./Nofound.css";

// import img from './adidas.jpg';
class Notfound extends Component {


    render() {


        return (
            <div >
                <img className={'nofound'} src={not} alt=""/>
            </div>

        )
    }
}

export default Notfound;