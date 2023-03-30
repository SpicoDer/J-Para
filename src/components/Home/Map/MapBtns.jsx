import MapBtn from './MapBtn.jsx';

function MapBtns() {
  return (
    <div className='absolute right-0 bottom-16 m-4 space-y-4'>
      <div>
        <MapBtn icon='custom-location' />
      </div>
      <div>
        <MapBtn icon='my-location' />
      </div>
    </div>
  );
}

export default MapBtns;
