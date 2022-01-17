import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#212535';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  };
  
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </div>
  );
}

export default App;
