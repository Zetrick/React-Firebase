// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";

//Page Components
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";

//Other Components
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  const [searchTerm, setSearch] = useState("");

  const setSearchTerm = useCallback((term) => {
    setSearch(term);
  }, []);

  return (
    <div className="font-raleway">
      <BrowserRouter>
        <NavBar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
