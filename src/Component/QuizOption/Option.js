import React from 'react';
import './option.css'
const Option = ({option}) => {
    console.log(option);
    return (
    <div className='options'>
       <input
        type="radio"
        id={option}
        name="fav_language"
        value={option}
      />
      <label className="ml-2" htmlFor={option}>
        {option}
           </label> 
        </div>
    );
};

export default Option;