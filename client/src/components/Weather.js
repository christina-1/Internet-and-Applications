import React from 'react';
import '../css/home.css';
import '../css/weather.css';
import CheckWeather from './CheckWeather';
import { BrowserRouter, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Weather extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isClicked: true
        };

    }
    onClickHandler = () =>{
        this.setState({
            isClicked: true,
        })
        
    }
    render() {
        return (
        <BrowserRouter>
          <div>
                <div className="wrapper_weather">
                    <div className="form-wrapper_weather">
                        <p> Click the "Weather Update" button if you want to find the paths at whose origin it is not raining! </p>
                        <Link to="/checkWeather" style={{ textDecoration: 'none' }}> 
                            <div className = "updateWeather">
                                <button> Weather Update </button>  
                            </div>
                        </Link>
                </div> 
                <Route path="/checkWeather" exact strict render={
                        ()=>{
                        return(<CheckWeather></CheckWeather> );
                        }
                }/>
            
            </div>
          </div>
          
        </BrowserRouter>
            
        );
    }   

}
export default Weather;
