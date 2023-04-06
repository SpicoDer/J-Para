import MapLabel from './MapLabel.jsx';
import ProfileIcon from '../../ProfileIcon.jsx';
import MapBtns from './MapBtns.jsx';
import BingMap from './BingMap.jsx';

function Map({ toggle, state }) {
  /**

* Asynchronously retrieves the user's current location using the browser's geolocation API.
* @async
* @function
* @returns {Promise<{ latitude: number, longitude: number }>} A promise that resolves with an object containing the user's latitude and longitude.
* @throws {Error} If an error occurs while retrieving the user's location.
*/
  const fetchUserCoordinates = async function () {
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

      const puv = await response.json();
      return puv.coordinates;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <BingMap
        getUserCoords={fetchUserCoordinates}
        getPuvCoords={fetchPuvCoordinates}
      />
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
