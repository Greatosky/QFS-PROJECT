// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hom from './/component/Home.js';
import Login from './component/login.js';
import Sign from './component/sign.js';


export default function Ap() {
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Hom />} />
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Ap />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
