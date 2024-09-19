import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for createRoot
import App from './App';
import './index.css'; // Global styles

// Get the root element where the app will be rendered
const rootElement = document.getElementById('root');

// Ensure that the root element exists before rendering
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create a root for rendering

  // Render the App component into the root element
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}