// templates/LoginTemplate.tsx
import React from 'react';
import LoginSection from '../organisms/LoginSection';
 
const LoginTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <h1 className="text-4xl font-bold text-white bg-black text-center py-4">
        Tree Learning
      </h1>
      <div className="flex flex-1">
     
        <div className="w-1/2 flex items-center justify-center bg-gray-100">
          <LoginSection />
        </div>
       
     
        <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold text-black mb-4">Company Logo</h2>
          <p className="text-gray-700 text-center">
            Here you can include additional information about the company or any relevant content.
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default LoginTemplate;