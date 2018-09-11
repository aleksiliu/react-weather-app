import React, { Component } from 'react';
import Weather from './Weather';
import Form from './Form';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  state = {
    results: {},
    error: false,
    isLoading: false
  };

  onSubmit = term => {
    this.setState({ isLoading: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(
        data =>
          data.cod === 200
            ? this.setState({
                results: data,
                error: false,
                isLoading: false
              })
            : this.setState({
                isLoading: false,
                error: true
              })
      )
      .catch(error => {
        console.log('Error :(', error);
      });
  };

  render() {
    let result;

    this.state.error === false
      ? (result = (
          <React.Fragment>
            {this.state.isLoading ? (
              <p className="loading">Loading ...</p>
            ) : (
              <Weather results={this.state.results} />
            )}
            <Form onSubmit={this.onSubmit} />
          </React.Fragment>
        ))
      : (result = (
          <React.Fragment>
            {this.state.isLoading ? (
              <p className="loading">Loading ...</p>
            ) : (
              <h1 className="error">City not found</h1>
            )}
            <Form onSubmit={this.onSubmit} />
          </React.Fragment>
        ));

    return result;
  }
}

export default App;
