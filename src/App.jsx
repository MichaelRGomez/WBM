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

      <hr/>

      <div>
        The other meat of the website
        <div>
          <img src={placeholder} alt="place holder image" style={{width: splashWidth}}/>
          <span>
            <p>Start Date</p>
            <p>Last Worked on</p>
            <p>Completion</p>
          </span>
          <p>Description of the Project</p>
        </div>
        <div>
          Related Art
          <div> {/*Art Post*/}
          <p>Title</p>
          <div>
            <img src={placeholder} alt="place holder image" style={{height: mediaHeight}}/>
          </div>
          <p>05/04/2024</p>
          <p>Words related to Media</p>
        </div>
        </div>
      </div>

      <hr/>

      <div>
        creating the meat of the website
        <form>
          <label>Art:</label>
          <br/>
          <div>
            Art preview of art about to being uploaded
          </div>
          <input type="file"/>
          <br/>
          <label>Type:</label>
          <select>
            <option>Normal</option>
            <option>Project</option>
          </select>
          <br/>
          <label>Title:</label>
          <input type="text"/>
          <br/>
          <label>Date:</label>
          <input type="date"/>
          <br/>
          <label>Words:</label>
          <textarea/>
          <br/>
          <button type="submit">Create </button>
        </form>
      </div>
      
      <hr/>

      <div>
        creating the other meat of the website
        <form>
          <label>Art:</label>
          <br/>
          <div>
            Art preview of art about to being uploaded
          </div>
          <input type="file"/>
          <br/>
          <label>Type:</label>
          <select>
            <option>Exploratory</option>
            <option>Serious</option>
          </select>
          <br/>
          <label>Project Name:</label>
          <input type="text"/>
          <br/>
          <label>Start Date:</label>
          <input type="date"/>
          <br/>
          <label>Description:</label>
          <textarea/>
          <br/>
          <button type="submit">Create </button>
        </form>
      </div>
    </>
  );
};

export default App
