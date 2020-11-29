import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const landingTime = new Date('January 3, 2021 19:45:00').getTime();

const NewTimer = (props) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = landingTime - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
  }, [seconds, minutes, hours, days]);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Typography variant="h2" gutterBottom>
            {days} days
          </Typography>
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography variant="h4">{hours} hours</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          {' '}
          <Typography variant="h5">{minutes} minutes</Typography>
        </Grid>
        <Grid item xs={5} md={4}>
          {' '}
          <Typography variant="h6">{seconds} seconds</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            {' '}
            until Justi and Kenny meet!
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NewTimer;
