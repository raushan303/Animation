import { useState } from "react";

export default function Animation() {
  const [showText, setShowText] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const onButtonClick = () => {
    if (isAnimating) {
      return;
    }
    if (showText) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setShowText(false);
      }, 950);
      return;
    }
    setShowText(true);
  };

  return (
    <div className="container">
      <button className="button" onClick={onButtonClick}>
        click me
      </button>
      {showText && (
        <div className={`text ${isAnimating && "hide-text"}`}>
          {" "}
          Hi this is text
        </div>
      )}
    </div>
  );
}
