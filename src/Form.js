import React, { Component } from 'react';

class Form extends Component {
  state = {
    term: ''
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.term.trim() === '') {
      return false;
    }
    this.props.onSubmit(this.state.term);
    this.setState({ term: '' });
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="search"
          value={this.state.term}
          placeholder="Search for a city"
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default Form;
