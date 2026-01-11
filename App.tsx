
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './screens/Dashboard';
import Tracking from './screens/Tracking';
import Logbook from './screens/Logbook';
import Advisor from './screens/Advisor';

const AppContent: React.FC = () => {
  const location = useLocation();
  
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/logbook') return 'logbook';
    if (path === '/tracking') return 'tracking';
    if (path === '/advisor') return 'advisor';
    return 'home';
  };

  return (
    <Layout activeTab={getActiveTab()}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/logbook" element={<Logbook />} />
        <Route path="/advisor" element={<Advisor />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
