import { useNavigate } from 'react-router';

function ModalHead() {
  const navigate = useNavigate();

  return (
    <div className='px-4'>
      <div className='flex gap-4'>
        <div className='grid h-12 w-12 place-items-center rounded-full bg-prim-400'>
          <p>JC</p>
        </div>
        <div className='flex-grow'>
          <h2 className='font-medium capitalize sm:text-base md:text-xl'>
            john carlo sarmiento
          </h2>
          <p className='text-sm text-gray-400'>example@gmail.com</p>
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
