import React, { Component } from 'react';
import './head.css';
import Title from './title/title';
import Add from './add/add';

class Header extends Component {
    render() {
        return(
            <header className="App-header">             
                <Title />
                <Add data={this.props.data}/> 
            </header>
        );
    }
}

export default Header;