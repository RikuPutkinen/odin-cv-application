import React, { Component } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEducationField = this.addEducationField.bind(this);
    this.removeEducationField = this.removeEducationField.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);

    this.state = {
      general: {
        name: '',
        email: '',
        phone: ''
      },
      education: []
      /*{
        school: '',
        title: '',
        date: ''
      }*/,
      experience: []
      /*{
        company: '',
        title: '',
        task: '',
        start: '',
        end: ''
      }*/
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
    
    this.setState({
      general: {
        name: formJSON.name,
        email: formJSON.email,
        phone: formJSON.phone
      },
      education: []
      /*{
        id: ''
        school: '',
        title: '',
        date: ''
      }*/,
      experience: []
      /*{
        id: ''
        company: '',
        title: '',
        task: '',
        start: '',
        end: ''
      }*/
    });
  };

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

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <General data={this.state.general}/>
        <Education
          data={this.state.education}
          onAdd={this.addEducationField}
          onRemove={this.removeEducationField}
          onChange={this.handleEducationChange}/>
        <Experience
          data={this.state.experience}/>
        <button type='submit'>Submit</button>
      </form>
    );
  };
}

export default App;
