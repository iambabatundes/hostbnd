import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Property from "./components/property";
import PropertyDetails from "./components/propertyDetails";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" exact element={<Property />} />
          <Route path="/properties" exact element={<Property />} />
          <Route path="properties/:id" element={<PropertyDetails />} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
