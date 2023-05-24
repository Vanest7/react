import React from 'react';
import './App.css';
import MyRoutes from "./routers/Routes"
function App() {
  return (
    <div>
      <header> 
        <h1 className='tittle'>🎥 Películas 🎥</h1>
      </header>
      <MyRoutes />
    </div>
    
    
  );
}

export default App;
