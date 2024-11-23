import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './store/slices/authSlice';
import LoginTemplate from './components/templates/LoginTemplate';
import ModulesList from './routes/modules/ModulesList';
import Navbar from './components/atoms/Navbar';

const App: React.FC = () => {
  const token = useSelector(selectCurrentToken);

  return (
    <Router>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={token ? <Navigate to="/modules" /> : <LoginTemplate />} />
        <Route 
          path="/modules" 
          element={token ? <ModulesList /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;