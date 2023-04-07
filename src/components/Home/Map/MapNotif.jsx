import { useState } from 'react';

function MapNotif() {
  const [close, setClose] = useState(true);

  return (
    <div className={`${close && 'hidden'}`}>
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg bg-white p-8 shadow-xl'>
        <img
          src='../../../assets/logo.svg'
          alt='logo'
          className='mx-auto h-16 w-16 '
        />
        <p className='m-4 py-2 text-center text-lg font-bold text-black'>
          PaRA is near in your stop!
        </p>
        <button
          className='btn-prim w-full rounded-full'
          onClick={() => {
            setClose(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MapNotif;
