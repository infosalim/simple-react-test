import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { id: '1', name: 'Salim', age: '22' },
      { id: '2', name: 'MSH', age: '24' },
      { id: '3', name: 'SAM', age: '25' },
    ],
    otherState: '',
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.person[personIndex]
    }
    // const person = Object.assign({}, this.state.person[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;


    this.setState({ person: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.person;
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  }
  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      )
      btnClass = classes.red;
    }

    const AssignedClasses = [];

    if (this.state.person <= 2) {
      AssignedClasses.push(classes.red); // AssignedClasses = ['red'];
    }
    if (this.state.person <= 1) {
      AssignedClasses.push(classes.bold); // AssignedClasses = ['red','bold']'
    }


    return (
      <div className={classes.App}>
        <h1>Salim Hossain</h1>
        <p className={AssignedClasses.join(' ')}>A Front End Web Developer</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
