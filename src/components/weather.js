import React from "react";

//stateless component

/*const Weather = (props)  => {
  return (
    <div>
      {props.city && <p>City: {props.city}</p>}
      {props.country && <p>Country: {props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};*/

const Weather = props => (
  <div className="weather__info">
    {props.city && (
      <p className="weather__key">
        City:
        <span className="weather__value"> {props.city}</span>
      </p>
    )}
    {/*{props.country && (
      <p className="weather__key">
        Country:
        <span>{props.country}</span>
      </p>
    )}*/}
    {props.temperature && (
      <p className="weather__key">
        Temperature:
        <span className="weather__value"> {props.temperature}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity:
        <span className="weather__value"> {props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Description:
        <span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error"> {props.error}</p>}
  </div>
);

// class based components

/* class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && <p>City: {this.props.city}</p>}
        {this.props.country && <p>Country: {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
} */

export default Weather;
