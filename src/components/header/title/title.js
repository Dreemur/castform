import React, { Component } from 'react';
import './title.css';
import Castform from '../../../images/Castform.png';

class Title extends Component {
    render() {
        return(
            <div className="titulo">
                <img src={Castform} alt="castform" />
                <h3>Castform</h3>
            </div>
        );
    }
}

export default Title;