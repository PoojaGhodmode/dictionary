import { Container, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { dictionaryAPI } from "./API";
import "./App.css";
import Definitions from "./Components/Definitions";
import Header from "./Components/Header";
import Switch from "@material-ui/core/Switch";
import Brightness3RoundedIcon from "@material-ui/icons/Brightness3Rounded";
import Brightness7RoundedIcon from "@material-ui/icons/Brightness7Rounded";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [IsdarkTheme, setIsdarkTheme] = useState(true);

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
  const DarkTheme = withStyles({
    switchBase: {
      color: grey[300],

      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div
      className="App"
      style={{
        background: IsdarkTheme ? "#414345" : "rgba(0, 0, 0, 0.1)",
        color: IsdarkTheme ? "aliceblue" : "#414345",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Container className="container" maxWidth="md">
        <div className="btn">
          <span>
            {IsdarkTheme ? (
              <Brightness3RoundedIcon />
            ) : (
              <Brightness7RoundedIcon />
            )}
          </span>
          <DarkTheme
            checked={IsdarkTheme}
            onChange={() => setIsdarkTheme(!IsdarkTheme)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          setWord={setWord}
          word={word}
          IsdarkTheme={IsdarkTheme}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            IsdarkTheme={IsdarkTheme}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
