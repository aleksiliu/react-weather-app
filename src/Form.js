import React, { Component } from 'react';

const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        // defaultValue={props.state.value}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default Form;
