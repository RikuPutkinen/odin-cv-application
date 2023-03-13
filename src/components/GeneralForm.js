import React from 'react';

export default function GeneralForm(props) {
  return (
    <fieldset className='General'>
      <legend className='font-bold text-lg mb-2 mt-4'>General Information</legend>
      <div className='grid grid-cols-2 grid-flow-row gap-y-2'>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={props.data.name}
          onChange={e => props.onChange(e)}
          />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={props.data.email}
          onChange={e => props.onChange(e)}
          />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          name="phone"
          value={props.data.phone}
          onChange={e => props.onChange(e)}
            />
      </div>
    </fieldset>
  );
}