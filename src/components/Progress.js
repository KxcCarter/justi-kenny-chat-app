import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
//

const landingTime = new Date('January 3, 2021 19:45:00').getTime();

const square = 150;

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  left: {
    position: 'relative',
    color: 'red',
    maxHeight: `${square}px`,
    maxWidth: `${square}px`,
  },
  right: {
    position: 'relative',
    color: 'green',
    maxHeight: `${square}px`,
    maxWidth: `${square}px`,
  },
});

const Progress = (props) => {
  const classes = useStyles();
  const [days, setDays] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  //   const [seconds, setSeconds] = useState(0);

  const units = 200 / 35;

  useEffect(() => {
    const distanceMeter = setInterval(() => {
      const now = new Date().getTime();
      const distance = landingTime - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setTotalHours(Math.floor(distance / (1000 * 60 * 60)));

      //   setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
  }, [days]);

  return (
    <Box className={classes.root}>
      <Typography variant="body1"></Typography>
      <Grid container>
        <Grid item xs={2}>
          <Box
            className={classes.left}
            style={{ right: `${days * units - 200}%` }}
          >
            <img
              src="https://operisstorage.s3.us-east-2.amazonaws.com/JustiAlpha.png"
              alt="Justyna!!"
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            className={classes.right}
            style={{ right: `-${days * units + 200}%` }}
          >
            <img
              src="https://operisstorage.s3.us-east-2.amazonaws.com/KennyAlpha.png"
              alt="Kenneth!"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progress;
