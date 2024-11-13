// organisms/LoginSection.tsx
import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection: React.FC = () => {
  return (
    <div className="p-8 rounded-lg shadow-md w-full max-w-md"> 
      <h2 className="text-2xl font-bold text-center mb-6">Log In </h2>
      <LoginForm />
      <div className="mt-4 text-center">
        <button 
          onClick={() => {}}
          className="text-blue-600 hover:underline focus:outline-none"
        >
          Mot de passe oublié ? Réintialiser
        </button>
      </div>
    </div>
  );
};

export default LoginSection;