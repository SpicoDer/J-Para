import ProfileInput from './ProfileInput';
import { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = formData;

  const onChange = function (e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    setSave(true);
  };

  // const updatePass = async function (password, confirmPassword) {
  //   try {
  //     if (password !== confirmPassword)
  //       throw new Error('Password and Confirm Password fields do not match');

  //     await updatePassword(user, password);
  // // update data in firestore
  // await updateDoc(docRef, { newName });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

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

  const submitContact = async function (e) {
    try {
      e.preventDefault();

      if (user.email === email && user.displayName === name) throw new Error();

      await updateProfile(user, { displayName: name });
      await updateEmail(user, email);

      toast.success('Profile details updated');
      setName(name);
      setSave(false);
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') reSignin();
      else {
        toast.error("Could'nt update profile details");
        setSave(false);
      }
    }
  };

  // const submitPassword = async function (e) {
  //   try {
  //     e.preventDefault();
  //   } catch (error) {}
  // };
  return (
    <>
      <form id='save' onSubmit={submitContact}>
        <div className={`${changePass && 'hidden'} mb-8 space-y-4 pl-4 pr-8`}>
          <ProfileInput
            id='name'
            name='Name:'
            onChange={onChange}
            type='text'
            value={name}
          />
          <ProfileInput
            id='email'
            name='Email:'
            onChange={onChange}
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
            name='Password:'
            onChange={onChange}
            type='password'
          />
          <ProfileInput
            id='confirmPassword'
            name='Confirm password:'
            onChange={onChange}
            type='password'
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
