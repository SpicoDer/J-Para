import ProfileIcon from '../../ProfileIcon.jsx';

function ProfileBody() {
  return (
    <div className='p-4'>
      <div className='mb-6 flex items-center gap-4 '>
        <ProfileIcon size='14' pad='p-4' textSize='text-xl' />
        <h1 className='text-2xl font-medium capitalize'>
          john carlo sarmiento
        </h1>
      </div>
    </div>
  );
}

export default ProfileBody;
