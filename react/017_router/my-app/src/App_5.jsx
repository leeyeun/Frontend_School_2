import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={ConTact} />
      <Route path="/blog" exact component={Blog} />
    </BrowserRouter>
  );
}

function Home(){
  return <h1>home</h1>
}

function About(){
  return <h1>about</h1>
}

function ConTact(){
  return <h1>contact</h1>
}

function Blog(){
  return <h1>blog</h1>
}





export default App;