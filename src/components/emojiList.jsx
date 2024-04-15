import { useEffect, useState } from "react";

export default function EmojiList({ emojis }) {
  const [emojiList, setEmojiList] = useState([]);
  useEffect(() => {
    if (emojis) {
      setEmojiList(emojis);
    }
  }, [emojis]);
  return (
    <ul className="flex">
      {emojiList.map((emoji) => {
        return (
          <li key={emoji.title}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(emoji.symbol);
              }}
              className="emoji-button"
            >
              {emoji.symbol}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
