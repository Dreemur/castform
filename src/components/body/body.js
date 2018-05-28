import React, { Component } from 'react';
import './body.css';
import Dash from './dashboard/dash';
import Api from '../http-services/api-w';

class Body extends Component {
    constructor(){
        super();      
        this.state = {  
            value : 0,
            cities : [],
            weather: {},
            loading: false,
        } 
    }

    noDuplicateCities = () => {     //avoid duplicate cities
        console.log("noDuplicateCities");
        for (var i = 0; i < localStorage.length; ++i ) {
            var key = localStorage.getItem( localStorage.key( i ) );
            console.log("key",key);
            console.log("info.name", this.props.info.name);
            if(key === this.props.info.name){
                alert("City already selected!");
                return false;
            }
        }
        return true;
    }
 
    saveCity = () => {        
        console.log("saveCity");
        //guardamos la nueva ciudad en localStorage y en el Array[cities]
        localStorage.setItem(this.props.info.id,this.props.info.name)
        this.setState({value : this.state.value});
        this.state.cities.push(this.props.info);  
    }

    deleteCity = (city) => {
        console.log("deleteCity :", city);
        //eliminamos la cidudad en localStorage y en el Array [cities]
        const city_del = this.state.cities.filter(element => element.name === city )
        const key_del = city_del[0].id;
        localStorage.removeItem(key_del);
        //seteamos nuevamente el Array[cities] con las ciudades restantes
        const new_arr = this.state.cities.filter(element => element.name !== city )
        this.setState({ cities : new_arr });
    }

    callApi = (city,arr) => {
        Api.getWeather(city)
        .then(res => {
            arr.push(res.data); //Array[arr] guardara los JSON de las ciudades encontradas
            this.setState({ cities: arr }); //seteamos el Array[cities] para re-renderizar el componente
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props)
            if(this.noDuplicateCities()===true)
                this.saveCity();
    }

    componentWillMount(){        
        const arr = [];
        console.log(localStorage.length);
        //iteramos los elementos en el localStorage y volvemos a cargar su info
        if(localStorage.length !== 0)
        {
            this.setState({loading : true});
            for (var i = 0; i < localStorage.length; ++i ) {
                const city = localStorage.getItem( localStorage.key( i ) );
                this.callApi(city,arr);
            }
            this.setState({loading : false});
        }
    }

    render() {        
        return this.state.loading === false ?
            <div className="content">                       
                {this.state.cities.map((arr,i) => 
                    <Dash key={i} data={arr} id={i} delete={this.deleteCity}/>                    
                )}                
            </div>
        :
            <div className="content">
                <div className="loader"></div>              
            </div>
    }
}

export default Body;