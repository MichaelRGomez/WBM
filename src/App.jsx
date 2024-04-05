import './App.css'
import placeholder from '/placeholder.png'
import world from '/world.gif'
import funny from '/funny.mp4'

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
      
      <div>
        The meat of the website
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>
            <img src={placeholder} alt="place holder image" style={{height: mediaHeight}}/>
          </div>
          <p>05/04/2024</p>
          <p>Words related to Media</p>
        </div>
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>
            <img src={world} alt="the world spinning" style={{height: mediaHeight}}/>
          </div>
          <p>05/04/2024</p>
          <p>Words related to Media</p>
        </div>
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>
            <video style={{height: mediaHeight}} controls>
              <source type="video/mp4" src={funny}/>
            </video>
          </div>
          <p>05/04/2024</p>
          <p>Words related to Media</p>
        </div>
      </div>
    </>
  );
};

export default App
