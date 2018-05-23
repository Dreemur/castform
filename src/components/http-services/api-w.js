import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '&appid=863e934378f4a78b4382d31defb16f01'

var Api = {
    getWeather:function(path){
        console.log(url+path+key);
             
        // return fetch (url+path+key)
        // .then(res => res.json())
        // //.then(res => console.log(res))
        // .catch(prueba)

        return axios.get(url+path+key);
    }    
}

export default Api;