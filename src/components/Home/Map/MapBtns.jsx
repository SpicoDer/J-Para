import MapTimeCounter from './MapTimeCounter.jsx';
import { IoLocate } from 'react-icons/io5';
import paraIcon from '../../../assets/para-icon.svg';

function MapBtns({ map }) {
  return (
    <div className='absolute right-0 bottom-16 m-6 grid place-items-end space-y-4 md:m-8 md:mx-6 lg:m-10 lg:mx-6'>
      <button
        type='button'
        className='grid place-items-center'
        onClick={() => {
          map.centerPuvHandler();
        }}
      >
        <img src={paraIcon} alt='Center the puv pin' className='btn-map' />
      </button>
      <button
        type='button'
        className='grid place-items-center'
        onClick={() => {
          map.centerUserHandler();
        }}
      >
        <IoLocate className='btn-map' />
      </button>
      <MapTimeCounter map={map} />
    </div>
  );
}

export default MapBtns;
