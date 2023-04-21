import MapLabel from './MapLabel.jsx';
import ProfileIcon from '../../ProfileIcon.jsx';
import MapBtns from './MapBtns.jsx';
import BingMap from './BingMap.jsx';
import MapNotif from './MapNotif.jsx';
import { useRef } from 'react';

function Map({ toggle, state, alertState }) {
  const mapRef = useRef({
    coordinates: {
      userCoords: '',
      puvCoords: '',
    },
    notifTime: 5,
    estimatedTime: 0,
    triggerNotification,
  });

  const map = mapRef.current;
  /**

  * Checks if the user has granted permission to access their location.
  * @throws {Error} If the user denies location permission or if there is an error checking the permission status.
  * @returns {Promise<void>}
  */
  const checkLocPermission = async function () {
    try {
      const result = await navigator.permissions.query({ name: 'geolocation' });
      if (result.state === 'denied') throw new Error();
    } catch {
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

  /**

  * Fetches the user's coordinates and stores them in the mapRef current coordinates object.
  * @throws {Error} If the user denies location permission or if there is an error retrieving the user's position.
  * @returns {Promise<void>}
  */
  const fetchUserCoordinates = async function () {
    try {
      await checkLocPermission();
      const { latitude, longitude } = await getUserPosition();
      map.coordinates.userCoords = {
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
      map.coordinates.puvCoords = {
        latitude: +latitude,
        longitude: +longitude,
      };
    } catch {
      throw new Error();
    }
  };

  /**

  * Triggers a notification if the alert toggle is on and the estimated time is less than or equal to the notification time.
  * @returns {void}
  */
  function triggerNotification() {
    // Check the state of toggle button
    let alertState;
    alertState.setAlert(alert => {
      alertState = alert;
      return alert;
    });

    // Trigger notification if alert toggle is ON
    map.mapNotifSetTriggered(alertState && map.estimatedTime <= map.notifTime);
  }

  return (
    <>
      <BingMap
        paraMap={map}
        getUserCoords={fetchUserCoordinates}
        getPuvCoords={fetchPuvCoordinates}
      />
      <MapNotif map={map} />
      <div
        onClick={() => {
          toggle(!state);
        }}
        className=' absolute left-0 top-0 z-10 m-4 lg:hidden'
      >
        <ProfileIcon />
      </div>
      <MapLabel map={map} />
      <MapBtns map={map} />
    </>
  );
}

export default Map;
