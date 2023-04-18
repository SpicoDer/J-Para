import { useNavigate } from 'react-router';
import ProfileIcon from '../../ProfileIcon';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

function ModalHead() {
  const [isGoogle, setIsGoogle] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();

  const name = auth.currentUser.displayName;
  const email = auth.currentUser.email;
  const providerData = auth.currentUser.providerData;

  const goToExternalLink = function (url) {
    window.location.href = url;
  };

  const manageProfile = function () {
    isGoogle
      ? goToExternalLink('https://myaccount.google.com/')
      : navigate('/profile');
  };

  useEffect(() => {
    providerData.forEach(profile => {
      if (profile.providerId === 'google.com') setIsGoogle(true);
    });
  }, []);

  return (
    <div className='mx-auto px-8 '>
      <div className='flex items-center justify-center gap-4'>
        <ProfileIcon />
        <div className='flex-grow'>
          <h2 className='font-medium capitalize sm:text-base md:text-xl'>
            {name}
          </h2>
          <p className='text-sm text-gray-400'>{email}</p>
        </div>
      </div>
      <button
        onClick={manageProfile}
        className='btn-prim rounded-full px-6 py-2 text-base'
      >
        manage account info
      </button>
    </div>
  );
}

export default ModalHead;
