import React, { Component } from 'react';

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "25b486c97325bf6814cc4456fabac99e";

class App extends Component {

getWeather = async (e) => {
  e.preventDefault();
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`);
  const data = await api_call.json();
  console.log(data);

}

  render() {
    return (
      <div>
       <Title />
       <Form getWeather={this.getWeather}/>
       <Weather />
      </div>
    );
  }
}

export default App;
