import React from 'react';
import './components/home.css';
import "./components/check_weather.css";


class CheckWeather extends React.Component{
  constructor(props) {

    super(props);

    this.state = {
        items: [],
        isLoaded: false
    }
}

//componentDidMount: Fetch json array of objects from given url and update state.
componentDidMount() {

    fetch('http://localhost:9000/checkWeather')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true, 
            })
            
        }).catch((err) => {
            console.log(err);
        });
}

render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded)
        return <div>  Loading... Please Wait! </div>;

    return (
        <div className='dark_background'>
            <ul>
                {items.map((item) => (
                    <li key={item.Path_id}>
                        <p className = 'txt'><b>Path ID:</b> {item.Path_id} | <b>Path Name:</b> {item.Path_name} | <b>Duration:</b> {item.Duration} | <b>Destination:</b> {item.Device_name} |</p>
                        <p className = 'text'><b>Current Temperature:</b> {item.Temperature}&deg;C | <b>Feels Like:</b> {item.Feels_like}&deg;C <img className="icon" src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} width="50" height="50" alt=""></img></p>
                    </li>
                ))}
                
            </ul>
        </div>
    );
  }   

}
export default CheckWeather;