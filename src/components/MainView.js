import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

//

import TextCountdownComponent from './TextCountdownComponent';
import ProgressBarWithPhotos from './ProgressBarWithPhotos';
import GiphyBox from './GiphyBox';
import ChatBox from './ChatBox';
import Copyright from './Copyright';

// import EmbededPreview from './EmbededPreview';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundImage: `url('https://www.transparenttextures.com/patterns/gray-floral.png')`,
    backgroundColor: '#59465910',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.secondary.main,
    // padding: theme.spacing(6),
  },
  header: {
    backgroundColor: theme.palette.secondary.main,
  },
  center: {
    textAlign: 'center',
  },
}));

export default function MainView() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.body}>
      <CssBaseline />

      <AppBar position="relative" className={classes.header}>
        <Toolbar style={{ margin: 'auto' }}>
          <Typography variant="subtitle1" color="primary" align="center">
            <span>🤷🏼‍♀️⏳🤷‍♂️</span>
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <div>
          <Container className={classes.heroContent}>
            {/* <TextCountdownComponent /> */}
            {/* <Typography variant="body1" align="center" color="textSecondary">
              I hope you're ready to make pierogi with me <span> 😉 👩‍❤️‍💋‍👨</span>
            </Typography> */}

            {/* <ProgressBarWithPhotos /> */}

            {/* <Typography variant="subtitle2" align="center">
              I had to remake the progress bar for the new date, so it looks
              like we are farther away, this this time the progress will move
              faster 😉
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              paragraph
            >
              As time progresses, our photos will get closer and closer until we
              meet face to face!
            </Typography>
            <Typography variant="subtitle2" align="center" gutterBottom>
              <span>📷</span> Click on one of our photos and see what happens!{' '}
              <span>📷</span>
            </Typography> */}
            <Box className={classes.center}>
              <GiphyBox tag="cat" />
              {/* <EmbededPreview /> */}
            </Box>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="sm">
          <Box className={classes.center}>
            <ChatBox />
          </Box>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </Container>
  );
}
