import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Header = ({ onToggleTheme }) => {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ToDo App
        </Typography>
        <IconButton color="inherit" onClick={onToggleTheme}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
