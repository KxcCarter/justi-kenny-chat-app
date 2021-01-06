import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Box } from '@material-ui/core';

//

import NewTimer from './NewTimer';
import Progress from './Progress';
import GiphyBox from './GiphyBox';
import ChatBox from './ChatBox';
// import TestChat from './TestChat';

function Copyright() {
  return (
    <React.Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#F2E3D525',
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
    backgroundColor: '#F2E3D5',
    // padding: theme.spacing(6),
  },
  header: {
    backgroundColor: theme.palette.info.light,
  },
  center: {
    textAlign: 'center',
  },
}));

export default function MainView() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <AppBar position="relative" className={classes.header}>
          <Toolbar style={{ margin: 'auto' }}>
            <Typography variant="subtitle1" color="inherit" align="center">
              New Meeting Date - May 3rd 2021 <span>⏳</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <NewTimer />
            <Typography variant="body1" align="center">
              (Assuming I am able to go to the wedding in Elblag in May.)
            </Typography>
            <Progress />
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
            </Typography>
            <Box className={classes.center}>
              <GiphyBox tag="cat" />
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
    </React.Fragment>
  );
}
