import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ backgroundColor: 'rgba(0,0,0,0)', color: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              mr: 2, 
              fontSize: { xs: '1.2rem', sm: '1.5rem' }
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }, 
              fontWeight: 700 
            }}
          >
            WeekendDevs
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
