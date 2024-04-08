import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import Root from './routes/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Posts from './pages/Posts.jsx';
import Projects from './pages/Projects.jsx';
import CreateArt from './pages/CreateArt.jsx';
import CreateProject from './pages/CreateProject.jsx';
import Home from './pages/Home.jsx'

const mediaHeight = "400px";
const splashWidth = "900px";
const miniSplashHeight = "120px";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Home",
        element: <Home mediaHeight={mediaHeight}/>,
      },
      {
        path: "Posts",
        element: <Posts  mediaHeight={mediaHeight} splashWidth={splashWidth}/>    
      },
      {
        path: "Project/List",
        element: <Projects miniSplashHeight={miniSplashHeight}/>
      },
      {
        path: "Post/Create",
        element: <CreateArt />
      },
      {
        path: "Project/Create",
        element: <CreateProject />
      }
    
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
