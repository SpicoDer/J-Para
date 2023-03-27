import ProfileIcon from '../../Utils/ProfileIcon.jsx';

function ProfileBody() {
  return (
    <div className='p-4'>
      <div className='mb-6 flex items-center gap-4 '>
        <ProfileIcon pad='4' />
        <h1 className='text-2xl font-medium capitalize'>
          john carlo sarmiento
        </h1>
      </div>
    </div>
  );
}

export default ProfileBody;
