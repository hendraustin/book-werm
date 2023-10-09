import { useState } from "react";
import logo from "./logo.svg";
import BookInformation from "./components/bookInformation";
import BookTitleList from "./components/bookTitleList";
import "./App.css";

function App() {
  const [isbn, setIsbn] = useState("");
  const [list, setList] = useState<string[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <BookInformation isbn={isbn} list={list} setIsbn={setIsbn} setList={setList} />
          <BookTitleList list={list} setList={setList} />
        </div>
      </header>
    </div>
  );
}

export default App;
