import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Link, Route } from 'react-router-dom'
import Home from './components/Home';
import Report from './components/Report';
import Setting from './components/Setting';


function App() {
  const liStyle = {
    display: "inline",
    listStyleType: "none",
    marginLeft: "20px" 
  }

  return (
    <BrowserRouter>
    <div className="App">
        <div>
          <ul>
            <li style={liStyle}><Link to="/home">종합상황판</Link></li>
            <li style={liStyle}><Link to="/Report">보고서</Link></li>
            <li style={liStyle}><Link to="/Setting">설정</Link></li>
          </ul>
        </div>
        <Routes>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/Report' element={<Report />}></Route>
          <Route exact path='/Setting' element={<Setting />}></Route>
        </Routes>    
    </div>
    </BrowserRouter>
  );
}

export default App;