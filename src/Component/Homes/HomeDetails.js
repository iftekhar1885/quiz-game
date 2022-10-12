import './HomeDetails.css';
import { Link } from 'react-router-dom';

const HomeDetails = ({ quiz }) => {
     const {logo, name, id } = quiz
    //  console.log(quiz);
     
    
    return (
      
      <div className='flex flex-row'>
      <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className='object-cover w-25 h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={logo}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      
      <Link to={`questions/${id}`}>
      <button
      
        type='button'
        className='px-8 block w-25 mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
      >
        Start Practice
      </button>
      </Link>
    </div>
       </div>
         
    );
};

export default HomeDetails;