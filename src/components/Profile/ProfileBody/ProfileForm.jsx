import ProfileInput from './ProfileInput';
import { useRef, useState } from 'react';
import {
  getAuth,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function ProfileForm({ setName }) {
  // firebase config
  const auth = getAuth();
  const user = auth.currentUser;
  const docRef = doc(db, 'users', user.uid);

  // state to show/hide save button
  const [save, setSave] = useState(false);

  // state to toggle contact and password form
  const [changePass, setChangePass] = useState(false);

  // state of form data
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nameHandler = function (e) {
    setDisplayName(e.target.value);
    setSave(true);
  };

  const emailHandler = function (e) {
    setEmail(e.target.value);
    setSave(true);
  };

  const newPassHandler = function (e) {
    setNewPassword(e.target.value);
    setSave(true);
  };

  const confirmPassHandler = function (e) {
    setConfirmPassword(e.target.value);
    setSave(true);
  };

  // Re-signin function
  const navigate = useNavigate();
  const reSignin = function () {
    toast.warn('You need to sign-in again to change your email.', {
      position: 'top-center',
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    });

    auth.signOut();
    navigate('/sign-in');
  };

  const contactHandler = async function (e) {
    try {
      e.preventDefault();

      if (user.email === email && user.displayName === displayName)
        throw new Error();

      await updateProfile(user, { displayName: displayName });
      await updateEmail(user, email);

      toast.success('Profile details updated');
      setName(displayName);
      setSave(false);
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') reSignin();
      else {
        toast.error("Could'nt update profile details");
        setSave(false);
      }
    }
  };

  const passwordHandler = async function (e) {
    try {
      e.preventDefault();

      if (newPassword !== confirmPassword)
        throw new Error('Password and Confirm Password fields do not match');

      await updatePassword(user, newPassword);
      toast.success('Password updated');
      setNewPassword('');
      setConfirmPassword('');
      setSave(!save);
      // // update data in firestore
      // await updateDoc(docRef, { newName });
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') reSignin();
      else {
        toast.error(error.message);
        setNewPassword('');
        setConfirmPassword('');
      }
    }
  };

  return (
    <>
      <form id='save' onSubmit={changePass ? passwordHandler : contactHandler}>
        <div className={`${changePass && 'hidden'} mb-8 space-y-4 pl-4 pr-8`}>
          <ProfileInput
            id='name'
            name='Name:'
            onChange={nameHandler}
            type='text'
            value={displayName}
          />
          <ProfileInput
            id='email'
            name='Email:'
            onChange={emailHandler}
            type='email'
            value={email}
          />
          <p
            onClick={() => {
              setChangePass(!changePass);
            }}
            className='mt-4 cursor-pointer text-prim-400 transition hover:underline hover:decoration-prim-400 hover:underline-offset-2 '
          >
            Change password
          </p>
        </div>
        <div
          className={`${
            changePass ? 'block' : 'hidden'
          } mb-8 space-y-4 pl-4 pr-8`}
        >
          <ProfileInput
            id='password'
            name='New password:'
            type='password'
            onChange={newPassHandler}
            value={newPassword}
          />
          <ProfileInput
            id='confirmPassword'
            name='Confirm password:'
            type='password'
            onChange={confirmPassHandler}
            value={confirmPassword}
          />
          <p
            onClick={() => {
              setChangePass(!changePass);
            }}
            className='mt-4 cursor-pointer text-prim-400 transition hover:underline hover:decoration-prim-400 hover:underline-offset-2 '
          >
            Back
          </p>
        </div>
      </form>
      <div className={`${save ? 'grid' : 'hidden'} place-items-center`}>
        <button form='save' className='btn-prim place rounded-lg p-2 px-6'>
          save
        </button>
      </div>
    </>
  );
}

export default ProfileForm;
