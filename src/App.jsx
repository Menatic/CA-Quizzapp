import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [mode, setMode] = useState("light");

  const getBody = () => {
    document.querySelector("body").setAttribute("class", mode);
  };

  useEffect(() => {
    getBody();
  }, [mode]);
  
  return (
    <>
      <QuestionBox mode={mode} />
      
    </>
  );
}

export default App;

