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
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}&units=imperial`);
  const data = await api_call.json();
   console.log(data);
  if ( city ) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      wind: data.wind.speed,
      error: '',
      // concertImage: data._embedded.events[0].images[0].url,
      // concertName: data._embedded.events[0].name,
      // concertDate: data._embedded.events[0].dates["start"].localDate,
      // concertLocation: data._embedded.events[0].embedded.venues[0].name,
      // concertBuyTicket: data._embedded.events[0].url
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
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-7 title-container'>
                  <Title />
                </div>
                <div className='col-xs-5 form-container'>
                  <Form getWeather={this.getWeather}/>
                  <Weather temperature={this.state.temperature}
                    city={this.state.city}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    wind={this.state.wind}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
