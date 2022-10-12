import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const QuizContext = createContext([])
export const QuestionContext = createContext([])


const Main = () => {
 const quizs = useLoaderData()

    return (
        <QuizContext.Provider value={quizs }>
        

           <Header></Header>  
           <Outlet></Outlet>
          
        </QuizContext.Provider>
    );
};

export default Main;