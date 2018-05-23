import React, { Component } from 'react';
import './body.css';
import Dash from './dashboard/dash';

class Body extends Component {
    constructor(){
        super();       
    }
 
    render() {  
        const numbers = [1,2,3,4,5,6,7,8];
        const listNumbers = numbers
            .map(number => <Dash key={number} data={this.props.info} id={number}/>)

        return this.props.info ? 
            <div className="content">                       
                {listNumbers}
            </div>
        :            
            <div className="loading">   
                <h1>Loading</h1>
            </div>
        
    }
}

export default Body;