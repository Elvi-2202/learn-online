import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/slices/authSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-white text-lg font-bold hover:underline">
            Home
          </Link>
          <Link to="/modules" className="text-white text-lg font-bold hover:underline">
            Modules
          </Link>
        </div>
        <button onClick={handleLogout} className="text-white text-lg font-bold hover:underline">
          Se déconnecter
        </button>
      </div>
    </nav>
  );
};

export default Navbar;