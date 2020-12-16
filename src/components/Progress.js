import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Grid, Typography } from '@material-ui/core';
import Axios from 'axios';
//
import NewSelfieModal from './NewSelfieModal';

const landingTime = new Date('January 3, 2021 19:45:00').getTime();

const square = 150;

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: 'green',
    borderRadius: '3px',
    border: '1px solid darkgrey',
  },
  left: {
    position: 'relative',

    maxHeight: `${square}px`,
    maxWidth: `${square}px`,
  },
  right: {
    position: 'relative',
    maxHeight: `${square}px`,
    maxWidth: `${square}px`,
  },
});

const Progress = (props) => {
  const [justiPhoto, setJustiPhoto] = useState(null);
  const [kennyPhoto, setKennyPhoto] = useState(null);
  //
  const classes = useStyles();
  //   const [days, setDays] = useState(0);
  const [totalHours, setTotalHours] = useState(860);
  //   const [seconds, setSeconds] = useState(0);

  const units = 200 / 860;
  //   const units = 200 / 60;

  useEffect(() => {
    const now = new Date().getTime();
    const distance = landingTime - now;

    const distanceMeter = setInterval(() => {
      //   setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setTotalHours(Math.floor(distance / (1000 * 60 * 60)));

      //   setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 5000);

    if (distance < 1000 * 60 * 60) {
      return clearInterval(distanceMeter);
    }
  }, [totalHours]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const { data } = await Axios.get(
      'https://tsjcb7kk2b.execute-api.us-east-1.amazonaws.com/photos'
    );

    setJustiPhoto(data.Items[0].url);
    setKennyPhoto(data.Items[1].url);

    console.table(data.Items);
  };

  return (
    <Paper elevation={5}>
      <Box
        className={classes.root}
        style={{ backgroundColor: totalHours <= 36 ? 'green' : '#D9AE89' }}
      >
        <Typography variant="body1"></Typography>
        <Grid container>
          <Grid item xs={2}>
            {justiPhoto && (
              <Box
                className={classes.left}
                style={{ right: `${totalHours * units - 200}%` }}
              >
                <NewSelfieModal
                  src={justiPhoto}
                  person="Justi"
                  getPhotos={getPhotos}
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={2}>
            {kennyPhoto && (
              <Box
                className={classes.right}
                style={{ right: `-${totalHours * units + 200}%` }}
              >
                <NewSelfieModal
                  src={kennyPhoto}
                  person="Kenny"
                  getPhotos={getPhotos}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Progress;
