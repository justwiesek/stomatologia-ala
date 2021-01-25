import React from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/ Header';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Intro />
        <About />
        <Services />
        <Footer />
    </div>
  );
}

export default App;
