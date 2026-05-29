import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SACSPage from './pages/Products/SACSPage';
import IRSPage from './pages/Products/IRSPage';
import ASDSPage from './pages/Products/ASDSPage';
import MEMPage from './pages/Products/MEMPage';
import CompanyOverview from './pages/About/CompanyOverview';
import Leadership from './pages/About/Leadership';
import Promoters from './pages/About/Promoters';
import QualityPolicy from './pages/About/QualityPolicy';
import CareersPage from './pages/About/CareersPage';
import CaseStudies from './pages/CaseStudies';
import IIoT from './pages/IIoT';
import BuildingManagementSystem from './pages/SystemIntegration/BMSPage';
import EnvironmentalMonitoringSystem from './pages/SystemIntegration/EMSPage';
import Testimonial from './pages/TestimonialsPage';
import ContactUs from './pages/Contactus';
import LowVoltageSystems from './pages/SystemIntegration/LowVoltageSystems';
import ComplianceProductPage from './pages/Complianceproductspage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/sacs" element={<SACSPage />} />
        <Route path="/products/irs" element={<IRSPage />} />
        <Route path="/products/asds" element={<ASDSPage />} />
        <Route path="/products/mem" element={<MEMPage />} />

        <Route path="/company-overview" element={<CompanyOverview />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/promoters" element={<Promoters />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/careers" element={<CareersPage />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/testimonial" element={<Testimonial />} />


        <Route path="/system-integration/building-management-system" element={<BuildingManagementSystem />} />
        <Route path="/system-integration/environmental-monitoring-system" element={<EnvironmentalMonitoringSystem/>} />     
        <Route path="/system-integration/low-voltage-systems" element={<LowVoltageSystems />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/compliance-products" element={<ComplianceProductPage />} />       
        <Route path="/iiot-implementations" element={<IIoT />} />
      </Routes>
    </Router>
  );
}

export default App;
