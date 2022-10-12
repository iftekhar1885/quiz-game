import React from 'react';

const Blog = () => {
  return (
      <div className='bg-white'>
        <div>
          <h1 className='text-4xl text-center m-10 font-extrabold'>All Questions& Answer </h1>
        </div>
        <div>
          <h3 className='text-2xl font-bold m-10'>1. What is a purpose of react router?</h3>
          <p className='text-2xl ml-20'>To get started with React Router in a web app, you’ll need a React web app. If you   need to create one, we recommend you try Create React App.</p> 
          <p className='text-2xl ml-20'>It’s a popular tool that works really well with React Router.First, install create-react-app and make a new project with it.</p>
          

          <h3 className='text-2xl font-bold m-10'>2. How does context API works?</h3>
          <p className='text-2xl ml-20'>Is the process of resource navigation in a web app. This is how your app determines what to do with a client request.</p>
           <p className='text-2xl ml-20'>A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app.</p>

          <h3 className='text-2xl font-bold m-10'>3. What is use Wrap?</h3>
          <p className='text-2xl ml-20'>You might have heard that React allows you to build custom components that can be reused throughout the project.</p> 
          <p className='text-2xl ml-20'>In fact, after drawing a mockup of the web application you want to build using boxes you might notice some patterns or similarities between the components you create.</p>
          <p className='text-2xl ml-20'>
          With that said, how can you write code as efficiently and clean as possible while dealing with some components that might differ only slightly from another?
          </p>
          
        </div>
          
    </div>

  );
};

export default Blog;