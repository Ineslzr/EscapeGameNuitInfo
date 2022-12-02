import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrossWord from './component/CrossWord';
import QuatreImagesUnMot from './component/QuatreImagesUnMot';
import ExpressionMath from './component/ExpressionMath';
import Intro from './component/Intro';
import Ivert from './component/Ivert';
import SecretPage from './component/SecretPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/quatreimageunmot" element={<QuatreImagesUnMot/>}/>
        <Route path="/crossword" element={<CrossWord/>}/>
        <Route path="/expressionmath" element={<ExpressionMath/>}/>
        <Route path="/ivert" element={<Ivert/>}/>
        <Route path="/secret" element={<SecretPage/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
