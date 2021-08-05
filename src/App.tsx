import { Container } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { dictionaryAPI } from "./API";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  useEffect(() => {
    const fetchData = async () => {
      if (word) {
        const data = await dictionaryAPI(word, category);
        setMeanings(data);
      }
    };
    fetchData();
  }, [word, category]);
  console.log(meanings);

  return (
    <div className="App">
      <Container className="container" maxWidth="md">
        <Header
          category={category}
          setCategory={setCategory}
          setWord={setWord}
          word={word}
        />
      </Container>
    </div>
  );
}

export default App;
