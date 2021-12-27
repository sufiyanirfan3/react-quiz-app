import React from 'react'
import './Quiz_start.css'

const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <div className='mainpage'>
            <h1>React Quiz App</h1>
            <h4>Press button to start quiz</h4>
            <button className='btn' onClick={startQuiz}>Start</button>
        </div>
    )
}

export default Start
