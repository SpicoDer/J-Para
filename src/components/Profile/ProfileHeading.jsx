import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router';

function ProfileHeading() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center gap-8 bg-gray-100 p-4'>
      <HiArrowLeft
        className='icon cursor-pointer'
        onClick={() => navigate('/')}
      />
      <span className='cursor-default text-2xl font-medium text-prim-400'>
        PaRA
      </span>
    </div>
  );
}

export default ProfileHeading;
