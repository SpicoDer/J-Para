import MapBtn from './MapBtn.jsx';
import MapTimeCounter from './MapTimeCounter.jsx';

function MapBtns() {
  return (
    <div className='absolute right-0 bottom-16 m-6 space-y-4 md:m-8 md:mx-6 lg:m-10 lg:mx-6'>
      <MapTimeCounter />
    </div>
  );
}

export default MapBtns;
