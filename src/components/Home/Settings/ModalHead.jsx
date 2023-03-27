import ProfileIcon from '../../Utils/ProfileIcon.jsx';
import ModalTitle from './ModalTitle.jsx';

function ModalHead() {
  return (
    <div className='px-4'>
      <ModalTitle />
      <div className='flex gap-4'>
        <ProfileIcon size={10} />
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
