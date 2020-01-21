import React from 'react';
import './App.css';
import { Select } from './components/Select';
import { options } from "./options";

// For this one:
// if main is a div get landmark fails on axe
// want save button to announce
// compare with native cf how much code to get functionality??
function App() {
  return (
    <main>  
      <h1>A simple page</h1>
      <Select options={options} />
      <button>Submit</button>
      <select>
        {
          options.map((i) => 
            <option value={i}>{i}</option>
          )
        }
       </select>
    </main>
  );
}

export default App;
