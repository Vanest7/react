import React from 'react';
import './App.css';
import MyRoutes from "./routers/Routes";
import Footer from './utils/Footer';

function App() {
  return (
    <div>
      <header> 
        <h1 className='tittle'>🎥 Reel and read 🎥</h1>
      </header>
      <MyRoutes />
     <Footer/>
    </div>
    
    
  );
}

export default App;
