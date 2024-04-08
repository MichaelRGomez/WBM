import './App.css'

import Posts from './pages/Posts';

function App() {
  const mediaHeight = "400px";
  const splashWidth = "900px";

  return (
    <>
      <Posts mediaHeight={mediaHeight} splashWidth={splashWidth}/>
    </>
  );
};

export default App
