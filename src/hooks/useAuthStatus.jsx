import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

/**

* Returns the authentication status of the user using Firebase Authentication
* @returns {Object} Object containing the user's sign in status and a boolean value indicating whether the authentication status is currently being checked.
*/
export function useAuthStatus() {
  const [signin, setSignin] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
      user && setSignin(true); // Check if there's user
      setChecking(false); // Stop checking if if there's user
    });
  }, []);

  return { signin, checking };
}
