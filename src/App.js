import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Component/Blog/Blog";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Home from "./Component/Home/Home";
import Main from "./Component/Layout/Main";
import Questions from "./Component/Question/Questions";
import Statics from "./Component/Statics/Statics";




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage></ErrorPage>,
      loader: () => {
        return fetch(`https://openapi.programming-hero.com/api/quiz`)
      },
      element: <Main></Main>,
     
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/questions/:id',
          loader: ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          } ,
          element: <Questions></Questions>
          },

        {
          path: '/statics',
          element: <Statics></Statics>
        },
      ]
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
