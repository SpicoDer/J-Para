import MapLabel from './MapLabel.jsx';
import ProfileIcon from '../../ProfileIcon.jsx';
import MapBtns from './MapBtns.jsx';
import BingMap from './BingMap.jsx';
import MapNotif from './MapNotif.jsx';

function Map({ toggle, state }) {
  const coordinates = {
    userCoords: '',
    puvCoords: '',
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
    coordinates.userCoords = { latitude: latitude, longitude: longitude };
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
      coordinates.puvCoords = fetchCoords.coordinates;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };
  // Return users & puv current location on map
  // It returns an object with lat and lng
  // FIX: When calling on map label, you need to pass argument to initalize it.
  // TODO: create a function that when you call will just return the value

  // const userCurrentLoc = userLoc => {
  //   return { latitude: userLoc.latitude, longitude: userLoc.longitude };
  // };
  // const puvCurrentLoc = puvLoc => {
  //   return { latitude: puvLoc.latitude, longitude: puvLoc.longitude };
  // };

  return (
    <>
      <BingMap
        coords={coordinates}
        getUserCoords={fetchUserCoordinates}
        getPuvCoords={fetchPuvCoordinates}
      />
      <MapNotif />
      <div>
        <div
          onClick={() => {
            toggle(!state);
          }}
          className=' absolute left-0 top-0 z-10 m-4 lg:hidden'
        >
          <ProfileIcon size='12' />
        </div>
        <MapLabel address='address' />
        <MapBtns />
      </div>
    </>
  );
}

export default Map;
