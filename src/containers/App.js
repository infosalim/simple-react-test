import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPerson) {
      persons = <Persons
        persons={this.state.person}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }


    return (
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.person}
          person={this.state.person}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
