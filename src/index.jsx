// index.jsx — Entry point. Connects React to the #root div in index.html.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initTheme } from './theme';

initTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
