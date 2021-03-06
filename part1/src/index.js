import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Content from './Content'
import './index.css';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content data={[{name: part1, num: exercises1},{name: part2, num: exercises2},{name: part3, num: exercises3}]} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
