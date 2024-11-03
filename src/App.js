import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h3>Sistema de Contingência</h3>
        <div className="hospital-logo">REAL HOSPITAL PORTUGUÊS</div>
        <img src="LOGOTIPO_RHP.png" alt="Real Hospital Português" className="LOGOTIPO_RHP" />
      </header>
      <div className="app-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
