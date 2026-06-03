import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Collections from "./components/Collections";
import LatestDrops from "./components/LatestDrops";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Collections />
      <LatestDrops />
      <About />
      <Footer />
    </>
  );
}

export default App;