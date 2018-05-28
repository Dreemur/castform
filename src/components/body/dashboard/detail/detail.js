import React, { Component } from 'react';
import './detail.css';
import Castform from '../../../../images/Castform.png';
import castform_fire from '../../../../images/castform_fire.png';
import castform_water from '../../../../images/castform_water.png';
import castform_wind from '../../../../images/castform_wind.png';

class Detail extends Component{
    constructor(){
        super();
        this.state = {
            info : {},
            city : '',
            country : '',
            temp : '',
            main : '',
            description : '',
            humidity : '',
            pressure : '',
            temp_min : '',
            temp_max : '',
            icon : {},
        }
    }

    componentWillMount(){
        this.setState({
            info : this.props.info,
            country : this.props.info.sys.country,
            city : this.props.info.name,
            temp : this.props.info.main.temp,
            main : this.props.info.weather[0].main,
            description : this.props.info.weather[0].description,
            humidity : this.props.info.main.humidity,
            pressure : this.props.info.main.pressure,
            temp_min : this.props.info.main.temp_min,
            temp_max : this.props.info.main.temp_max,
        })
        this.setState({icon : this.props.load()});
    }

    render(){
        return(
            <div className="info">
                <h1>{this.state.city},{this.state.country}</h1>
                <div className="ppal_info" >                    
                    <img src={this.state.icon} alt="icon" />
                    <h2>{this.state.temp}°F</h2>
                </div> 
                <div className="second_info">
                    <br />
                    <label>Description:</label> {this.state.description}<br />                  
                    <label>Humidity:</label> {this.state.humidity}%<br />                 
                    <label>Max:</label> {this.state.temp_max}°F<br />             
                    <label>Min:</label> {this.state.temp_min}°F<br />                         
                </div>
                <div className="next5">
                    <h1>Next 5 days</h1>    
                </div>
                <div className="buttons">
                    <button onClick={this.props.close}>Close</button>                 
                </div>
            </div>
        );
    }
}

export default Detail;