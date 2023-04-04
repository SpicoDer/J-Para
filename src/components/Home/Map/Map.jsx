import MapLabel from './MapLabel.jsx';
import ProfileIcon from '../../ProfileIcon.jsx';
import MapBtns from './MapBtns.jsx';
import BingMap from './BingMap.jsx';

function Map({ toggle, state }) {
  return (
    <>
      <BingMap />
      <div>
        <div
          onClick={() => {
            toggle(!state);
          }}
          className=' absolute left-0 top-0 z-10 m-4 lg:hidden'
        >
          <ProfileIcon size='12' />
        </div>
        <MapLabel address='address' timeMins='5' />
        <MapBtns />
      </div>
    </>
  );
}

export default Map;
