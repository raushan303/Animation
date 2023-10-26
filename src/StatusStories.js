// src/components/StatusStories.js
import React, { useState, useEffect } from "react";
import "./StatusStories.css"; // Import the CSS file

const storiesData = [
  { id: 1, content: "Story 1" },
  { id: 2, content: "Story 2" },
  { id: 3, content: "Story 3" },
  { id: 4, content: "Story 4" }
  // Add more stories as needed
];
const storiesLength = storiesData.length;
const storyDuration = 5000; // Adjust the duration as needed (in milliseconds)
const progressInterval = 100; // Adjust the interval as needed
let intervalId;

// progress bar completed 100%
// add a class exist-animation on story
// after few second add enter-animation class on story
// then after few more second start progress-bar

const StatusStories = () => {
  const [showStory, setShowStory] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const setStoryInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      setProgress(
        (prevProgress) =>
          prevProgress + (progressInterval / storyDuration) * 100
      );
    }, progressInterval);
  };

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(intervalId);
      setProgress(0);

      if (currentStoryIndex + 1 === storiesLength) {
        setShowStory(false);
        return;
      }

      const storyCard = document.querySelector(".story");
      storyCard.className = "story exist-animation";

      setTimeout(() => {
        storyCard.className = "story enter-animation";
        setCurrentStoryIndex(currentStoryIndex + 1);
      }, 3000);

      setTimeout(() => {
        setStoryInterval();
      }, 6000);
    }
  }, [progress]);

  const onShowStory = () => {
    setCurrentStoryIndex(0);
    setShowStory(true);
    setTimeout(() => {
      setStoryInterval();
    }, 3000);
  };

  return (
    <div className="status-stories">
      <button className="story-button" onClick={onShowStory}>
        show story
      </button>
      {showStory && (
        <div className="story-box">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="story enter-animation">
            <div>{storiesData[currentStoryIndex].content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusStories;
