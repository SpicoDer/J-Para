import { useState } from 'react';
import { IoIosNotifications } from 'react-icons/io';

function MapIncrementBtn({ map }) {
  let [notifTime, setNotifTime] = useState(5);
  map.notifTime = notifTime; // update notification time in map object

  return (
    <button className={`flex rounded-xl border border-prim-400 bg-prim-400`}>
      <span
        onClick={() => {
          if (notifTime > 1) setNotifTime(time => time - 1);
        }}
        className={`px-2 text-2xl text-white`}
      >
        -
      </span>
      <span className='flex items-center px-1 text-2xl text-white'>
        <IoIosNotifications className='icon' />
        {notifTime}
      </span>
      <span
        onClick={() => {
          setNotifTime(time => time + 1);
        }}
        className={`px-2 text-2xl text-white`}
      >
        +
      </span>
    </button>
  );
}

export default MapIncrementBtn;
