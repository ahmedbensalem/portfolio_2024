import React from 'react';
import { Grid, Paper } from '@mui/material';
import MilitaryDataCharts from './MilitaryDataCharts';
import RealTimeTankMovement from './RealTimeTankMovement';

// No props are needed, so no need to define an interface for now
const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper>
            <RealTimeTankMovement />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <MilitaryDataCharts />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;