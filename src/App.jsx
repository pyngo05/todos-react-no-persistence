import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  // This runs on the initial render and every time the count changes.
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);

    // ⚠️ Not clearing the timeout could cause a memory leak.
  });
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Page has been open for {count} seconds.
        </p>
      </header>
    </div>
  );
}

export default App;
