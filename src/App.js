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
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <div class="loader"> </div>
        ) : (
          <div>
            {this.state.error ? (
              <h2 className="error">City not found</h2>
            ) : (
              <Weather results={this.state.results} />
            )}
            <Form onSubmit={this.onSubmit} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
