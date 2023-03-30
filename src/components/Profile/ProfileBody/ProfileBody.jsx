import ProfileForm from './ProfileForm';
import ProfileName from './ProfileName.jsx';

function ProfileBody() {
  return (
    <>
      <ProfileName />
      <div className='mb-4 cursor-default px-4 text-lg font-medium'>
        Contact
      </div>
      <ProfileForm />
    </>
  );
}

export default ProfileBody;
