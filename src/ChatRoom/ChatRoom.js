import React, { useState } from 'react';
import { auth, messagesRef, createTimestamp } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
//
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Fab, Divider } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
//
import ChatMessage from './ChatMessage';
import SignOut from './SignOut';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '2px',
  },
  input: {
    padding: '3px',
  },
}));

// ***

const ChatRoom = () => {
  const classes = useStyles();

  // const messagesRef = firestore.collection('messages');
  // original with limit on messages
  //   const query = messagesRef.orderBy('createdAt').limit(50);
  // no limit on messages
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: createTimestamp.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
  };

  return (
    <React.Fragment>
      <div style={{ maxHeight: '500px', overflow: 'scroll' }}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <Divider variant="fullWidth" />
      <Box pt={2}>
        <form onSubmit={sendMessage}>
          <TextField
            className={classes.input}
            size="small"
            variant="outlined"
            placeholder="Say hello!"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <Fab size="small" type="submit" className={classes.button}>
            <SendIcon />
          </Fab>
        </form>
      </Box>
      <SignOut />
    </React.Fragment>
  );
};

export default ChatRoom;
