import React, { Component } from 'react';
import Display from './components/Display';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import GeneralForm from './components/GeneralForm';
import './index.css'

class App extends Component {
  constructor(props) {
    super(props);

    //this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

    this.handleGeneralChange = this.handleGeneralChange.bind(this);

    this.addEducationField = this.addEducationField.bind(this);
    this.removeEducationField = this.removeEducationField.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);

    this.addExperienceField = this.addExperienceField.bind(this);
    this.removeExperienceField = this.removeExperienceField.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);

    this.state = {
      editable: true,
      general: {
        name: '',
        email: '',
        phone: ''
      },
      education: [],
      experience: []
    }
  }

  toggleEdit() {
    this.setState({editable: this.state.editable ? false : true})
  }

  handleGeneralChange(e) {
    const data = this.state.general;
    data[e.target.name] = e.target.value;
    this.setState({general: data});
  }

  addEducationField() {
    this.setState(
      {
        education: [...this.state.education, {
          id: crypto.randomUUID(),
          school: '',
          title: '',
          date: ''}]}
    )
  }

  removeEducationField(id) {
    this.setState({education: this.state.education.filter(item => {
      return item.id !== id;
    })})
  }

  handleEducationChange(id, e) {
    const data = this.state.education.map(item => {
      if (item.id !== id) return item;
      else {
        item[e.target.name] = e.target.value;
        return item;
      }
    })
    this.setState({education: data});
  }

  addExperienceField() {
    this.setState(
      {
        experience: [...this.state.experience, {
          id: crypto.randomUUID(),
          company: '',
          position: '',
          task: '',
          start: '',
          end: ''}]}
    )
  }

  removeExperienceField(id) {
    this.setState({experience: this.state.experience.filter(item => {
      return item.id !== id;
    })})
  }

  handleExperienceChange(id, e) {
    const data = this.state.experience.map(item => {
      if (item.id !== id) return item;
      else {
        item[e.target.name] = e.target.value;
        return item;
      }
    })
    this.setState({experience: data});
  }

  render() {
    if (this.state.editable) {
      return (
        <form className="container mx-auto w-96">
          <GeneralForm
            data={this.state.general}
            onChange={this.handleGeneralChange}
            />
          <EducationForm
            data={this.state.education}
            onAdd={this.addEducationField}
            onRemove={this.removeEducationField}
            onChange={this.handleEducationChange}
            />
          <hr className='bg-gray-500 h-0.5'></hr>
          <ExperienceForm
            data={this.state.experience}
            onAdd={this.addExperienceField}
            onRemove={this.removeExperienceField}
            onChange={this.handleExperienceChange}
            />
          <hr className='bg-gray-500 h-0.5'></hr>
          <button type='button' onClick={this.toggleEdit} className='my-3 px-3 py-2 rounded-md text-md bg-blue-400'>{this.state.editable ? "Submit" : "Edit"}</button>
        </form>
      );
    }
    else {
      return (
        <div className='container mx-auto w-96'>
          <Display data={this.state} />
          <button type='button' onClick={this.toggleEdit} className='my-3 px-3 py-2 rounded-md text-md bg-blue-400'>{this.state.editable ? "Submit" : "Edit"}</button>
        </div>
      )
    }
  }
}

export default App;
