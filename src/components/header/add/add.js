import React, { Component } from 'react';
import './add.css';

const ciudad = '';

class Add extends Component {
    constructor(){
        super();
        this.state = {
            click : 'false',
        }    
    }

    onClick = (event) => {
        event.preventDefault();
        this.setState({click : 'true'})
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.ciudad = event.target.elements.id.value;
        console.log(this.ciudad);     
        this.setState({click : 'false'})
        this.props.data(this.ciudad);
    }

    render() {
        return(
            <div className="buttonAdd">
                {this.state.click === 'false' ? 
                    <button onClick={this.onClick}>Add</button>
                :
                <form onSubmit={this.onSubmit}>
                    <input type="text" id="id" placeholder="Search" />
                    <input type="submit" value="Search" />
                </form>}
            </div>
        );
    }
}

export default Add;