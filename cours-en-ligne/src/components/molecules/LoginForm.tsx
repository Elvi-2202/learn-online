// components/molecules/LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../api/endpoints/auth';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/slices/authSlice';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // État pour la case à cocher
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials(userData));
      navigate('/modules');
    } catch (err) {
      console.error('Failed to log in:', err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="rememberMe" className="text-gray-700">Se souvenir de moi</label>
      </div>
      <div className="flex justify-center"> {/* Flex pour centrer le bouton */}
        <Button label={isLoading ? 'Connexion...' : 'Se connecter'} type="submit" disabled={isLoading} />
      </div>
    </form>
  );
};

export default LoginForm;