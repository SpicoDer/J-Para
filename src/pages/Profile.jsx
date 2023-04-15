import jeep from '../assets/Jeepney.webp';
import ProfileBody from '../components/Profile/ProfileBody/ProfileBody.jsx';
import ProfileHeading from '../components/Profile/ProfileHeading';

function Profile() {
  return (
    <div className=' h-full '>
      <ProfileHeading />
      <div className='max-w-lg '>
        <ProfileBody />
      </div>
    </div>
  );
}

export default Profile;
