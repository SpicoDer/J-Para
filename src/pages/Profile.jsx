import jeep from '../assets/Jeepney.webp';
import ProfileBody from '../components/Profile/ProfileBody/ProfileBody.jsx';
import ProfileHeading from '../components/Profile/ProfileHeading';

function Profile() {
  return (
    <div className='h-full lg:flex'>
      <div className='lg:w-[600px]'>
        <ProfileHeading />
        <ProfileBody />
      </div>
      <div className='relative hidden h-full w-full bg-gray-100 p-8 lg:block'>
        <img
          src={jeep}
          alt='Image of Jeepney'
          className='relative top-1/2 hidden -translate-y-1/2 lg:block'
        />
      </div>
    </div>
  );
}

export default Profile;
