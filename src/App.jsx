import EmojiList from "./components/emojiList";
import emojis from "./assets/emojis.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filteredEmojiList, setFilteredEmojiList] = useState(emojis);
  const searchEmoji = () => {
    const result = emojis.filter((emoji) => {
      if (
        emoji.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        emoji.keywords.includes(inputValue.toLowerCase())
      ) {
        return true;
      }
    });
    setFilteredEmojiList(result);
    setInputValue("");
  };
  return (
    <>
      <h1>Search for your emoji !</h1>
      <input
        type="text"
        name="searchbar"
        className="searchbar"
        placeholder="Search for emoji"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={searchEmoji}>Search</button>
      <EmojiList emojis={filteredEmojiList} />
    </>
  );
}

export default App;
