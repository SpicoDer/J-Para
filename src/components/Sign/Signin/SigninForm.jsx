import { useState } from 'react';
import InputForm from '../InputForm.jsx';
import { useNavigate } from 'react-router';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../../firebase';
/**

A component for the Sign In form.
@returns {JSX.Element} JSX Element that displays the Sign In form.
*/
function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = function (e) {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = function (e) {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const submitHandler = async function (e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) navigate('/');
    } catch (error) {
      toast.error('Sorry we could not find your account');
    }
    setEmail('');
    setPassword('');
  };

  const onGoogleClick = async function () {
    try {
      // initialize google auth and get the result
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check user

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      // redirect to home
      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with Google');
    }
  };
  return (
    <>
      <form id='sign-in' onSubmit={submitHandler} className='mb-20 space-y-4'>
        <InputForm
          label='email'
          name='email'
          type='email'
          value={email}
          handler={emailChangeHandler}
        />
        <InputForm
          label='password'
          name='password'
          type='password'
          value={password}
          handler={passwordChangeHandler}
        />
        <p
          onClick={() => navigate('/forgot-password')}
          className='cursor-pointer text-center text-sm capitalize underline'
        >
          forgot password?
        </p>
      </form>
      <button type='submit' form='sign-in' className='btn-prim w-full'>
        sign in
      </button>
      <button
        type='button'
        onClick={onGoogleClick}
        className='btn-sec flex w-full items-center justify-center gap-2'
      >
        <svg className='icon fill-white'>
          <use xlinkHref={`../../assets/icons.svg#google`}></use>
        </svg>
        <p>sign in with google</p>
      </button>
    </>
  );
}

export default SigninForm;
