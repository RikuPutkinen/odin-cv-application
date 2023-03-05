import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className='General'>
        <legend>General Information</legend>
        <label for="name">Name</label>
        <input type="text" name="name" />

        <label for="email">Email</label>
        <input type="email" name="email" />

        <label for="phone">Phone number</label>
        <input type="tel" name="phone" />
      </fieldset>
    );
  };
}

export default General;