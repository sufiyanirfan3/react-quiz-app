import React, { useState } from 'react'
import './App.css'
import Start from './components/Quiz_start'
import QuizQuestions from './components/Quiz_questions'

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="card">
      { start ? <QuizQuestions /> : <Start props={setStart} />} 
    </div>
  );
}

export default App;
