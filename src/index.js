import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import AppRoutes from './Routes';
import UserProvider from './contexts/usercontext';
import PageProvider from './contexts/pageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <PageProvider>
        <AppRoutes />
      </PageProvider>
    </UserProvider>
  </React.StrictMode>
);

