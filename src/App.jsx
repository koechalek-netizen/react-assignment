import React from 'react';
import User from './components/User';
import Hobbies from './components/Hobbies';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
      <div>ROOT COMPONENT</div>
      <User name="Alek Koech" />
      <Hobbies />
      <About />
    </>
  );
}

export default App;