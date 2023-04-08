import { useState } from 'react';
function MapBtn({ icon }) {
  const [styleOnClick, setStyleOnClick] = useState('');
  return (
    <button
      onMouseDown={() => {
        setStyleOnClick('-scale-75');
      }}
      onMouseUp={() => {
        setStyleOnClick('');
      }}
      className={`${styleOnClick} grid h-10 w-12 place-items-center bg-white`}
    >
      <svg className='h-8 w-8 fill-prim-400'>
        <use xlinkHref={`../assets/icons.svg#${icon}`}></use>
      </svg>
    </button>
  );
}

export default MapBtn;
