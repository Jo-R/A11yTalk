import React from 'react';
import './App.css';
import { Select } from './components/Select';
import { options } from "./options";

// For this one:
// if main is a div get landmark fails on axe
// want save button to announce
function App() {
  return (
    <main>  
      <h1>A simple page</h1>
      <Select options={options} />
      <button>Submit</button>
    </main>
  );
}

export default App;
