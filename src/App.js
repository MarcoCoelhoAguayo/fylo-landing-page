import React from "react";
import Header from "./Header"
import Hero from "./Hero"
import Perks from "./Perks";
import Productive from "./Productive";
import Comments from "./Comments";
import Footer from "./Footer"
import './App.css';

function App() {
  


  return (
    <div className="App">
      <Header />
      <Hero />
      <Perks />
      <Productive />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
