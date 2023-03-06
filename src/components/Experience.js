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
        {this.props.data.map(item => {
          const {id, company, position, task, start, end} = item;
          return (
            <fieldset key={id}>
              <label htmlFor="company">Company name</label>
              <input 
                type="text" 
                name='company'
                value={company}
                onChange={e => this.props.onChange(id, e)}
                />

              <label htmlFor="position">Position title</label>
              <input 
                type="text"
                name='position'
                value={position}
                onChange={e => this.props.onChange(id, e)}
                />
              
              <label htmlFor="task">Main task of your job</label>
              <input
                type="text"
                name='task'
                value={task}
                onChange={e => this.props.onChange(id, e)}
                />

              <label htmlFor="startDate">Start date</label>
              <input 
                type="date"
                name='start'
                value={start}
                onChange={e => this.props.onChange(id, e)}
                />

              <label htmlFor="endDate">End date</label>
              <input
                type="date"
                name='end'
                value={end}
                onChange={e => this.props.onChange(id, e)}
                />

              <button type='button' onClick={(e) => this.props.onRemove(id, e)}>Remove</button>
            </fieldset>
          )
        })}
        <button type='button' onClick={this.props.onAdd}>Add New</button>
      </fieldset>
    );
  };
}

export default Experience;