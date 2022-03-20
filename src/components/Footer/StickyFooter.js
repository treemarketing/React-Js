import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://treemarketing.com.ar">
        Alvaro Salomón
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <div className="sticky_footer">
    <Box width="100%"
    >
     
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 3,
          mt: 'auto',
          width:"auto",
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body1">
            Proyecto Coder House
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
    </div>
  
  
  );
}