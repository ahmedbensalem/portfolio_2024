import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import './index.css'; // If you have global styles

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Ensure the root element exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root with createRoot
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}