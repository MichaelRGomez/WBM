import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import Root from './routes/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Posts from './pages/Posts.jsx';
import Projects from './pages/Projects.jsx';

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
        path: "app",
        element: <App/>
      },
      {
        path: "posts",
        element: <Posts  mediaHeight={mediaHeight} splashWidth={splashWidth}/>    
      },
      {
        path: "projects",
        element: <Projects miniSplashHeight={miniSplashHeight}/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
