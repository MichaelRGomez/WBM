import './App.css'

import Posts from './pages/Posts'
import Project from './pages/Project'
import Projects from './pages/Projects'
import CreateArt from './pages/CreateArt'
import CreateProject from './pages/CreateProject'
import Navigation from './layout/Navigation'

function App() {
  const mediaHeight = "400px";
  const splashWidth = "900px";

  return (
    <>
      <Project mediaHeight={mediaHeight} splashWidth={splashWidth}/>

      <hr/>

      <CreateArt/>
      
      <hr/>

      <CreateProject/>

      <hr/>

      <Projects />
    </>
  );
};

export default App
