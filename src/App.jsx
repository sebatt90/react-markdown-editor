import { useState } from "react";
import "./css/App.css";

import InputMarkdown from "./components/InputMarkdown";
import OutputMarkdown from "./components/OutputMarkdown";

function App() {

  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Markdown Parser React</h1>
      <InputMarkdown onChange={event => { setText(event.target.value); }}/>
      <OutputMarkdown text={text}/>
    </div>
  )
}


export default App;
