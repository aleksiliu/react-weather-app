import React, { Component } from 'react';

class Form extends Component {
  state = {
    term: ''
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.state.term.trim() === ''
            ? false
            : this.onSubmit(this.state.term);
        }}
      >
        <input
          type="search"
          value={this.state.term}
          placeholder="Search for a city"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </form>
    );
  }

  onSubmit(term) {
    this.props.onSubmit(term);
  }

  onInputChange(term) {
    this.setState({ term });
  }
}

export default Form;
