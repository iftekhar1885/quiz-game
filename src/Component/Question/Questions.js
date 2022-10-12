import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionDetails from './QuestionDetails';



const Questions = () => {
    const questions = useLoaderData();
   const {id, question} = questions;
     console.log(questions)
    return (
        <div>
            <h2>questions :{questions.data.length} </h2>
            <h2>{id}</h2>
            <h3>{question}</h3>            
           

            {
             questions.map(question => <QuestionDetails
             key={question.id}
             question = {question}
             ></QuestionDetails>)   
            }
        </div>
    );
};

export default Questions;<h2>questions</h2>