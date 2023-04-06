function MapLabel({ address }) {
  // TEST COORDINATES:
  const userCoords = {
    latitude: 14.930939437753212,
    longitude: 121.03090571201302,
  };
  const puvCoords = {
    latitude: 14.941031957921565,
    longitude: 121.01702835342887,
  };

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
  function getDistanceFromLatLonInMeters(
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
  }

  /**
   * Calculates the travel time in minutes between two geographic points for a public utility vehicle (PUV) traveling at a fixed speed of 30 km/h.
   *
   * @param {Object} userCoords - The coordinates of the user's current location.
   * @param {number} userCoords.lat1 - The latitude of the user's current location in decimal degrees.
   * @param {number} userCoords.lon1 - The longitude of the user's current location in decimal degrees.
   * @param {Object} puvCoords - The coordinates of the PUV's destination.
   * @param {number} puvCoords.lat2 - The latitude of the PUV's destination in decimal degrees.
   * @param {number} puvCoords.lon2 - The longitude of the PUV's destination in decimal degrees.
   * @returns {number} The travel time in minutes between the user's current location and the PUV's destination.
   */
  function getTravelTimeInMinutes(userCoords, puvCoords) {
    const distanceInMeters = getDistanceFromLatLonInMeters(
      userCoords,
      puvCoords
    );
    const speedInMetersPerSecond = 30 / 3.6; // Convert km/h to m/s
    const travelTimeInSeconds = distanceInMeters / speedInMetersPerSecond;
    const travelTimeInMinutes = travelTimeInSeconds / 60;
    return travelTimeInMinutes;
  }

  const estimatedTime = getTravelTimeInMinutes(userCoords, puvCoords).toFixed(
    0
  );

  return (
    <div className='absolute bottom-2 left-4 right-4 z-10 rounded-lg bg-prim-400 p-2 py-4 text-sm text-white md:text-base lg:text-lg'>
      <p className='ml-4'>{address}</p>
      <p className='ml-4'>Estimated time: {estimatedTime} mins</p>
    </div>
  );
}

export default MapLabel;
