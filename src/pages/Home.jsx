import ModalSetting from '../components/Home/Settings/ModalSetting';
import { useState } from 'react';

function Home() {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setToggleOpen(!toggleOpen);
        }}
        className='grid h-12 w-12 place-items-center rounded-full bg-prim-400'
      >
        <p>JC</p>
      </div>
      <ModalSetting toggle={setToggleOpen} state={toggleOpen} />
    </div>
  );
}

export default Home;
