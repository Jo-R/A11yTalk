import React from 'react';
import './App.css';
import { Select } from './components/Select';
import { options } from "./options";

function App() {
  return (
    <Select options={options} />
  );
}

export default App;
