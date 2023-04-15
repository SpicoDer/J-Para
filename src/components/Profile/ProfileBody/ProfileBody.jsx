import ProfileForm from './ProfileForm';
import ProfileName from './ProfileName.jsx';

function ProfileBody() {
  return (
    <>
      <ProfileName />
      <div className='mb-4 cursor-default px-4 text-lg font-medium'>
        Profile Information
      </div>
      <ProfileForm />
    </>
  );
}

export default ProfileBody;
