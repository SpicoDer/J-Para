import ProfileInput from './ProfileInput';

function ProfileForm() {
  return (
    <>
      <form id='save' className='mb-8 space-y-2 pl-4 pr-8'>
        <ProfileInput icon='email' type='email' value='example@gmail.com' />
        <ProfileInput icon='phone' type='text' value='09458160166' />
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
