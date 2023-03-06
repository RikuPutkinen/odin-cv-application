import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h2>General Information</h2>
          <div>
            <p>Name:</p>
            <p>{this.props.data.general.name}</p>

            <p>Email:</p>
            <p>{this.props.data.general.email}</p>
            
            <p>Phone:</p>
            <p>{this.props.data.general.phone}</p>
          </div>
        </div>
        <div>
          <h2>Educational Experience</h2>
          {this.props.data.education.map(item => {
            const {id, school, title, date} = item;
            return (
              <div key={id}>
                <p>School Name:</p>
                <p>{school}</p>

                <p>Title of Study:</p>
                <p>{title}</p>

                <p>Date of Study:</p>
                <p>{date}</p>
              </div>
            )
          })}
        </div>
        <div>
          <h2>Practical Experience</h2>
          {this.props.data.experience.map(item => {
            const {id, company, position, task, start, end} = item;
            return (
              <div key={id}>
                <p>Company Name:</p>
                <p>{company}</p>

                <p>Position Title:</p>
                <p>{position}</p>

                <p>Main Task of Your Job:</p>
                <p>{task}</p>

                <p>Start Date:</p>
                <p>{start}</p>

                <p>End Date:</p>
                <p>{end}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}