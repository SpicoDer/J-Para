import ModalSetting from '../components/Home/Settings/ModalSetting';
import { useState } from 'react';
import MapLabel from '../components/Home/Map/MapLabel';
import ProfileIcon from '../components/ProfileIcon.jsx';
import MapBtns from '../components/Home/Map/MapBtns';

function Home() {
  const [toggleOpen, setToggleOpen] = useState(false);
  ` `;
  return (
    <div className='lg:flex'>
      <div className={`${toggleOpen ? '' : 'hidden'} bg-txt-dark lg:block`}>
        <ModalSetting toggle={setToggleOpen} state={toggleOpen} />
      </div>
      <div className='relative h-screen w-screen bg-yellow-200' id='map'>
        <div
          onClick={() => {
            setToggleOpen(!toggleOpen);
          }}
          className=' absolute right-0 top-0 z-10 m-4 lg:hidden'
        >
          <ProfileIcon size='12' />
        </div>
        <MapLabel address='address' timeMins='5' />
        <MapBtns />
      </div>
    </div>
  );
}

export default Home;
