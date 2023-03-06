import React, { Component } from 'react';

class EducationField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="school">School name</label>
        <input name="school" ></input>

        <label htmlFor="title">Title of study</label>
        <input name="title" ></input>

        <label type="date" htmlFor="date">Date of study</label>
        <input type="date" name="date" ></input>

        <button type='button'>Remove Education</button>
      </fieldset>
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
        {this.props.data.map((item) => {
          const {id, school, title, date} = item;
          return (
            <fieldset key={id}>
              <label htmlFor="school">School name</label>
              <input
                name="school" 
                value={school}
                onChange={e => this.props.onChange(id, e)}
                ></input>

              <label htmlFor="title">Title of study</label>
              <input
                name="title"
                value={title}
                onChange={e => this.props.onChange(id, e)}
                ></input>

              <label type="date" htmlFor="date">Date of study</label>
              <input
                type="date"
                name="date" 
                value={date}
                onChange={e => this.props.onChange(id, e)}
                ></input>

              <button type='button' onClick={(e) => this.props.onRemove(id, e)}>Remove Education</button>
            </fieldset>
          )
        })}
        <button type='button' onClick={this.props.onAdd}>Add New Education</button>
      </fieldset>
    );
  };
}

export default Education;