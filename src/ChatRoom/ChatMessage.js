import React, { useState } from 'react';
import { auth } from '../firebase';
//
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
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
    width: '100%',
  },
  received: {
    display: 'flex',
    alignItems: 'center',
    background: '#F2E3D5',
    color: 'black',
    padding: '2px',
    borderRadius: '10px',
    margin: '2px 0',
    width: '100%',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: '5px',
  },
  outerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  deleteBtn: {
    width: '1.25rem',
    height: '1.25rem',

    margin: '5px',
  },
}));

function ChatMessage(props) {
  const [editMode, setEditMode] = useState(false);
  const classes = useStyles();
  const { text, uid, photoURL, id } = props.message;
  const messageClass =
    uid === auth.currentUser.uid ? classes.sent : classes.received;
  const name = auth.currentUser.displayName;

  const handleClick = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div onDoubleClick={handleClick} className={classes.outerDiv}>
      {uid === auth.currentUser.uid && editMode && (
        <div
          className={classes.deleteBtn}
          onClick={() => props.deleteMessage(id)}
        >
          <DeleteIcon color="error" />
        </div>
      )}
      <div className={messageClass}>
        <Avatar className={classes.avatar} src={photoURL} alt={name} />
        <Typography variant="body2">{text}</Typography>
      </div>
    </div>
  );
}

export default ChatMessage;
