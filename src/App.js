import React from 'react';
import './App.css';

import AppRouter from './AppRouter';
import HeaderBar from './components/HeaderBar/HeaderBar';
function App() {
   return (
    <div id="app" className="container">
      <HeaderBar />
      <AppRouter />
    </div>
   )
}

export default App;