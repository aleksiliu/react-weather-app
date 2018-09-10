import React, { Component } from 'react';
import Weather from './Weather';
import Form from './Form';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  state = {
    value: '',
    results: {},
    error: false,
    isLoading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      return false;
    } else {
      this.setState({ isLoading: true });
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.state.value
        }&units=metric&APPID=${API_KEY}`
      )
        .then(response => response.json())
        .then(
          data =>
            data.cod === 200
              ? this.setState({
                  results: data,
                  error: false,
                  isLoading: false,
                  value: ''
                })
              : this.setState({
                  isLoading: false,
                  error: true,
                  value: ''
                })
        );
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    if (this.state.error === false) {
      return (
        <React.Fragment>
          {this.state.isLoading ? (
            <p className="loading">Loading ...</p>
          ) : (
            <Weather results={this.state.results} />
          )}
          <Form
            inputValue={this.state.value}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {this.state.isLoading ? (
            <p className="loading">Loading ...</p>
          ) : (
            <h1 className="error">City not found</h1>
          )}
          <Form
            inputValue={this.state.value}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </React.Fragment>
      );
    }
  }
}

export default App;
