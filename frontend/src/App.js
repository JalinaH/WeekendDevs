import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <div style={{
      background: 'radial-gradient(circle at top, rgb(14, 22, 54) 20%, rgba(2, 5, 15, 1) 60%, rgba(0, 0, 5, 1) 90%)',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative'
    }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/particles" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;