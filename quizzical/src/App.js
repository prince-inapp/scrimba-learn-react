"use strict";
import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import Questions from './components/Questions';

function App() {
  
  const [start, setStart] = React.useState(false);
  function startQuiz(){
    setStart(true);
  }

  return (
    <div>
      { !start && <div className="container App">
        <h1>Quizzical</h1>
        <p className='quiz--subheader'>Some description if needed</p>
        <button className='quiz--start' onClick={startQuiz}>Start Quiz</button>
      </div>
      }
      {start && <Questions /> }
    </div>
  );
}

export default App;
