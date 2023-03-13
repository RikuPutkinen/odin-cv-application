import React from 'react';

export default function ExperienceForm(props) {
  return (
    <fieldset className="Experience">
    <legend className='font-bold text-lg mb-2 mt-6'>Practical Experience</legend>
      {props.data.map(item => {
        const {id, company, position, task, start, end} = item;
        return (
          <fieldset key={id} className='grid grid-cols-2 grid-flow-row gap-y-2 mt-4'>
            <label htmlFor="company">Company name</label>
            <input 
              type="text" 
              name='company'
              value={company}
              onChange={e => props.onChange(id, e)}
              />

            <label htmlFor="position">Position title</label>
            <input 
              type="text"
              name='position'
              value={position}
              onChange={e => props.onChange(id, e)}
              />
            
            <label htmlFor="task">Main task of your job</label>
            <input
              type="text"
              name='task'
              value={task}
              onChange={e => props.onChange(id, e)}
              />

            <label htmlFor="startDate">Start date</label>
            <input 
              type="date"
              name='start'
              value={start}
              onChange={e => props.onChange(id, e)}
              />

            <label htmlFor="endDate">End date</label>
            <input
              type="date"
              name='end'
              value={end}
              onChange={e => props.onChange(id, e)}
              />

            <button type='button' onClick={(e) => props.onRemove(id, e)} className='bg-red-500 col-start-2 w-fit py-2 px-6 rounded-md my-2'>Remove</button>
          </fieldset>
        )
      })}
      <button type='button' onClick={props.onAdd} className='bg-blue-400 w-fit py-2 px-6 rounded-md my-2'>Add New</button>
    </fieldset>
  );
}
