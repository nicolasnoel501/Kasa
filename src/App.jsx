import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.page';
import Navbar from './components/Navbar.component';
import Footer from './components/Footer.component';
import About from './pages/About.page';
import NotFound from './pages/NotFound.page';

// Data
import data from './data/logements.json';
import Housing from './pages/Housing.page';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/housing">
          <Route index element={<Navigate to='/' />} />
          <Route path=":id" element={<Housing/>} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
