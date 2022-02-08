import React from "react";
import { Header } from "../src/components/Header";
import { Main } from "../src/components/Main";
import "./App.css";
import "./styles/Header.css";
import "./styles/SearchForm.css";
import "./styles/ResultsList.css";
import "./styles/Result.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
