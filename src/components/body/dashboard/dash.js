import React, { Component } from 'react';
import './dash.css';
import Castform from '../../../images/Castform.png';
import castform_fire from '../../../images/castform_fire.png';
import castform_water from '../../../images/castform_water.png';
import castform_wind from '../../../images/castform_wind.png';
// import ReactModal from 'react-modal';
import Modal from 'react-responsive-modal';
import Detail from './detail/detail';

class Dash extends Component {
    constructor(){
        super();
        this.state = {
            icon : {},
            showModal : false,
            alreadyOpenModal : false,
        }
    }

    loadCastform = () => {
        console.log('brief',this.props.data.weather[0].id)
        //rain
        if(this.props.data.weather[0].id === 500 || this.props.data.weather[0].id === 501 ||
            this.props.data.weather[0].id === 502 || this.props.data.weather[0].id === 503 ||
            this.props.data.weather[0].id === 504 || this.props.data.weather[0].id === 511 ||
            this.props.data.weather[0].id === 520 || this.props.data.weather[0].id === 521 ||
            this.props.data.weather[0].id === 522 || this.props.data.weather[0].id === 531 )
                return castform_water;
        else //wind
        if(this.props.data.weather[0].id === 701 || this.props.data.weather[0].id === 711 ||
            this.props.data.weather[0].id === 721 || this.props.data.weather[0].id === 731 ||
            this.props.data.weather[0].id === 741 || this.props.data.weather[0].id === 751 ||
            this.props.data.weather[0].id === 761 || this.props.data.weather[0].id === 762 ||
            this.props.data.weather[0].id === 771 || this.props.data.weather[0].id === 781 )
                return castform_wind;
        else    //clear
        if(this.props.data.weather[0].id === 800)
            return castform_fire;
        else    //clouds
            return Castform;
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props)
            this.setState({ icon : this.loadCastform()}) 
    }

    componentDidMount(){  
        this.setState({ icon : this.loadCastform()}) 
    }
    
    handleOpenModal = () => {
        if(this.state.alreadyOpenModal === false)
            this.setState({ showModal: true, alreadyOpenModal : true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false, alreadyOpenModal : false });
    }

    deleteDetail = () => {
        this.props.delete(this.props.data.name);
    }

    render(){
        return(            
            <div className="forecast" >
                <div className="del_btn">
                    <button onClick={this.deleteDetail}>X</button><br />
                </div>                
                <div className="div-ppal" onClick={this.handleOpenModal}>      
                    <div><img src={this.state.icon} alt="icon" /></div>
                    <div><h2>{this.props.data.main.temp} °F</h2></div>
                </div>
                <h3>{this.props.data.name},{this.props.data.sys.country}</h3>
                <Modal  
                    open={this.state.showModal}                    
                    onClose={this.handleCloseModal}  
                    center                  
                    classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
                >            
                    <Detail close={this.handleCloseModal} info={this.props.data} load={this.loadCastform}/>                        
                </Modal >                
            </div>
        );
    }   
}

export default Dash;