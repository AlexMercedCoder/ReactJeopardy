import React from 'react';
import './App.css';
import Question from './comp/Question'
import Scoreboard from './comp/Scoreboard'

function App() {

    const [question, setQuestion] = React.useState({question: {}})

    const getQuestion = async () => {
        const response = await fetch('https://jservice.io/api/random')
        const json = await response.json()
        console.log(json[0])
        setQuestion({question: json[0]})
        return json[0]
    }

    React.useEffect(() => {
    getQuestion()    }, [])

  return (
    <div className="App">
        <h1>Welcome to Jeoporday</h1>
        <h4>React app by Alex Merced of AlexMercedCoder.com</h4>
        <Question question={question.question}/>
        <br/>
        <button className="waves-effect waves-light btn-large butStyle" onClick={getQuestion}>Next question</button>
        <br/>
        <div className="score">
        <Scoreboard player='Player 1'/>
        <Scoreboard player='Player 2'/>
        </div>
    </div>
  );
}

export default App;
