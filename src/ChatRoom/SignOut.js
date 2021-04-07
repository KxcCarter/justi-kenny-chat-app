import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// MUI
import { Box, Button } from '@material-ui/core';

const SignOut = (props) => {
  const auth = firebase.auth();
  return (
    auth.currentUser && (
      <Box mt={5}>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => auth.signOut()}
        >
          Sign out
        </Button>
      </Box>
    )
  );
};

export default SignOut;
