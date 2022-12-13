import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUpForm from './componets/SignUpForm';
import LoginForm from './componets/LoginForm';
import Home from './componets/Home';
import 'react-toastify/dist/ReactToastify.css';
import Header from './componets/Header';



function App() {


  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
