import {  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipie from './pages/Recipie';
import Pnf from './pages/Pnf';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipie />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;