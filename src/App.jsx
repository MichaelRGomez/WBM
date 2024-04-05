import './App.css'
import placeholder from '../public/placeholder.png'

function App() {
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
            <img src={placeholder} alt="place holder image" style={{height: "200px"}}/>
          </div>
          <p>Words related to Media</p>
        </div>
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>Media</div>
          <p>Words related to Media</p>
        </div>
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>Media</div>
          <p>Words related to Media</p>
        </div>
      </div>
    </>
  );
};

export default App
