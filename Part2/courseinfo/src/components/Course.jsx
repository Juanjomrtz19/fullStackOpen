import { useState } from "react";

const Course = ({course}) => {
    const {name, parts} = course;

    let sum = 0;


    return(
        <>
        <h1>{name}</h1>
        {
            parts.map(part => {
                const {name, exercises, id} = part;
                sum += exercises
                return(
                   <p key={id}>{name} {exercises}</p> 
                );
            })
        }
        <h3>total of {sum} exercises</h3>
        </>
    );
}

export default Course;