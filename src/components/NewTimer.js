import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant="h2">
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </Typography>
      <Typography variant="h4"> until Justi and Kenny meet!</Typography>
    </React.Fragment>
  );
};

export default NewTimer;
