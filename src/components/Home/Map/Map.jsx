import MapLabel from './MapLabel.jsx';
import ProfileIcon from '../../ProfileIcon.jsx';
import MapBtns from './MapBtns.jsx';
import BingMap from './BingMap.jsx';
import MapNotif from './MapNotif.jsx';

function Map({ toggle, state }) {
  const map = {
    coordinates: {
      userCoords: '',
      puvCoords: '',
    },
    notifTime: 5,
    estimatedTime: 10,
    triggerNotif: triggerNotification,
  };

  /**

* Asynchronously retrieves the user's current location using the browser's geolocation API.
* @async
* @function
* @returns {Promise<{ latitude: number, longitude: number }>} A promise that resolves with an object containing the user's latitude and longitude.
* @throws {Error} If an error occurs while retrieving the user's location.
*/
  const getUserPosition = function () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        error => reject(error)
      );
    });
  };

  const fetchUserCoordinates = async function () {
    const { latitude, longitude } = await getUserPosition();
    map.coordinates.userCoords = { latitude: latitude, longitude: longitude };
  };

  /**

* Asynchronously fetches the coordinates of the public utility vehicle (PUV) from an API.
* @async
* @function
* @returns {Promise<{ latitude: number, longitude: number }>} A promise that resolves with an object containing the PUV's latitude and longitude.
* @throws {Error} If an HTTP error occurs or the API response cannot be parsed as JSON.
*/
  const fetchPuvCoordinates = async function () {
    try {
      const response = await fetch(
        'https://jparatest.000webhostapp.com/location/read.php'
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const fetchCoords = await response.json();
      const { latitude, longitude } = fetchCoords.coordinates;
      map.coordinates.puvCoords = {
        latitude: +latitude,
        longitude: +longitude,
      };
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  function triggerNotification() {
    map.mapNotifSetTriggered(map.estimatedTime <= map.notifTime);
  }

  return (
    <>
      <BingMap
        paraMap={map}
        getUserCoords={fetchUserCoordinates}
        getPuvCoords={fetchPuvCoordinates}
      />
      <MapNotif map={map} />
      <div>
        <div
          onClick={() => {
            toggle(!state);
          }}
          className=' absolute left-0 top-0 z-10 m-4 lg:hidden'
        >
          <ProfileIcon size='12' />
        </div>
        <div>
          <MapLabel address='address' map={map} />
        </div>
        <MapBtns map={map} />
      </div>
    </>
  );
}

export default Map;
