import React from 'react';

import { auth, provider } from '../firebase';

// MUI
import { Button } from '@material-ui/core';

const SignInWithGoogle = () => {
  const signInWithGoogle = () => {
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
