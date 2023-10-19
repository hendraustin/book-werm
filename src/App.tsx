import { useState } from "react";

import BookInformation from "./components/bookInformation";
import BookTitleList from "./components/bookTitleList";
import "./App.css";

export type Metadata = {
  author: string;
  title: string;
  quantity: string;
};

function App() {
  const [isbn, setIsbn] = useState("");
  const [metadataArray, setMetadataArray] = useState<Metadata[]>([]);

  return (
    <div className="App">
      <div className="app-column">
        <h1>Book Werm</h1>
        <img src={require("./book-werm.png")} className="book-werm-logo" />
        <div>
          <BookInformation
            isbn={isbn}
            setIsbn={setIsbn}
            metadataArray={metadataArray}
            setMetadataArray={setMetadataArray}
          />
          <BookTitleList metadataArray={metadataArray} setMetadataArray={setMetadataArray} />
        </div>
      </div>
    </div>
  );
}

export default App;
