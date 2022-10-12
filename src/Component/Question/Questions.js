import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionDetails from '../Homes/QuestionDetails/QuestionDetails';



const Questions = () => {
    const questionData = useLoaderData().data;
    const {id, questions, name} = questionData;
    console.log(questionData)
    return (
        <div>
            
            <div>
            <h1 className="text-center font-semibold text-4xl mt-3 mb-10">
                Quiz of: {name}
            </h1>
            <div>
                {questions.map((quizzesData,index) => (
                    <QuestionDetails quizzesData={quizzesData} index={index+1} key={id}></QuestionDetails>
                ))}
            </div>
        </div>

        </div>
    );
};

export default Questions;