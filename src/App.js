
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Receivedmails from "./pages/Receivedmails";
import Register from "./pages/Register";
import Sentmail from "./pages/Sendedmails";
import MaildetailPage from "./pages/Maildetailpage/index";
import { useEffect } from "react";


import "./styles.css";
export default function App() {


  return (
    <BrowserRouter >
      {
        window.location.pathname !== '/register' ? <Header /> : null
      }
      <Routes>
        <Route path="/" element={<Receivedmails />} />
        <Route path="/sent" element={<Sentmail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/maildetail/:id" element={<MaildetailPage />} />
        {/* <Route path="/courses/:type" element={< Onlinecourse />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
