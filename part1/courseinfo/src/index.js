import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props.part)
  return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
  )
}

const Content = (props) => {
  const part0 = props.parts[0];
  const part1 = props.parts[1];
  const part2 = props.parts[2];

  return (
    <div>
    <Part part={part0} />
    <Part part={part1} />
    <Part part={part2} />
    </div>
  )
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);