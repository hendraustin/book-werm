import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import SearchBar from "./components/bookManagementPage/bookManagement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchBar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
