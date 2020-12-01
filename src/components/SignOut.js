import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// MUI
import { Button } from '@material-ui/core';

const SignOut = (props) => {
  const auth = firebase.auth();
  return (
    auth.currentUser && (
      <Button variant="contained" size="small" onClick={() => auth.signOut()}>
        Sign out
      </Button>
    )
  );
};

export default SignOut;
