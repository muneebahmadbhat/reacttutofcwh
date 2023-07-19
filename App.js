// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';                            
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');  //Whether Dark Mode is enabled or not
  const [mode2,setMode2] = useState('light');  //Whether Red Mode is enabled or not
  const [mode3,setMode3] = useState('light');  //Whether Green Mode is enabled or not
  const [alert,setAlert] =  useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
const toggleMode = () =>{
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success ");
   }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success ");
   }
};

const toggleMode2 = () =>{
  if(mode2==='light'){
    setMode2('red');
    document.body.style.backgroundColor = '#ff0000';
    showAlert("Red mode has been enabled", "success ");
   }
   else{
    setMode2('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success ");
   }
}

const toggleMode3 = () =>{
  if(mode3==='light'){
    setMode3('green');
    document.body.style.backgroundColor = '#00ff00';
    showAlert("Green mode has been enabled", "success ");
   }
   else{
    setMode3('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success ");
   }
}

  return (
    <>
{/* <Navbar title ="TextUtils" aboutText = "About US"/> */}
{/* <Navbar/> */}

    <Router>
<Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} mode2 ={mode2} toggleMode2={toggleMode2} mode3 = {mode3} toggleMode3={toggleMode3} />
<Alert alert={alert}/>

  <div className="container my-3">
  <Routes>   
  {/* //users --> Component 1
      //user2/home --> Component
   */}
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode = {mode}/>} />
        </Routes>
      </div>
</Router>
   </>
  );
}

export default App;
