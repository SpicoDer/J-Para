import { useState } from 'react';
import { FETCH_TIME } from '../../../config';

function MapLabel({ map }) {
  const [estimatedTime, setEstimatedTime] = useState(10);
  const [address, setAddress] = useState('Address');
  map.estimatedTime = +estimatedTime; // update estimated time in map object
  map.setAddress = setAddress;

  /**
   * Calculates the distance between two geographic points in meters.
   *
   * @param {Object} point1 - The first point object containing latitude and longitude.
   * @param {number} point1.lat1 - The latitude of the first point in decimal degrees.
   * @param {number} point1.lon1 - The longitude of the first point in decimal degrees.
   * @param {Object} point2 - The second point object containing latitude and longitude.
   * @param {number} point2.lat2 - The latitude of the second point in decimal degrees.
   * @param {number} point2.lon2 - The longitude of the second point in decimal degrees.
   * @returns {number} The distance between the two points in meters.
   */

  const getDistanceFromLatLonInMeters = function (
    { latitude: lat1, longitude: lon1 },
    { latitude: lat2, longitude: lon2 }
  ) {
    const R = 6371e3; // Earth's radius in meters
    const dLat = ((lat2 - lat1) * Math.PI) / 180; // Convert to radians
    const dLon = ((lon2 - lon1) * Math.PI) / 180; // Convert to radians
    const lat1Rad = (lat1 * Math.PI) / 180; // Convert to radians
    const lat2Rad = (lat2 * Math.PI) / 180; // Convert to radians

    const x = dLon * Math.cos((lat1Rad + lat2Rad) / 2);
    const y = dLat;

    const distance = Math.sqrt(x * x + y * y) * R;
    return distance;
  };

  // const calculateSpeed = function () {
  //   const DEFAULT_SPEED = 30;
  //   const time = FETCH_TIME;
  //   let speed = DEFAULT_SPEED;
  //   let firstCall = true;
  //   let prevCoords;
  //   let currentCoords;

  //   return () => {
  //     prevCoords = currentCoords;
  //     currentCoords = map.coordinates.puvCoords;

  //     if (firstCall) {
  //       firstCall = false;
  //       currentCoords = map.coordinates.puvCoords;
  //       return speed;
  //     }
  //     speed = getDistanceFromLatLonInMeters(prevCoords, currentCoords) / time;
  //     return speed;
  //   };
  // };

  // // PUV Speed
  // let puvSpeed = calculateSpeed();

  /**
   * Calculates the travel time in minutes between two geographic points for a public utility vehicle (PUV) traveling.
   *
   * @param {Object} userCoords - The coordinates of the user's current location.
   * @param {number} userCoords.lat1 - The latitude of the user's current location in decimal degrees.
   * @param {number} userCoords.lon1 - The longitude of the user's current location in decimal degrees.
   * @param {Object} puvCoords - The coordinates of the PUV's destination.
   * @param {number} puvCoords.lat2 - The latitude of the PUV's destination in decimal degrees.
   * @param {number} puvCoords.lon2 - The longitude of the PUV's destination in decimal degrees.
   * @returns {number} The travel time in minutes between the user's current location and the PUV's destination.
   */
  const getTravelTimeInMinutes = function () {
    const distanceInMeters = getDistanceFromLatLonInMeters(
      map.coordinates.userCoords,
      map.coordinates.puvCoords
    );

    const DEFAULT_SPEED = 20; // 20 km/h
    const speedInMetersPerSecond = DEFAULT_SPEED / 3.6; // Convert km/h to m/s
    const travelTimeInSeconds = distanceInMeters / speedInMetersPerSecond;
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

  function getFirstAddress(address) {
    const addressSplit = address.split(',');
    const firstAddress = addressSplit[0].trim();
    return firstAddress;
  }

  return (
    <div className='absolute bottom-2 left-4 right-4 z-10 rounded-lg bg-prim-400 p-2 py-4 text-sm text-white md:text-base lg:text-lg'>
      <p className='ml-4'>Estimated arrival: {estimatedTime} mins</p>
      <p className='ml-4'>PUV location: {getFirstAddress(address)}</p>
    </div>
  );
}

export default MapLabel;
