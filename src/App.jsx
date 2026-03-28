import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Tourism from './pages/Tourism';
import ScenicRouteDetail from './pages/ScenicRouteDetail';
import NewTrip from './pages/NewTrip';
import History from './pages/History';
import Statistics from './pages/Statistics';
import RiskAnalysis from './pages/RiskAnalysis';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-trip" element={<NewTrip />} />
          <Route path="/history" element={<History />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/tourism/scenic/:id" element={<ScenicRouteDetail />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/risk-analysis" element={<RiskAnalysis />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
