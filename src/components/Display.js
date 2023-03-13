import React from 'react';

export default function Display(props) {
  return (
    <div className=''>
      <div>
        <h2 className='font-bold text-lg mb-2 mt-4'>General Information</h2>
        <div className='grid grid-cols-2 grid-flow-row'>
          <p className='font-bold'>Name:</p>
          <p>{props.data.general.name}</p>

          <p className='font-bold'>Email:</p>
          <p>{props.data.general.email}</p>
          
          <p className='font-bold'>Phone:</p>
          <p>{props.data.general.phone}</p>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-lg mb-2 mt-4'>Educational Experience</h2>
        {props.data.education.map(item => {
          const {id, school, title, date} = item;
          return (
            <div key={id} className='grid grid-cols-2 grid-flow-row'>
              <p className='font-bold'>School Name:</p>
              <p>{school}</p>

              <p className='font-bold'>Title of Study:</p>
              <p>{title}</p>

              <p className='font-bold'>Date of Study:</p>
              <p>{date}</p>
            </div>
          )
        })}
      </div>
      <div>
        <h2 className='font-bold text-lg mb-2 mt-4'>Practical Experience</h2>
        {props.data.experience.map(item => {
          const {id, company, position, task, start, end} = item;
          return (
            <div key={id} className='grid grid-cols-2 grid-flow-row'>
              <p className='font-bold'>Company Name:</p>
              <p>{company}</p>

              <p className='font-bold'>Position Title:</p>
              <p>{position}</p>

              <p className='font-bold'>Main Task of Your Job:</p>
              <p>{task}</p>

              <p className='font-bold'>Start Date:</p>
              <p>{start}</p>

              <p className='font-bold'>End Date:</p>
              <p>{end}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}