import ModalSetting from '../components/Home/Settings/ModalSetting';
import { useEffect, useState } from 'react';
import Map from '../components/Home/Map/Map';

function Home() {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div className='h-screen lg:flex'>
      <div className={`${toggleOpen ? '' : 'hidden'} bg-txt-dark lg:block`}>
        <ModalSetting toggle={setToggleOpen} state={toggleOpen} />
      </div>
      <div className='relative h-full w-full'>
        <Map toggle={setToggleOpen} state={toggleOpen} />
      </div>
    </div>
  );
}

export default Home;
