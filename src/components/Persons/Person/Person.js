import React from 'react';
import classes from './Person.css';

const Person = (props) =>{
    return(
        <div className={classes.Person}>
            <h4 className={classes.title} onClick={props.click}>I'm {props.name} and {props.age} years old.</h4>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}/>
        </div>
    )
}

export default Person;