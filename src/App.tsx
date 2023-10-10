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
      <div className="app-column">
        <h1>Book Werm</h1>
        <img src={require("./book-werm.png")} className="book-werm-logo" />
        <div>
          <BookInformation isbn={isbn} list={list} setIsbn={setIsbn} setList={setList} />
          <BookTitleList list={list} setList={setList} />
        </div>

      </div>
    </div>
  );
}

export default App;
