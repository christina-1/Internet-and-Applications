import React from 'react';
import './components/home.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SelectTime from './SelectTime';
import CheckWeather from './CheckWeather';

class Home extends React.Component{
    constructor(props){
      super(props);
      this.state={apiResponse:""};
    }

  render() {
    return (
      <div className="background">
        <BrowserRouter>
          <div className="background">
            <div className="btn-group">
                <Link to="/" style={{ textDecoration: 'none' }}> <button class="button" style={{width: '33.3%'}}>Home</button> </Link> 
                <Link to="/giveTime" style={{ textDecoration: 'none' }}> <button class="button" style={{width: '33.3%'}}>Pick Time</button>  </Link>
                <Link to="/checkWeather" style={{ textDecoration: 'none' }}> <button class="button" style={{width: '33.3%'}}> Check the Weather </button>  </Link>
              </div>
            <Route path="/" exact strict  render={
            ()=>{
              return(
              <div>
                  <h1> City Travel </h1>
                  <p></p>
                  <p style = {{fontSize: 20}}> Give us your maximum available time and we will let you know about the routes you can use without spending more time! </p>
                  <p style = {{fontSize: 20}}> Find the routes you can use if you want to start your trip without a rainy weather! </p>
              </div>
              );
              
            }
            }/>
            <Route path="/giveTime" exact strict render={
            ()=>{
              return(<SelectTime></SelectTime> );
            }
            }/>
            <Route path="/checkWeather" exact strict render={
            ()=>{
              return(<CheckWeather></CheckWeather> );
            }
            }/>
          </div>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;

                

