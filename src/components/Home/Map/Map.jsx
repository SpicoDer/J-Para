import MapLabel from './MapLabel.jsx';
import ProfileIcon from '../../ProfileIcon.jsx';
import MapBtns from './MapBtns.jsx';
import BingMap from './BingMap.jsx';
import MapNotif from './MapNotif.jsx';
import { useRef } from 'react';

function Map({ toggle, state, switchState }) {
  const mapRef = useRef({
    coordinates: {
      userCoords: '',
      puvCoords: '',
    },
    notifTime: 5,
    estimatedTime: 10,
    triggerNotif: triggerNotification,
  });

  const checkLocPermission = async function () {
    try {
      const result = await navigator.permissions.query({ name: 'geolocation' });
      if (result.state === 'denied') throw new Error();
    } catch (error) {
      throw new Error();
    }
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
    try {
      await checkLocPermission();
      const { latitude, longitude } = await getUserPosition();
      mapRef.current.coordinates.userCoords = {
        latitude: latitude,
        longitude: longitude,
      };
    } catch (error) {
      throw new Error();
    }
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
      mapRef.current.coordinates.puvCoords = {
        latitude: +latitude,
        longitude: +longitude,
      };
    } catch {
      throw new Error();
    }
  };

  function triggerNotification() {
    // Check the state of toggle button
    let alertState;
    switchState.setAlert(alert => {
      alertState = alert;
      return alert;
    });

    // Trigger notification if alert toggle is ON
    mapRef.current.mapNotifSetTriggered(
      alertState && mapRef.current.estimatedTime <= mapRef.current.notifTime
    );
  }

  return (
    <>
      <BingMap
        paraMap={mapRef.current}
        getUserCoords={fetchUserCoordinates}
        getPuvCoords={fetchPuvCoordinates}
      />
      <MapNotif map={mapRef.current} />
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
          <MapLabel map={mapRef.current} />
        </div>
        <MapBtns map={mapRef.current} />
      </div>
    </>
  );
}

export default Map;
