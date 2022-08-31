import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING')

  // The function will always be the same regardless of whether the component is reevaluated
  const toggelParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  }, [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={toggelParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
