import { useState } from 'react';
import InputForm from '../InputForm.jsx';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { db } from '../../../firebase.js';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
/**
 * A React component that renders a form for user signup.
 *
 * @component
 * @return {JSX.Element} JSX element representing the signup form.
 */
function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailChangeHandler = function (e) {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = function (e) {
    setPassword(e.target.value);
  };

  const nameChangeHandler = function (e) {
    setName(e.target.value);
  };

  const confirmPasswordHandler = function (e) {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = async function (e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('error');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    const signupFormData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      // Initialize and get the credentials
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;

      // Delete password and add timestamp
      const signupFormDataCopy = { ...signupFormData };
      delete signupFormDataCopy.password;
      signupFormDataCopy.timestamp = serverTimestamp();

      // Upload signup form data to document in users collection with unique id
      await setDoc(doc(db, 'users', user.uid), signupFormData);
    } catch (error) {
      console.log(error);
    }

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  return (
    <>
      <form id='sign-up' onSubmit={submitHandler} className='mb-8 space-y-4'>
        <InputForm
          label='Full name'
          name='name'
          type='text'
          value={name}
          handler={nameChangeHandler}
        />
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
        <InputForm
          label='Confirm password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          handler={confirmPasswordHandler}
        />
      </form>
      <button type='submit' form='sign-up' className='btn-prim mb-4 w-full'>
        sign up
      </button>
    </>
  );
}

export default SignupForm;
