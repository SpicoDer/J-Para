import ProfileIcon from '../Utils/ProfileIcon';
import InputForm from '../Utils/InputForm.jsx';
function ProfileBody() {
  return (
    <div className='p-4'>
      <div className='mb-6 flex items-center gap-4 '>
        <ProfileIcon />
        <h1 className='text-2xl font-medium capitalize'>
          john carlo sarmiento
        </h1>
      </div>
      <div className='mb-4 text-lg font-medium'>Contact</div>

      <form id='save' className='mb-8 space-y-4'>
        <InputForm name='email' type='email' />
        <InputForm name='Phone no.' type='text' />
      </form>
      <div className='grid place-items-center'>
        <button form='save' className='btn-prim place rounded-lg p-2 px-6'>
          save
        </button>
      </div>
    </div>
  );
}

export default ProfileBody;
