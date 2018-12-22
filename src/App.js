import React, {Component} from 'react';

class App extends Component{
  state = {
    weather : null
  }
  getWeatherAtCurrentPosition()
  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e7dcbf687bafa75d7d682d7d0eade99d&units=metric`)
        .then(response =>response.json()).then(data =>this.setState({
          weather : data
        }));     
      });
    }
  }
getWeather(){
  console.log('clicked');
  const cityName=document.getElementById('city').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e7dcbf687bafa75d7d682d7d0eade99d&units=metric`)
  .then(response =>response.json()).then(data =>this.setState({
    weather : data
  }));
}

render()
{
  return(
    <div>
      <input type='text' id='city' />
      <button onClick={() => this.getWeather()}>Get Weather</button>
      <button onClick={()=> this.getWeatherAtCurrentPosition()}>Get weather at current position</button>
      {
        this.state.weather && 
        <div>
          <p>Name : {this.state.weather.name}</p>
          <p>Temperature : {this.state.weather.main.temp}</p>
        </div>
      }
      </div>
  )
}
}



export default App;
