import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import "./Header.css";
import catergories from "../../categories";

type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  word: string;
  IsdarkTheme: boolean;
};

const Header: React.FC<Props> = ({
  category,
  setCategory,
  setWord,
  word,
  IsdarkTheme,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: IsdarkTheme ? "#fff" : "#000",
      },
      type: IsdarkTheme ? "dark" : "light",
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="outlined-basic"
            className="input-text"
            label="Search the word"
            variant="outlined"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            className="select-input"
            label="Language"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            helperText="Select Language"
            variant="outlined"
          >
            {catergories.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
