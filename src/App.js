import React from 'react';
import './App.css';

import ClassComponentInput from './ClassComponentInput';
import FunctionalComponentInput from './FunctionalComponentInput';
import ClassComponentResize from './ClassComponentResize';
import FunctionalComponentResize from './FunctionalComponentResize';
import ClassComponentTitle from './ClassComponentTitle';
import FunctionalComponentTitle from './FunctionalComponentTitle';



function App() {
  return (
    <div className="App">
      {/* <ClassComponentInput></ClassComponentInput>
      <FunctionalComponentInput></FunctionalComponentInput>
      <ClassComponentResize></ClassComponentResize>
      <FunctionalComponentResize></FunctionalComponentResize>
      <ClassComponentTitle></ClassComponentTitle> */}
      <FunctionalComponentTitle></FunctionalComponentTitle>
    </div>
  );
}

export default App;
