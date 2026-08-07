import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';

// Configure Direct Production Connection to Render Live Backend
if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  axios.defaults.baseURL = 'https://ourweb-xkd3.onrender.com';
}

// Automatic Resilience Interceptor: Retry 502/503/504 Bad Gateway errors during Render cold starts or deployment windows
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (!config || (config._retryCount || 0) >= 2) {
      return Promise.reject(error);
    }
    const status = error.response ? error.response.status : 0;
    if (status === 502 || status === 503 || status === 504 || !error.response) {
      config._retryCount = (config._retryCount || 0) + 1;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return axios(config);
    }
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
