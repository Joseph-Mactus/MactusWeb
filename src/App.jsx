import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SACSPage from './pages/SACSPage';
import IRSPage from './pages/IRSPage';
import ASDSPage from './pages/ASDSPage';
import CompanyOverview from './pages/CompanyOverview';
import Leadership from './pages/Leadership';
import Promoters from './pages/Promoters';
import QualityPolicy from './pages/QualityPolicy';
import CareersPage from './pages/CareersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sacs" element={<SACSPage />} />
        <Route path="/irs" element={<IRSPage />} />
        <Route path="/asds" element={<ASDSPage />} />
        <Route path="/company-overview" element={<CompanyOverview />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/promoters" element={<Promoters />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
