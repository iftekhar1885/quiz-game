import React, { useContext, useState } from 'react';
import './Home.css';
import { QuizContext, } from '../Layout/Main';
import HomeDetails from '../Homes/HomeDetails';

const Home = () => {
  const [topic,setTopic] =useState([])
    const quizs = useContext(QuizContext)
    const handleAddToQuestion = (quiz) =>{
      setTopic(previous => [...previous, quiz])
    }

    return (
        <div>
          <div className='text-4xl  bg-slate-100 m-10 p-10'>
          <h2 className='text-4xl font-bold text-center'>Total Quiz: {quizs.data.length}</h2>
            <h2 className='text-2xl'>Test your trivia knowledge by answering 50 of our best online general knowledge quiz questions and answers. How many can you get right?</h2>


          </div>
          <div className='flex'>
          {
            quizs.data.map(quiz =><HomeDetails
            key={quiz.id}
            quiz={quiz}
            handleAddToQuestion={handleAddToQuestion}
            ></HomeDetails>)
          }
          </div>

        </div>
    );
};

export default Home;