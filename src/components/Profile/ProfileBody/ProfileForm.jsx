import { HiOutlinePhone } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';

import ProfileInput from './ProfileInput';

function ProfileForm() {
  return (
    <>
      <form id='save' className='mb-8 space-y-2 pl-4 pr-8'>
        <div className='flex items-center gap-4'>
          <HiOutlineMail className='icon text-prim-400' />
          <ProfileInput type='text' value='09458160166' />
        </div>
        <div className='flex items-center gap-4'>
          <HiOutlinePhone className='icon text-prim-400' />
          <ProfileInput icon='email' type='email' value='example@gmail.com' />
        </div>
      </form>
      <div className='grid place-items-center'>
        <button form='save' className='btn-prim place rounded-lg p-2 px-6'>
          save
        </button>
      </div>
    </>
  );
}

export default ProfileForm;
