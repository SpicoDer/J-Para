import logo from '../../../assets/logo.svg';
import { useState } from 'react';

function MapNotif({ map }) {
  const [triggered, setTriggered] = useState(false);

  const alertSound = function () {
    const sound = new Audio('/assets/sound_alert.mp3');
    sound.play();
  };

  // Create a method to update the triggered state
  map.mapNotifSetTriggered = function (isTriggered) {
    if (isTriggered) {
      setTriggered(isTriggered);
      alertSound();
    }
  };

  return (
    <div className={`${triggered ? '' : 'hidden'}`}>
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg bg-white p-8 shadow-xl'>
        <img src={logo} alt='logo' className='mx-auto h-16 w-16 ' />
        <p className='m-4 py-2 text-center text-lg font-bold text-black'>
          PaRA is near in your stop!
        </p>
        <button
          className='btn-prim w-full rounded-full'
          onClick={() => {
            setTriggered(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MapNotif;
