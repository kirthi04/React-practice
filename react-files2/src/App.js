import React , { component } from 'react';
import logo from './logo.svg';
import './App.css';
import Getreq from './components/Getreq'
import Postreq from './components/Postreq'

function App() {
  return (
    <div className="App">
      {/*<Getreq /> */}
      <Postreq />
    </div>
  );
}

export default App;
