import React, { useState, useRef, useEffect } from 'react';
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
  composeBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
}));

// ***

const ChatRoom = () => {
  const classes = useStyles();
  const targetRef = useRef();

  // const messagesRef = firestore.collection('messages');
  // original with limit on messages
  //   const query = messagesRef.orderBy('createdAt').limit(50);
  // no limit on messages
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const deleteMessage = async (id) => {
    try {
      await messagesRef.doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const renderedMessages = messages?.map((msg) => (
    <ChatMessage key={msg.id} message={msg} deleteMessage={deleteMessage} />
  ));

  return (
    <React.Fragment>
      <div style={{ maxHeight: '500px', overflow: 'scroll' }}>
        {/* {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)} */}

        {renderedMessages}
        <div ref={targetRef}></div>
      </div>
      <Divider variant="fullWidth" />
      <Box pt={2}>
        <form onSubmit={sendMessage}>
          <div className={classes.composeBox}>
            <TextField
              className={classes.input}
              size="small"
              fullWidth
              multiline
              variant="outlined"
              placeholder="Say hello!"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            />
            <Fab size="small" type="submit" className={classes.button}>
              <SendIcon />
            </Fab>
          </div>
        </form>
      </Box>
      <SignOut />
    </React.Fragment>
  );
};

export default ChatRoom;
