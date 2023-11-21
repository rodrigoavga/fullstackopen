import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}
const Content = (props) => {
	var contentArray = [];
	for(let i=0; i < props.content.length; i++){
		contentArray.push(
			<p>
				{props.content[i].name} {props.content[i].exercises}
			</p>
		)
	}
	return (
		contentArray
	)
}
const Total = (props) => {
	let totalExercises = 0;
	const total = props.parts.reduce((accumulated, current) => {
	  if(accumulated != undefined){
		  totalExercises += accumulated.exercises;
	  }
	  totalExercises += current.exercises;
	})
	return (
		<p>Number of exercises {totalExercises}</p>
	)
}

const App = () => {
  const course = {
		name:'Half Stack application development',
		parts : [
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
	};

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
