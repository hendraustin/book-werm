import BookInformation from "./bookInformation";
import BookTitleList from "./bookTitleList";
import "../App";
import NavBar from "./navBar";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-column">
        <h1>Book Werm</h1>
        <img src={require("../book-werm.png")} className="book-werm-logo" alt="Book Werm logo" />
        <div>
          <BookInformation />
          <BookTitleList />
        </div>
      </div>
    </div>
  );
}

export default Home;
