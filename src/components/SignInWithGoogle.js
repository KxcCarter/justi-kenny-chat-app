import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// MUI
import { Button } from '@material-ui/core';

const SignInWithGoogle = (props) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <Button variant="contained" onClick={signInWithGoogle}>
        Sign in with google
      </Button>
    </div>
  );
};

export default SignInWithGoogle;
