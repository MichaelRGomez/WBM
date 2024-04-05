import { useState } from 'react';
import './App.css'
import Login from './components/Login'

function App() {
  const entries = [
    { id: 0,
      title: "Yuuza",
      type: "Character",
      subtype: "Protagonist",
      image: "",
      description: "Yuuza is the main character of Locos: The Wanderer..."
    },
    { id: 1,
      title: "Yuuza's Helmet",
      type: "Item",
      subtype: "Equipment",
      image: "",
      description: "It's a sci-fi helmet"
    },
    { id: 3,
      title: "Endurance",
      type: "Item",
      subtype: "Vehicle",
      image: "",
      description: "Yuuza's custom built pulsecraft"
    },
  ]

  const listEntries = entries.map(entry =>
    <div key={entry.id}>
      <h3>{entry.title}</h3>
      <h5>{entry.type}</h5>
      <h6>{entry.subtype}</h6>
      <img src={entry.image}/>
      <p>
        {entry.description}
      </p>
    </div>
    );

    const [login, setLogin] = useState(false);

    let bColor = "red";

    if(login){
        bColor = "green";
    } else {
        bColor = "red";
    }

    function handleClick(){
        if(!login){
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

  return (
    <>
      <h1>World Building Manager</h1>
      
      <div>
        <Login handleClick={handleClick} bColor={bColor} />
      </div>

      <br/>

      <div>
        <Login handleClick={handleClick} bColor={bColor}/>
      </div>

      {/* This will most likely become a component */}
      <div> 
        <h2>Latest Entries:</h2>
          {listEntries}
      </div>
    </>
  );
};

export default App
