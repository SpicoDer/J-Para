import ModalSetting from '../components/Home/Settings/ModalSetting';
import { useState } from 'react';
import Map from '../components/Home/Map/Map';

function Home() {
  const [toggleOpen, setToggleOpen] = useState(false);

  // Use to handle the state of toggle btn and pass to map component
  const switchState = {
    alert: true,
  };

  return (
    <div className='h-full lg:flex'>
      <div className={`${toggleOpen ? '' : 'hidden'} bg-txt-dark lg:block`}>
        <ModalSetting
          toggle={setToggleOpen}
          state={toggleOpen}
          switchState={switchState}
        />
      </div>
      <div className='relative h-full w-full'>
        <Map
          toggle={setToggleOpen}
          state={toggleOpen}
          switchState={switchState}
        />
      </div>
    </div>
  );
}

export default Home;
