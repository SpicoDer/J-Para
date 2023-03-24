import ProfileIcon from '../../Utils/ProfileIcon';

function ModalHead() {
  return (
    <div className='px-4'>
      <div className='flex items-center justify-center py-4'>
        <svg className='h-8 w-8 fill-white'>
          <use xlinkHref={`../../assets/icons.svg#close`}></use>
        </svg>
        <h1 className='flex-grow text-center text-2xl'>PaRA</h1>
      </div>

      <div className='flex gap-4'>
        <div>
          <ProfileIcon size='4' />
        </div>
        <div className='flex-grow'>
          <h2 className='text-xl font-medium capitalize'>
            john carlo sarmiento
          </h2>
          <p className='text-sm text-gray-400'>example@gmail.com</p>
          <button className='btn-prim rounded-full px-6 py-2'>
            manage account info
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalHead;
