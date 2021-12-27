import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizEnd from './Quiz_end';
import './Quiz_questions.css';



const QuizQuestions = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);

    const shuffle = (arr) => arr.sort(() => Math.random()-0.5);

    const selectOption = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }

    useEffect(() => {

        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (

                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }

                )));
            })
            
    }, []);


    return (
        <div className='quizCard'>
            { quiz[number] &&

                <>
                    
                    <div className='quizQuestion'>{quiz[number].question }</div>
                
                    <div className='options'>
                        {quiz[number].options.map((item, index) => (
                            <option key={index} onClick={selectOption}>{item}</option>
                        ))}
                    </div>
                </>

            }
            {
                number === 10 && <QuizEnd pts={pts} />
            }
        </div>
    )
}

export default QuizQuestions
