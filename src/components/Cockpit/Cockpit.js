import React from 'react';

import classes from './Cockpit.css';

const cockpit = props => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPerson){
        btnClass = classes.red;
    }
    

    if (props.person <= 2) {
        assignedClasses.push(classes.red); // AssignedClasses = ['red'];
    }
    if (props.person <= 1) {
        assignedClasses.push(classes.bold); // AssignedClasses = ['red','bold']'
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Salim Hossain</h1>
            <p className={assignedClasses.join(' ')}>Front End Web Developer</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cockpit;