import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./styles/ui.css";

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(<App />);
});
