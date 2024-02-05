import BookInformation from "./components/bookInformation";
import BookTitleList from "./components/bookTitleList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-column">
        <h1>Book Werm</h1>
        <img src={require("./book-werm.png")} className="book-werm-logo" alt="Book Werm logo" />
        <div>
          <BookInformation />
          <BookTitleList />
        </div>
      </div>
    </div>
  );
}

export default App;
