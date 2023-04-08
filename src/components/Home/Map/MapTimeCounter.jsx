import { useState } from 'react';

function MapIncrementBtn() {
  let [notifTime, setNotifTime] = useState(5);

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
      <span className='px-2 text-2xl text-white'>{notifTime}</span>
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
