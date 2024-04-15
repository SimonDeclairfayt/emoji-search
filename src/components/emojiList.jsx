import { useEffect, useState } from "react";
function Toast({ emoji, isVisible }) {
  return (
    <div className="toast" style={{ opacity: isVisible ? "1" : "0" }}>
      <span role="img">{emoji}</span>
      <p>Has been copied to clipboard !</p>
    </div>
  );
}
export default function EmojiList({ emojis }) {
  const [isVisible, setIsVisible] = useState(false);
  const [emojiList, setEmojiList] = useState([]);
  const [lastClickedEmoji, setLastClickedEmoji] = useState(null);
  useEffect(() => {
    if (emojis) {
      setEmojiList(emojis);
    }
  }, [emojis]);
  return (
    <>
      <ul className="flex">
        {emojiList.map((emoji) => {
          return (
            <li key={emoji.title}>
              <button
                onClick={() => {
                  navigator.clipboard
                    .writeText(emoji.symbol)
                    .then(() => setLastClickedEmoji(emoji.symbol))
                    .then(() => setIsVisible(true))
                    .then(() => {
                      return new Promise((resolve) =>
                        setTimeout(resolve, 3000)
                      );
                    })
                    .then(() => setIsVisible(false));
                }}
                className="emoji-button"
              >
                {emoji.symbol}
              </button>
            </li>
          );
        })}
      </ul>
      <Toast emoji={lastClickedEmoji} isVisible={isVisible} />
    </>
  );
}
