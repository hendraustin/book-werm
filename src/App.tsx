import { useState } from 'react';
import logo from './logo.svg';
import BookInformation from './components/bookInformation';
import './App.css';

function App() {
  const [isbn, setIsbn] = useState("Haven't searched");
  const [title, setTitle] = useState("Nothing here");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <BookInformation 
            isbn={isbn}
            setIsbn={setIsbn}
            setTitle={setTitle}
          />
          <div>
            <p>
              Title: {title}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
