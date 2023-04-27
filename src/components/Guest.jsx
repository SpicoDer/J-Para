import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function Guest() {
  const navigate = useNavigate();
  useEffect(() => {
    const signinAsGuest = async function () {
      const auth = getAuth();
      const email = 'cukkadulmo@gufum.com';
      const password = 'johncarlo2001';
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/');
    };
    signinAsGuest();
  }, []);
}

export default Guest;
