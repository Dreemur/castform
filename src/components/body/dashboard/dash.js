import React, { Component } from 'react';
import './dash.css';
import Castform from '../../../images/Castform.png';
import castform_fire from '../../../images/castform_fire.png';
import castform_water from '../../../images/castform_water.png';
import castform_wind from '../../../images/castform_wind.png';
import ReactModal from 'react-modal';
import Api from '../../http-services/api-w';

class Dash extends Component {
    constructor(){
        super();
        this.state = {
            weather: {},
            country: '',
            temp: '',
            icon: '',
            showModal : false,
        }
    }

    componentDidMount(){
        console.log("dash catch: ",this.props.data);
        Api.getWeather(this.props.data)
        .then(res => {
            this.setState({
                weather :res.data,
                country : res.data.sys.country,
                temp : res.data.main.temp,
                icon : res.data.weather[0].main
            })            
            console.log("country",this.state.weather.sys.country);
        })
        // .catch(alert('Ciudad no encontrada'));   
    }
    
    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
      }

    render(){
        return(
            <div className="forecast" onClick={this.handleOpenModal}>
                <div className="div-ppal">    
                    <br />
                    {this.state.icon === 'Rain'|| this.state.icon === 'Haze' ?
                        <img src = {castform_water} alt="rain" />
                    :   <img src={Castform} alt="neutral" />
                    }          
                    <br />         
                    <h2>{this.state.temp}°</h2>
                </div>
                <br />
                <div className="div-scd">
                  <h4>                   
                    {this.state.weather.name},
                    {this.state.country}
                  </h4>
                </div>
                {/*         verificar el modal
                 <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal> */}
            </div>
            
        );
    }   
}

export default Dash;