import React from 'react';
import './Person.css';

const Person = (props) =>{
    return(
        <div className='Person'>
            <h4 onClick={props.click}>I'm {props.name} and {props.age} years old.</h4>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}/>
        </div>
    )
}

export default Person;