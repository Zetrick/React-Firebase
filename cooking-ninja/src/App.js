// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page Components
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";

//Other Components
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="font-raleway">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
