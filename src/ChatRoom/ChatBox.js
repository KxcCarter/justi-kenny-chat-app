import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
//
import ChatRoom from './ChatRoom';
import SignInWithGoogle from './SignInWithGoogle';
// MUI
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//

const useStyles = makeStyles({
  root: {
    borderRadius: '3px',
    border: '2px solid darkgrey',
    maxWidth: '80%',
    minWidth: '300px',
    padding: '5px',
    margin: 'auto',
  },
});

const ChatBox = () => {
  const classes = useStyles();
  const [user] = useAuthState(auth);

  return (
    <Paper className={classes.root}>
      <div>{user ? <ChatRoom /> : <SignInWithGoogle />}</div>
    </Paper>
  );
};

export default ChatBox;
