import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Card from "./components/Card";
import data from "./data";

function App() {
  const comps = data.map((comp) => {
    return <Card key={comp.id} item={comp} />;
    //{...item} can also sperad and pass obj
  });
  return (
    <div>
      <Navbar />
      <Content />
      <section className="cards-list">{comps}</section>
    </div>
  );
}

export default App;
