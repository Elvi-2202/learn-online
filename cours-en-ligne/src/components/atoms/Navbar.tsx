// components/atoms/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4"> {/* Couleur de fond bleu */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4"> {/* Flex pour aligner les liens côte à côte */}
          <Link to="/" className="text-white text-lg font-bold hover:underline">
            Home
          </Link>
          <Link to="/modules" className="text-white text-lg font-bold hover:underline">
            Modules
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;