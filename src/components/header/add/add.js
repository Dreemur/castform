import React, { Component } from 'react';
import './add.css';
import Api from '../../http-services/api-w';

class Add extends Component {
    constructor(){
        super();
        this.state = {
            click : 'false',
            weather : {},
        }    
    }

    callApi = (city) => {
        console.log("call Api: ",city)
        Api.getWeather(city)
        .then(res => {
            this.setState({
                weather :res.data,
            });
            this.props.data(this.state.weather);
        })
        .catch(error => {
            console.log("error handle: ",error.response.data.cod)
            if(error.response.data.cod === '404')
                alert("City was not found");
            else if(error.response.data.cod !== '200')
                alert("Something went wrong, try again!");
        });
    }

    onClick = (event) => {
        event.preventDefault();
        this.setState({click : 'true'})
    }

    onSubmit = (event) => {
        event.preventDefault();
        const city = event.target.elements.id.value;         
        this.setState({click : 'false'})
        this.callApi(city);
    }

    sum = (a,b) => {
        return a+b;
    }

    render() {
        return(
            <div className="buttonAdd">
                {this.state.click === 'false' ? 
                    <button onClick={this.onClick}>Add</button>
                :
                <form onSubmit={this.onSubmit}>
                    <input className="text" type="text" id="id" placeholder="Search" />
                    <input type="submit" value="Search" />
                </form>}
            </div>
        );
    }
}

export default Add;