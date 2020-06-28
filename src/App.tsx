import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'

function App() {
  return (
    <div className="App">
      <Hello message={'hello world'} />
      <LikeButton />
    </div>
  );
}

export default App;
