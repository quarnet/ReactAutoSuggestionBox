import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import CountryFull from './Components/Content/CountryFull';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CountryFull></CountryFull>
      <div className="footer">
        <div>
          patelaxay47@gmail.com
        </div>
      </div>
    </div>
  );
}

export default App;
