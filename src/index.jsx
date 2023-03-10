import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

import Header from './components/Header';
import Home from './components/Home';
import Body from './components/Body';
import Bodybis from './components/Bodybis';
import Footer from './components/Footer';
import Quizz from './pages/Quizz';

import Offer from './pages/Offer';
import Result from './pages/Result';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<><Header/><Home/><Body/><Bodybis/><Footer/></>}/>
          <Route path="/positionnement" element={<><Header/><Quizz/><Footer/></>}/>
          <Route path="/offre" element={<><Header/><Offer/><Footer/></>}/>
          <Route path="/resultat" element={<><Header/><Result/><Footer/></>}/>
          <Route path="/*" element={<><Header/><Error/><Footer/></>}/>
        </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

