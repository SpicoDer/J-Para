import ProfileInput from './ProfileInput';
import { useState } from 'react';
import { getAuth, updateEmail, updateProfile } from 'firebase/auth';
import { db } from '../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function ProfileForm({ setName }) {
  const [change, setChange] = useState(false);

  const auth = getAuth();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onChange = function (e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    setChange(true);
  };

  const submitHandler = async function (e) {
    try {
      e.preventDefault();

      //update display name in firebase auth
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      // update email
      await updateEmail(auth.currentUser, email);

      // update name and email in the firestore
      const docRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(docRef, {
        name,
        email,
      });

      toast.success('Profile details updated');
      setName(name);
      setChange(false);
    } catch (error) {
      toast.error('Could not update the profile details');
      setChange(false);
    }
  };

  return (
    <>
      <form
        id='save'
        onSubmit={submitHandler}
        className='mb-8 space-y-2 pl-4 pr-8'
      >
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
      </form>
      <div className={`${change ? 'grid' : 'hidden'} place-items-center`}>
        <button form='save' className='btn-prim place rounded-lg p-2 px-6'>
          save
        </button>
      </div>
    </>
  );
}

export default ProfileForm;
