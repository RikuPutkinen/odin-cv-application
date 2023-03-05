import React, { Component } from 'react';

class EducationField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="EducationField">
        <fieldset>
          <label htmlFor="school">School name</label>
          <input name="school" ></input>

          <label htmlFor="title">Title of study</label>
          <input name="title" ></input>

          <label type="date" htmlFor="date">Date of study</label>
          <input type="date" name="date" ></input>

          <button type='button'>Remove Education</button>
        </fieldset>
      </div>
    );
  };
}

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="Education">
        <legend>Educational Experience</legend>
        <EducationField />
        <button type='button'>Add New Education</button>
      </fieldset>
    );
  };
}

export default Education;