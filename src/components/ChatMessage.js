import React from 'react';
//
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';
//
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '24px',
  },
  sent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    color: 'black',
    background: '#0b93f675',
    alignSelf: 'flex-end',
    padding: '3px',
    borderRadius: '10px',
    margin: '2px 0',
  },
  received: {
    display: 'flex',
    alignItems: 'center',
    background: '#F2E3D5',
    color: 'black',
    padding: '2px',
    borderRadius: '10px',
    margin: '2px 0',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: '5px',
  },
}));

function ChatMessage(props) {
  const classes = useStyles();
  const auth = firebase.auth();
  const { text, uid, photoURL } = props.message;
  const messageClass =
    uid === auth.currentUser.uid ? classes.sent : classes.received;
  const name = auth.currentUser.displayName;

  return (
    <div className={messageClass}>
      <Avatar className={classes.avatar} src={photoURL} alt={name} />
      <Typography variant="body2">{text}</Typography>
    </div>
  );
}

export default ChatMessage;
