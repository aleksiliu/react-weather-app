import React, { Component } from 'react';

const Weather = props => {
  return (
    <React.Fragment>
      {props.city && (
        <div className="weather">
          {props.city && <h1 className="city">{props.city}</h1>}
          {props.temperature && (
            <p className="temp">{Math.round(props.temperature)} °C</p>
          )}
          {props.type && <h3 className="type">{props.type}</h3>}
        </div>
      )}
    </React.Fragment>
  );
};

export default Weather;
