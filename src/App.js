import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/head';
import Body from './components/body/body';
import Footer from './components/footer/footer';

class App extends Component {
    constructor(){
      super();
      this.state = {
        ciudad : '',
      }
    }

  passSeed = (val) => {
    console.log("catch app",val)
    this.setState({ciudad: val});   
  }

  render() {
    return (
      <div className="App">
        <Header data={this.passSeed}/>    
        <Body info={this.state.ciudad}/>
        <Footer />
      </div>
    );
  }
}

export default App;
