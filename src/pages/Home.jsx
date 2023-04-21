import ModalSetting from '../components/Home/Settings/ModalSetting';
import { useState } from 'react';
import Map from '../components/Home/Map/Map';

function Home() {
  const [toggleOpen, setToggleOpen] = useState(false);

  // Use to handle the state of alert toggle btn
  const alertState = {
    alert: true,
  };

  return (
    <div className='h-full lg:flex'>
      <div className={`${toggleOpen ? '' : 'hidden'} bg-txt-dark lg:block`}>
        <ModalSetting
          toggle={setToggleOpen}
          state={toggleOpen}
          alertState={alertState}
        />
      </div>
      <div className='relative h-full w-full'>
        <Map
          toggle={setToggleOpen}
          state={toggleOpen}
          alertState={alertState}
        />
      </div>
    </div>
  );
}

export default Home;
