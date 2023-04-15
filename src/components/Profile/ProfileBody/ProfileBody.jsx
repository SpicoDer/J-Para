import ProfileForm from './ProfileForm';
import ProfileName from './ProfileName.jsx';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';

function ProfileBody() {
  const auth = getAuth();
  const [name, setName] = useState(auth.currentUser.displayName);

  return (
    <>
      <ProfileName initialName={name} />
      <div className='mb-4 cursor-default px-4 text-lg font-medium'>
        Profile Information
      </div>
      <ProfileForm setName={setName} />
    </>
  );
}

export default ProfileBody;
