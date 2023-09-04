import React,{useState} from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert(" Dark Mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode enabled","success");
    }
  }

  return (
    <> 
      
      {/* <div className="conati">
      <TextForm heading="Enter Your details" mode={mode}/>
      </div> */}

      <Router>
      <Navbar title="TextUtils" mode={mode} aboutText="About us" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Routes>
          <Route path="/home" element={<TextForm heading="Enter Your details" mode={mode}/>} /> 
          <Route path="/about" element={<About />}/>
          

        </Routes>
      </Router>
      
    
    
    </>
  );
}

export default App;
