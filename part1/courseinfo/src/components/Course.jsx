/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Course = ({ course }) => {
    console.log(course)


    const Header = (props) => {
        console.log(props.course)
        return (
            <h2>{props.course}</h2>

        )
    }

    const Content = (props) => {

        return (
            <div>

                {props.parts.map((p) => (
                    <Part key={p.id} partName={p.name} exercises={p.exercises} />
                ))}

            </div>
        )
    }

    const Total = ({ parts }) => {
        const sum = parts.reduce((sum, p) =>
            sum + p.exercises, 0
        )
        return (
            <p><b>Total of  {sum} exercises</b></p>
        )
    }

    const Part = (props) => {
        return (
            <p>{props.partName} {props.exercises}</p>
        )
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course