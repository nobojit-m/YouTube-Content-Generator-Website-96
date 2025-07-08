import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TitleGenerator from './pages/TitleGenerator';
import SEOOptimizer from './pages/SEOOptimizer';
import DescriptionGenerator from './pages/DescriptionGenerator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/title-generator" element={<TitleGenerator />} />
            <Route path="/seo-optimizer" element={<SEOOptimizer />} />
            <Route path="/description-generator" element={<DescriptionGenerator />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;