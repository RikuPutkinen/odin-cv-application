import React, { useState } from 'react';
import Display from './components/Display';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import GeneralForm from './components/GeneralForm';

function App() {
    const [editable, setEditable] = useState(true);
    const [general, setGeneral] = useState({
      name: '',
      email: '',
      phone: ''
    });
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

  function toggleEdit() {
    setEditable(!editable);
  }

  function handleGeneralChange(e) {
    console.log("General CHANGE:", general)
    const targetName = e.target.name;
    const value = e.target.value;
    let data = general;

    if (targetName === "name") data = {...data, name: value}
    else if (targetName === "email") data = {...data, email: value}
    else if (targetName === "phone") data = {...data, phone: value}

    setGeneral(data);
  }

  function addEducationField() {
    console.log("Education ADD:", education)
    setEducation([...education, {
          id: crypto.randomUUID(),
          school: '',
          title: '',
          date: ''}])
  }

  function removeEducationField(id) {
    setEducation(education.filter(item => {
      return item.id !== id;
    }))
  }

  function handleEducationChange(id, e) {
    const data = education.map(item => {
      if (item.id !== id) return item;
      else {
        item[e.target.name] = e.target.value;
        return item;
      }
    })
    setEducation(data);
  }

  function addExperienceField() {
    setExperience([...experience, {
          id: crypto.randomUUID(),
          company: '',
          position: '',
          task: '',
          start: '',
          end: ''}])
  }

  function removeExperienceField(id) {
    setExperience(experience.filter(item => {
      return item.id !== id;
    }))
  }

  function handleExperienceChange(id, e) {
    const data = experience.map(item => {
      if (item.id !== id) return item;
      else {
        item[e.target.name] = e.target.value;
        return item;
      }
    })
    setExperience(data);
  }


  if (editable) {
    return (
      <form className="container mx-auto w-96">
        <GeneralForm
          data={general}
          onChange={handleGeneralChange}
          />
        <EducationForm
          data={education}
          onAdd={addEducationField}
          onRemove={removeEducationField}
          onChange={handleEducationChange}
          />
        <hr className='bg-gray-500 h-0.5'></hr>
        <ExperienceForm
          data={experience}
          onAdd={addExperienceField}
          onRemove={removeExperienceField}
          onChange={handleExperienceChange}
          />
        <hr className='bg-gray-500 h-0.5'></hr>
        <button type='button' onClick={toggleEdit} className='my-3 px-3 py-2 rounded-md text-md bg-blue-400'>{editable ? "Submit" : "Edit"}</button>
      </form>
    );
  }
  else {
    return (
      <div className='container mx-auto w-96'>
        <Display data={{general, education, experience}} />
        <button type='button' onClick={toggleEdit} className='my-3 px-3 py-2 rounded-md text-md bg-blue-400'>{editable ? "Submit" : "Edit"}</button>
      </div>
    )
  }
}

export default App;
