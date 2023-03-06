import React, { Component } from 'react';

export default class GeneralForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className='General'>
        <legend className='font-bold text-lg mb-2 mt-4'>General Information</legend>
        <div className='grid grid-cols-2 grid-flow-row gap-y-2'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.props.data.name}
            onChange={e => this.props.onChange(e)}
            />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.props.data.email}
            onChange={e => this.props.onChange(e)}
            />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            value={this.props.data.phone}
            onChange={e => this.props.onChange(e)}
             />
        </div>
      </fieldset>
    );
  };
}