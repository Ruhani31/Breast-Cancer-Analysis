import React, { useState } from 'react';
import { BarChart3, Database, GitBranch, LineChart, Lock, LogIn, PieChart, Share2 } from 'lucide-react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import DataPreprocessing from './components/DataPreprocessing';
import EDA from './components/EDA';
import DimensionalityReduction from './components/DimensionalityReduction';
import ModelTraining from './components/ModelTraining';
import PowerBI from './components/PowerBI';
import LandingPage from './components/LandingPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('preprocessing');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Hardcoded credentials for demo
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      setShowLogin(false);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated && !showLogin) {
    return <LandingPage onLoginClick={() => setShowLogin(true)} />;
  }

  if (!isAuthenticated && showLogin) {
    return <Login onLogin={handleLogin} onBack={() => setShowLogin(false)} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-8">
        {activeSection === 'preprocessing' && <DataPreprocessing />}
        {activeSection === 'eda' && <EDA />}
        {activeSection === 'dimensionality' && <DimensionalityReduction />}
        {activeSection === 'model' && <ModelTraining />}
        {activeSection === 'powerbi' && <PowerBI />}
      </main>
    </div>
  );
}

export default App;