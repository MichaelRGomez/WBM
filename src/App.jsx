import './App.css'
import placeholder from '/placeholder.png'
import world from '/world.gif'
import funny from '/funny.mp4'

import Posts from './pages/Posts'
import Project from './pages/Project'
import CreateArt from './pages/CreateArt'
import CreateProject from './pages/CreateProject'

function App() {
  const mediaHeight = "400px";
  const splashWidth = "900px";

  return (
    <>
      <h1>Website header text</h1>

      <nav>
        <a>Home Link</a>
        <a>The actual content</a>
        <a>About</a>
        <a>Contact</a>
      </nav>

      <Posts mediaHeight={mediaHeight} splashWidth={splashWidth}/>

      <hr/>

      <Project mediaHeight={mediaHeight} splashWidth={splashWidth}/>

      <hr/>

      <CreateArt/>
      
      <hr/>

      <CreateProject/>
    </>
  );
};

export default App
