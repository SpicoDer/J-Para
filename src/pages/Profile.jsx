import Map from '../components/Home/Map/Map.jsx';
import ProfileBody from '../components/Profile/ProfileBody/ProfileBody.jsx';
import ProfileHeading from '../components/Profile/ProfileHeading';
import { useEffect } from 'react';

function Profile({ loadMap }) {
  useEffect(() => {
    loadMap();
  }, []);
  return (
    <div className='h-screen w-screen lg:flex'>
      <div className='lg:w-[600px]'>
        <ProfileHeading />
        <ProfileBody />
      </div>
      <div className='relative hidden h-full w-full lg:block'>
        <Map />
      </div>
    </div>
  );
}

export default Profile;
