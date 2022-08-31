import React, { useState, useCallback, useMemo } from "react";

import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  console.log('APP RUNNING')

  // The function will always be the same regardless of whether the component is reevaluated
  const toggelParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  }, [])

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={toggelParagraphHandler}>Toggle Paragraph!</Button>

      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
