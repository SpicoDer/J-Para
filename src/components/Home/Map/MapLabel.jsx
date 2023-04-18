import { useState } from 'react';
// import { FETCH_TIME } from '../../../config';

function MapLabel({ map }) {
  const [estimatedTime, setEstimatedTime] = useState(10);
  const [address, setAddress] = useState('Address');
  map.estimatedTime = +estimatedTime; // update estimated time in map object
  map.setAddress = setAddress;

  /**
   * Calculates the travel time in minutes between two geographic points for a public utility vehicle (PUV) traveling.
   * @returns {number} The travel time in minutes between the user's current location and the PUV's destination.
   */
  const getTravelTimeInMinutes = function () {
    const DEFAULT_SPEED = 20; // 20 km/h
    const speedInMetersPerSecond = DEFAULT_SPEED / 3.6; // Convert km/h to m/s
    const travelTimeInSeconds = map.distance / speedInMetersPerSecond;
    const travelTimeInMinutes = travelTimeInSeconds / 60;
    setEstimatedTime(travelTimeInMinutes.toFixed(0));
  };

  /**

  * Calculates and sets the estimated travel time in minutes between the user's current location and the PUV's destination.
  * Uses the getTravelTimeInMinutes function to calculate the travel time based on the geographic coordinates of the user and the PUV's destination.
  * Updates the estimatedTime state with the calculated travel time in minutes.
  * @function
  * @memberof coordinates
  */
  map.updateEstimatedTime = function () {
    getTravelTimeInMinutes();
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
