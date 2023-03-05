import React, { Component } from 'react';

class ExperienceField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="ExperienceField">
        <label htmlFor="company">Company name</label>
        <input type="text" name='company'/>

        <label htmlFor="position">Position title</label>
        <input type="text" name='position'/>
        
        <label htmlFor="task">Main task of your job</label>
        <input type="text" name='task'/>

        <label htmlFor="startDate">Start date</label>
        <input type="date" name='startDate'/>

        <label htmlFor="endDate">End date</label>
        <input type="date" name='endDate'/>

        <button type='button'>Remove</button>
      </fieldset>
    );
  };
}

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="Experience">
      <legend>Practical Experience</legend>
        <ExperienceField />
        <button type='button'>Add New</button>
      </fieldset>
    );
  };
}

export default Experience;