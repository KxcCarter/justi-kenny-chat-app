import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <React.Fragment>
      <Typography variant="body2" color="primary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/KxcCarter">
          Kenneth Carter
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </React.Fragment>
  );
}

export default Copyright;
