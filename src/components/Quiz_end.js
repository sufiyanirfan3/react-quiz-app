import './Quiz_end.css'


const QuizEnd = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <div  className='endpage'>
            <h1>Quiz Ended</h1>
            <p>You score {pts} out of 10.</p>
            <button className='btn' onClick={refreshPage}>Retry</button>
        </div>
    )
}

export default QuizEnd
