// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {
  const [mode,setMode] = useState('light');  //Whether Dark Mode is enabled or not
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
   }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success ");
   }
}

  return (
    <>
{/* <Navbar title ="TextUtils" aboutText = "About US"/> */}
{/* <Navbar/> */}

<Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

  <div className="container my-3">
{/* <About/> */}
<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode = {mode}/>
  </div>
   </>
  );
}

export default App;
