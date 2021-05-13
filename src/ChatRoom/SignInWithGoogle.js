import React from 'react';

import app, { auth, firestore, provider } from '../firebase';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// MUI
import { Button } from '@material-ui/core';

const SignInWithGoogle = () => {
  // const auth = firebase.auth();

  const signInWithGoogle = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // auth.signInWithPopup(provider);
    // const prov = new app.auth.GoogleAuthProvider();
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
