import { useNavigate } from 'react-router';
import ProfileIcon from '../../ProfileIcon';
import { getAuth } from 'firebase/auth';

function ModalHead() {
  const navigate = useNavigate();
  const auth = getAuth();

  const name = auth.currentUser.displayName;
  const email = auth.currentUser.email;

  return (
    <div className='px-4'>
      <div className='flex gap-4'>
        <ProfileIcon size='12' />
        <div className='flex-grow'>
          <h2 className='font-medium capitalize sm:text-base md:text-xl'>
            {name}
          </h2>
          <p className='text-sm text-gray-400'>{email}</p>
          <button
            onClick={() => {
              navigate('/profile');
            }}
            className='btn-prim rounded-full px-6 py-2 sm:text-xs lg:text-base'
          >
            manage account info
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalHead;
