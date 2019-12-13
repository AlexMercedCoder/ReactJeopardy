import React from 'react';


const Question = (props) => {

    const [show, setShow] = React.useState({answer: false})

    const showAnswer = () => {
        if(show.answer){
            setShow({answer: false})
        }else{
            setShow({answer: true})
        }}

    let theAnswer = undefined;
    if (show.answer){
        theAnswer = (<><h3> Answer </h3>

            <p>{props.question.answer}</p></>)
    }

    return (<div className='question'>

    <h3> Question </h3>

    <p>{props.question.question}</p>

    <button className="waves-effect waves-light btn-large butStyle" onClick={showAnswer}>Show/Hide Answer</button>

    {theAnswer}


    </div>)
}

export default Question;
