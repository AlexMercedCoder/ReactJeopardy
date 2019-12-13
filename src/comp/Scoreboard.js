import React from 'react';


const Scoreboard = (props) => {

    const [score, setScore] = React.useState({score:0})

    const increaseScore = () => {
        setScore({score:score.score+100})
    }

    const decreaseScore = () => {
        setScore({score:score.score-100})
    }

    return (<div className='scoreboard'>

    <h1> {props.player} </h1>
    <div>{score.score}</div>
    <button className="waves-effect waves-light btn-large butStyle" onClick={increaseScore}>Add Score</button>
    <button className="waves-effect waves-light btn-large butStyle" onClick={decreaseScore}>Reduce Score</button>
    </div>)
}

export default Scoreboard
