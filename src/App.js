import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import PropTypes from 'prop-types'




function App() {
  return (
    <>
  
<Navbar title="Textutils" Action="Action"/>

<TextForm title="Text Functionality"/>
   </>
  
  );
}

export default App;
