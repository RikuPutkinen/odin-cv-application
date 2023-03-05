import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className='General'>
        <legend>General Information</legend>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="phone">Phone number</label>
        <input type="tel" name="phone" />
      </fieldset>
    );
  };
}

export default General;