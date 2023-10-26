import "./styles.css";

import Animation from "./Animation";
import Transform from "./Transform";
import ProgressBar from "./ProgressBar";
import StatusStories from "./StatusStories";

export default function App() {
  return (
    <div className="App">
      <Animation />
      <Transform />
      <ProgressBar />
      <StatusStories />
    </div>
  );
}
