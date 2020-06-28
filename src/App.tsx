import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'

function App() {
  const positions = useMousePosition()
  return (
    <div className="App">
      <Hello message={'hello world'} />
      <p>X: {positions.x}, Y: {positions.y}</p>
      <LikeButton />
      <MouseTracker />
    </div>
  );
}

export default App;
