import { useState } from 'react';

function MapLabel({ map }) {
  const [estimatedTime, setEstimatedTime] = useState(10);
  const [address, setAddress] = useState('Address');
  map.estimatedTime = +estimatedTime; // update estimated time in map object
  map.setAddress = setAddress;

  /**

* Calculates the travel time in minutes based on the distance and default speed.
* @returns {string} The travel time in minutes as a string with no decimal places.
*/
  const getTravelTimeInMinutes = function () {
    const DEFAULT_SPEED = 20; // 20 km/h
    const speedInMetersPerSecond = DEFAULT_SPEED / 3.6; // Convert km/h to m/s
    const travelTimeInSeconds = map.distance / speedInMetersPerSecond;
    const travelTimeInMinutes = travelTimeInSeconds / 60;

    return travelTimeInMinutes.toFixed(0);
  };

  // Place in map object to use the setEstimatedTime function in Bing map component
  map.updateEstimatedTime = () => {
    setEstimatedTime(getTravelTimeInMinutes());
  };

  /**

  * This function returns the first address element from a comma-separated string of addresses.
  * @param {string} address - A comma-separated string of addresses.
  * @returns {string} The first address element from the input string.
  */
  function getFirstAddress(address) {
    const addressSplit = address.split(',');
    const firstAddress = addressSplit[0].trim();
    return firstAddress;
  }

  return (
    <div className='absolute bottom-2 left-4 right-4 z-10 rounded-lg bg-prim-400 p-2 py-4 text-sm text-white md:text-base lg:text-lg'>
      <p className='ml-4'>Location: {getFirstAddress(address)}</p>
      <p className='ml-4'>Estimated arrival: {estimatedTime} mins</p>
    </div>
  );
}

export default MapLabel;
