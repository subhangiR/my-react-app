import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



import React, { useState } from 'react';

import Alert from './components/Alert';
function App() {

  const [textChanges, settextChanges] = useState('Enable dark mode');

  const [mode, setMode] = useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
     setAlert(null); 
  }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      settextChanges('Enable light mode');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success");
      
    } else{
      setMode('light');
      settextChanges('Enable dark mode');
      document.body.style.backgroundColor="#fff";
      showAlert("light mode has been enabled","success");
      setInterval(()=>{
        document.title='TextUtils - Dark Mode';
      },2000)
      setInterval(()=>{
        document.title='TextUtils - Amazing Mode';
      },1500)

      
      document.title='TextUtils - Dark Mode';
  }
};
  return (
    <>
 {/* <Router> */}
  <Navbar title="Textutils" Action="Action" mode={mode} toggleMode={toggleMode} modeChange={textChanges} />
  <Alert title={alert} />
  <TextForm title="Text Functionality" Alertmsg={showAlert} />
  {/* <Routes>
    <Route path="/" element={<TextForm title="Text Functionality" Alertmsg={showAlert} />} />
    <Route path="/about" element={<About />} />
  </Routes> */}
{/* </Router> */}

    </>

  );
}

export default App;
