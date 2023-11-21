import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
	return(
		<button onClick={props.handleClick}>
			{props.text}
		</button>
	)
}

const StatisticLine = (props) => {
	return(
		<tr>
			<td>{props.text}</td><td>{props.value}</td>
		</tr>
	)
}

const Statistics = ({good,neutral,bad,all,average,averageValue,positive}) => {
	if(all<=0){
		return(
			<div>
				<h1>
					statistics
				</h1>
				<div>
					No feedback given
				</div>
			</div>
		)
	}else{
		return(
			<div>
				<h1>
					statistics
				</h1>
				<table>
					<tbody>
						<StatisticLine text="good" value={good} />
						<StatisticLine text="neutral" value={neutral} />
						<StatisticLine text="bad" value={bad} />
						<StatisticLine text="average" value={averageValue} />
						<StatisticLine text="positive" value={positive} />
					</tbody>
				</table>
			</div>
		)
	}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const [average, setAverage] = useState(0)
  const averageValue = (all > 0)?(average/all):0
  const positive = (all > 0)?((good/all*100)+"%"):0
  
  const feedbackGood = () => {
	  setGood(good+1)
	  setAverage(average+1)
  }
  const feedbackNeutral = () => setNeutral(neutral+1)
  const feedbackBad = () => {
	  setBad(bad+1)
	  setAverage(average-1)
  }

  return (
    <div>
		<h1>
			give feedback
		</h1>
		<Button handleClick={feedbackGood} text="good" />
		<Button handleClick={feedbackNeutral} text="neutral" />
		<Button handleClick={feedbackBad} text="bad" />
		<Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} averageValue={averageValue} positive={positive} />
	</div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)