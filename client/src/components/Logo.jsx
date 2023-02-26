import React from 'react';
import { Typography, useTheme } from '@mui/material';

function Logo() {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      slu
      <span style={{ color: theme.palette.primary.main }}>Films</span>
    </Typography>
  );
}

export default Logo;
