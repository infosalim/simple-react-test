import React, { Component } from 'react';
import './App.css';
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none',
      transition: '.3s ease-in',
      display: 'inline-block'
    }

    let persons = null;
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

      style.backgroundColor = 'red';
    }

    const classes = [];

    if (this.state.person <= 2) {
      classes.push('red'); // classes = ['red'];
    }
    if (this.state.person <= 1) {
      classes.push('bold'); // classes = ['red','bold']'
    }


    return (
        <div className="App">
          <h1>Salim Hossain</h1>
          <p className={classes.join(' ')}>A Front End Web Developer</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
        </div>
    );
  }
}

export default App;
