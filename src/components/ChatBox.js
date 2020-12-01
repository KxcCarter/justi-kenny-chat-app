import React from 'react';
//
import ChatRoom from './ChatRoom';
import SignInWithGoogle from './SignInWithGoogle';
// MUI
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

const useStyles = makeStyles({
  root: {
    borderRadius: '3px',
    border: '2px solid darkgrey',
    maxWidth: '350px',
    padding: '5px',
    margin: 'auto',
  },
});

const ChatBox = (props) => {
  const classes = useStyles();
  const auth = firebase.auth();

  const [user] = useAuthState(auth);

  return (
    <Paper className={classes.root}>
      <div>{user ? <ChatRoom /> : <SignInWithGoogle />}</div>
    </Paper>
  );
};

export default ChatBox;
