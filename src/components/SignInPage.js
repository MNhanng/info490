import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


//an object of configuration values
const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
        //array can include just "Provider IDs", or objects with the IDs and options
        { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
        { provider: GoogleAuthProvider.PROVIDER_ID },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
        signInSuccessWithAuthResult: () => {
            return false; //don't redirect after authentication
        }
    }
}

export function SignInPage() {

    const auth = getAuth();

    return (
        <div>
            <h1 className="sign-in">Please Sign In:</h1>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        </div>
    );
}