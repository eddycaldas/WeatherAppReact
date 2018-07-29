import React from 'react';

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "25b486c97325bf6814cc4456fabac99e";

class App extends React.Component {
 
  state = {
    temperature: undefined,
    humidity: undefined,
    city: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }


getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}`);
  const data = await api_call.json();
  // console.log(data);
  if ( city ) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      wind: data.wind.speed,
      error: ''
    })
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      humidity: undefined,
      description: undefined,
      wind: undefined,
      error: 'Please enter a City'
    })
  }

}

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
