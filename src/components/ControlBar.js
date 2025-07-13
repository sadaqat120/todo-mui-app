import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

const ControlBar = ({ filter, onFilterChange, sortBy, onSortChange }) => (
  <Box sx={{ mb: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={(e, v) => v && onFilterChange(v)}
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="completed">Completed</ToggleButton>
      <ToggleButton value="pending">Pending</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup
      value={sortBy}
      exclusive
      onChange={(e, v) => v && onSortChange(v)}
    >
      <ToggleButton value="date">Sort by Date</ToggleButton>
      <ToggleButton value="status">Sort by Status</ToggleButton>
    </ToggleButtonGroup>
  </Box>
);

export default ControlBar;
