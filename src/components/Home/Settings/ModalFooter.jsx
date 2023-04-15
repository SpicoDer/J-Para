import { useNavigate } from 'react-router';
import { getAuth } from 'firebase/auth';

function ModalFooter() {
  const auth = getAuth();
  const navigate = useNavigate();

  const signout = function () {
    auth.signOut();
    navigate('/sign-in');
  };

  return (
    <div className='grid place-items-center py-4'>
      <button
        type='button'
        className='btn-prim m-0 rounded-lg py-2 px-6'
        onClick={signout}
      >
        logout
      </button>
    </div>
  );
}

export default ModalFooter;
