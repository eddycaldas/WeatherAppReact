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
    <div className='weather__info'>
      { 
        props.city && <p className="weather__key">City: 
          <span className="weather__value"> {props.city}</span>
        </p> 
      }
      { 
        props.temperature && <p className="weather__key">Temperature: 
          <span className="weather__value"> {props.temperature}</span>
        </p> 
      }
      { 
        props.humidity && <p className="weather__key">Humidity: 
          <span className="weather__value"> {props.humidity}</span>
        </p> 
      }
      { 
        props.description && <p className="weather__key">Description: 
          <span className="weather__value"> {props.description}</span>
        </p> 
      }
      { 
        props.wind && <p className="weather__key">Wind: 
          <span className="weather__value"> {props.wind}</span>
        </p> 
      }
      { 
        props.error && <p className="weather__key"> 
          <span className="weather__value"> {props.error}</span>
        </p> 
      }
    </div>
  );
}

//stateless ways, the keyword <this> is not allowed, and the props needs to be 
//passed as a paramenter in order
//to be used on the function on this component.

export default Weather;
