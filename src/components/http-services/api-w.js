import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '&appid=863e934378f4a78b4382d31defb16f01';
const url_ids = 'https://api.openweathermap.org/data/2.5/group?id=';
const Celsius = '&units=metric';
const Fahrenheit = '&units=Imperial';

var Api = {
    getWeather:function(path){
        console.log(url+path+Fahrenheit+key);
        return axios.get(url+path+Fahrenheit+key);
    },
    getSeveralId:function(ids){
        console.log(url_ids+ids+Fahrenheit+key);
        return axios.get(url_ids+ids+Fahrenheit+key);
    }

}

export default Api;