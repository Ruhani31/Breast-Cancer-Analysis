import React, { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onBack: () => void;
}

function Login({ onLogin, onBack }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-fuchsia-200">
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-pink-500 hover:text-pink-700 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-10 h-10 text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">
          Data Science Project Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-fuchsia-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-fuchsia-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-fuchsia-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-fuchsia-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-fuchsia-600 text-center mt-4">
          Use username: <strong>admin</strong>, password: <strong>password</strong>
        </p>
      </div>
    </div>
  );
}

export default Login;
