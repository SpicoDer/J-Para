import { useNavigate } from 'react-router';

function ProfileHeading() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center gap-8 bg-gray-100 p-4'>
      <svg
        className='stroke-w-2 h-4 w-4 stroke-black'
        onClick={() => navigate('/')}
      >
        <use xlinkHref='../../assets/icons.svg#back'></use>
      </svg>
      <span className='text-2xl font-medium text-prim-400'>PaRA</span>
    </div>
  );
}

export default ProfileHeading;
