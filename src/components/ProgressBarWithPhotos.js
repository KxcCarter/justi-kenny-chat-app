import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Grid, Typography } from '@material-ui/core';
import Axios from 'axios';
//
import NewSelfieModal from './NewSelfieModal';

const landingTime = new Date('April 6, 2021 16:35:00').getTime();

// Determines image size.
const squareSize = 150;

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: 'green',
    borderRadius: '3px',
    border: '1px solid darkgrey',
    overflow: 'hidden',
  },
  left: {
    position: 'relative',
    maxHeight: `${squareSize}px`,
    maxWidth: `${squareSize}px`,
  },
  right: {
    position: 'relative',
    maxHeight: `${squareSize}px`,
    maxWidth: `${squareSize}px`,
  },
});

const ProgressBarWithPhotos = (props) => {
  const classes = useStyles();
  const [justiPhoto, setJustiPhoto] = useState(null);
  const [kennyPhoto, setKennyPhoto] = useState(null);
  //
  const [totalHours, setTotalHours] = useState(31 * 24);
  // set default starting position:         days x hours

  const units = 200 / 744;
  // 200 divided by total hours remaning

  useEffect(() => {
    const now = new Date().getTime();
    const timeRemaining = landingTime - now;

    const distanceMeter = setInterval(() => {
      setTotalHours(Math.floor(timeRemaining / (1000 * 60 * 60)));
    }, 5000);

    if (timeRemaining < 1000 * 60 * 60) {
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
    // This might not be the best way to do this,
    // but I'm only ever going to need these 2 photos
    setJustiPhoto(data.Items[0].url);
    setKennyPhoto(data.Items[1].url);
  };

  return (
    <Paper elevation={5}>
      <Box
        className={classes.root}
        style={{ backgroundColor: totalHours <= 36 ? 'green' : '#E8DBC8' }}
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

export default ProgressBarWithPhotos;
