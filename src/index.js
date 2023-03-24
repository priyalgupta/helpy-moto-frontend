// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Tracker from "./components/Tracker";
import Service from "./components/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Index() {
  
  return (
    <BrowserRouter>
      
      <Routes>
          
          <Route path="/" element={<Tracker />} />
          <Route path="/service" element={<Service />} />
          
      </Routes>
      
    </BrowserRouter>
      
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
