import React from 'react';
import RealTimeTankMovement from './components/RealTimeTankMovement'; // Correct import
import Dashboard from './components/Dashboard'; // If using a dashboard

const App: React.FC = () => {
  return (
    <div>
      <h1>Military Dashboard</h1>
      <RealTimeTankMovement />
      {/* OR */}
      <Dashboard />
    </div>
  );
};

export default App;
