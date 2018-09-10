import React, { Component } from 'react';

const Weather = props => {
  return (
    <React.Fragment>
      {props.results.name && (
        <div className="weather">
          {props.results.name && <h1 className="city">{props.results.name}</h1>}
          {props.results.main.temp && (
            <p className="temp">{Math.round(props.results.main.temp)} °C</p>
          )}
          {props.results.weather[0].main && (
            <h3 className="type">{props.results.weather[0].main}</h3>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Weather;
