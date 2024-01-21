import React, { useState } from "react";
import { auth,googleProvider } from "../config/firebase";
import { signOut,signInWithPopup } from "firebase/auth";
import SignedIn from "./signedin";

function SignIn() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

    console.log(auth?.currentUser?.email);

    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider);
            setIsAuthenticated(true);
        } catch (error) {
            console.error();
        }
    }

    const logout = async() => {
        try {
         await signOut(auth);
         setIsAuthenticated(false);   
        } catch (error) {
            console.error();
        }
    }

  return (
    <div className="signin">
      <p> This is your sign in page.</p>
      {isAuthenticated ? (
        // Render the SignedIn component when the user is authenticated
        <SignedIn logout={logout} />
      ) : (
        <div>
      {/* google provider */}
      <div className="google-form">
        <button onClick={signInWithGoogle}>Sign in w Google</button>
      </div>
      <button onClick={logout}>sign out</button>
    </div>
      )}
    </div>
  );
}

export default SignIn;