import React, { Component } from 'react';


// class Weather extends Component {
//   render() {
//     return (
//       <div>
//         { this.props.city && <p>City: {this.props.city}</p> }
//         { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
//         { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
//         { this.props.description && <p>Description: {this.props.description}</p> }
//         { this.props.wind && <p>Wind: {this.props.wind}</p> }
//         { this.props.error && <p> {this.props.error}</p> }
//       </div>
//     );
//   }
// }

const Weather = (props) => {
  return (
    <div>
      { props.city && <p>City: {props.city}</p> }
      { props.temperature && <p>Temperature: {props.temperature}</p> }
      { props.humidity && <p>Humidity: {props.humidity}</p> }
      { props.description && <p>Description: {props.description}</p> }
      { props.wind && <p>Wind: {props.wind}</p> }
      { props.error && <p> {props.error}</p> }
    </div>
  );
}

//stateless ways, the keyword <this> is not allowed, and the props needs to be 
//passed as a paramenter in order
//to be used on the function on this component.

export default Weather;
