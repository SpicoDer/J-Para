import { useNavigate } from 'react-router';
import ProfileIcon from '../../ProfileIcon';
import { getAuth } from 'firebase/auth';

function ModalHead() {
  const navigate = useNavigate();
  const auth = getAuth();

  const name = auth.currentUser.displayName;
  const email = auth.currentUser.email;

  return (
    <div className='mx-auto grid px-8'>
      <div className='flex gap-4'>
        <ProfileIcon size='12' pad='p-4' />
        <div className='flex-grow'>
          <h2 className='font-medium capitalize sm:text-base md:text-xl'>
            {name}
          </h2>
          <p className='text-sm text-gray-400'>{email}</p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate('/profile');
        }}
        className='btn-prim w-60 rounded-full px-6 py-2 sm:text-xs md:text-base lg:text-base'
      >
        manage account info
      </button>
    </div>
  );
}

export default ModalHead;
