import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Property from "./components/property";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/properties" element={<Property />} />
        </Routes>
        <Property />
      </main>
    </>
  );
}

export default App;
