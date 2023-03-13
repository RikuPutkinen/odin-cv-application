import React from 'react';

export default function EducationForm (props) {
  return (
    <fieldset className="Education">
      <legend className='font-bold text-lg mb-2 mt-6'>Educational Experience</legend>
      {props.data.map((item) => {
        const {id, school, title, date} = item;
        return (
          <fieldset key={id} className='grid grid-cols-2 grid-flow-row gap-y-2 mt-4'>
            <label htmlFor="school">School name</label>
            <input
              name="school" 
              value={school}
              onChange={e => props.onChange(id, e)}
              ></input>

            <label htmlFor="title">Title of study</label>
            <input
              name="title"
              value={title}
              onChange={e => props.onChange(id, e)}
              ></input>

            <label type="date" htmlFor="date">Date of study</label>
            <input
              type="date"
              name="date" 
              value={date}
              onChange={e => props.onChange(id, e)}
              ></input>

            <button type='button' onClick={(e) => props.onRemove(id, e)} className='bg-red-500 col-start-2 w-fit py-2 px-6 rounded-md my-2'>Remove</button>
          </fieldset>
        )
      })}
      <button type='button' onClick={props.onAdd} className='bg-blue-400 w-fit py-2 px-6 rounded-md my-2'>Add New</button>
    </fieldset>
  );
}