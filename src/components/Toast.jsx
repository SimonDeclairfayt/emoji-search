import { useState, useEffect } from "react";
export default function Toast({ emoji }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(false), 3000); // Hide after 3 seconds

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [emoji]); // Re-render on emoji or message changes
  return (
    <div className="toast" style={{ display: isVisible ? "flex" : "none" }}>
      <span role="img">{emoji.symbol}</span>
      <p>Has been copied to clipboard !</p>
    </div>
  );
}
