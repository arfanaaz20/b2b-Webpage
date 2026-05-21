import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import LoginCard from "./components/LoginCard";
import "./App.css";

function App() {

  // ✅ ADD
  const [country, setCountry] = useState("IN");

  return (
    <div className="main">
      
      {/* ✅ PASS PROPS */}
      <Navbar country={country} setCountry={setCountry} />

      <div className="content">
        {/* ✅ PASS COUNTRY */}
        <Hero country={country} />
      </div>

    </div>
  );
}

export default App;