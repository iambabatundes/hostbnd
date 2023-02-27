import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navBar";
import Property from "./components/property";
import PropertyDetails from "./components/propertyDetails";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <main className="main">
        <Routes>
          <Route path="/" exact element={<Property />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/properties" exact element={<Property />} />
          <Route path="properties/:id" element={<PropertyDetails />} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
