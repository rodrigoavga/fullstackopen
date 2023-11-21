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
	return (
		<p>Number of exercises {props.parts.length}</p>
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