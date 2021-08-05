import axios from "axios";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/";

//https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>

export const dictionaryAPI = async (word: string, category: string) => {
  try {
    const data = await axios.get(`${API_URL}${category}/${word}`);
    if (data.status === 200) {
      const meaning = data.data;
      return meaning;
    }
    return;
  } catch (error) {
    console.log(error);
  }
};
