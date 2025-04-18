import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';



import React, { useState } from 'react';
function App() {

  const [textChanges, settextChanges] = useState('Enable dark mode');

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      settextChanges('Enable light mode');
      document.body.style.backgroundColor="grey";
    } else{
      setMode('light');
      settextChanges('Enable dark mode');
      document.body.style.backgroundColor="#fff";
  }
};
  return (
    <>

      <Navbar title="Textutils" Action="Action" mode={mode} toggleMode={toggleMode} modeChange={textChanges}/>

      <TextForm title="Text Functionality" />
    </>

  );
}

export default App;
