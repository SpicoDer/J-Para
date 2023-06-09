import { useEffect } from 'react';
import { FETCH_TIME } from '../../../config';
import { toast } from 'react-toastify';
import paraIcon from '../../../assets/para-icon.svg';
import userIcon from '../../../assets/icon-user.svg';
import Spinner from '../../Spinner';

/**

* A React component that displays a Bing Map and adds push pins to the map
* representing the user's current location and a public utility vehicle (PUV) location.
* @component
*/
function BingMap({ paraMap, getUserCoords, getPuvCoords }) {
  /**
   * A React hook that loads the Bing Maps API script,
   * initializes the map and push pins,
   * and cleans up the script and initMap function when the component is unmounted.
   * @function
   * @see https://reactjs.org/docs/hooks-effect.html
   */
  useEffect(() => {
    // Load the Bing Maps API script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://www.bing.com/api/maps/mapcontrol?callback=initMap`;
    document.body.appendChild(script);

    // To clean up interval and timeout outside function
    let initialTimeout;
    let shortInterval;
    let longInterval;

    (async () => {
      try {
        // get the coordinates first
        await getUserCoords();
        await getPuvCoords();

        // NOTE: Initialize the map once the script has loaded
        window.initMap = () => {
          // Create instance of map
          const map = new Microsoft.Maps.Map(document.getElementById('map'), {
            credentials:
              'AiPKZ0UNBJO5u_ZL2cGw2YDZLiZYiZIiOfI_wBzlfGG1RFcvl63BsHndlXFihfGO',
            center: new Microsoft.Maps.Location(
              paraMap.coordinates.userCoords.latitude,
              paraMap.coordinates.userCoords.longitude
            ),
            zoom: 16,
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            customMapStyle: {
              elements: {
                area: { fillColor: '#b6e591' },
                water: { fillColor: '#75cff0' },
                tollRoad: { fillColor: '#a964f4', strokeColor: '#a964f4' },
                arterialRoad: { fillColor: '#ffffff', strokeColor: '#d7dae7' },
                road: { fillColor: '#ffa35a', strokeColor: '#ff9c4f' },
                street: { fillColor: '#ffffff', strokeColor: '#ffffff' },
                transit: { fillColor: '#000000' },
              },
              settings: {
                landColor: '#efe9e1',
              },
            },
          });

          // NOTE: Adding layers to map
          const userPinLayer = new Microsoft.Maps.Layer();
          const puvPinlayer = new Microsoft.Maps.Layer();
          map.layers.insertAll([userPinLayer, puvPinlayer]);

          // NOTE: Render push pins on map and return its location to coordinates obj
          let userPin;
          let puvPin;

          const createPinInstance = function (
            { latitude, longitude },
            pinOptions
          ) {
            return new Microsoft.Maps.Pushpin(
              new Microsoft.Maps.Location(latitude, longitude),
              pinOptions
            );
          };

          const pinOptions = function (icon, title) {
            return {
              icon,
              anchor: new Microsoft.Maps.Point(24, 48),
              title,
              textOffset: new Microsoft.Maps.Point(0, 5),
            };
          };

          const addUserPinOnMap = function (coords) {
            userPin = createPinInstance(coords, pinOptions(userIcon, 'USER'));
            userPinLayer.clear();
            userPinLayer.add(userPin);
            paraMap.coordinates.userCoords = userPin.getLocation();
          };

          const addPuvPinOnMap = function (coords) {
            puvPin = createPinInstance(coords, pinOptions(paraIcon, 'PUV'));
            puvPinlayer.clear();
            puvPinlayer.add(puvPin);
            paraMap.coordinates.puvCoords = puvPin.getLocation();
          };

          // NOTE: Adding push pins

          // Add push pins on map on start
          addUserPinOnMap(paraMap.coordinates.userCoords);
          addPuvPinOnMap(paraMap.coordinates.puvCoords);

          // Add user push pins on the location where user clicks on map
          Microsoft.Maps.Events.addHandler(map, 'click', e => {
            addUserPinOnMap(e.location);
            directionsModule();
            paraMap.updateEstimatedTime(); // Update the estimated arrival time
          });

          // NOTE: Center push pins
          const centerPins = function () {
            const locs = [userPin.getLocation(), puvPin.getLocation()];
            const rect = Microsoft.Maps.LocationRect.fromLocations(locs);

            map.setView({
              mapTypeId: Microsoft.Maps.MapTypeId.road,
              zoom: 16,
              bounds: rect,
              padding: 80,
            });
          };
          centerPins();

          // This pass the function to paraMap obj to be use in the button component
          paraMap.centerUserHandler = function () {
            map.setView({ center: userPin.getLocation(), zoom: 16 });
          };

          paraMap.centerPuvHandler = function () {
            map.setView({ center: puvPin.getLocation(), zoom: 16 });
          };

          // NOTE: Reverse geocoding

          //Create an instance of the search manager.
          let searchManager;
          Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            searchManager = new Microsoft.Maps.Search.SearchManager(map);
          });

          const reverseGeocode = function () {
            const searchRequest = {
              location: puvPin.getLocation(),
              callback: address => {
                paraMap.setAddress(address.name);
              },
              errorCallback: () => {
                paraMap.setAddress('No address found');
              },
              getContainer: function () {
                return document.getElementById('map');
              },
            };

            //Make the reverse geocode request.
            searchManager.reverseGeocode(searchRequest);
          };

          // NOTE: Directions Module

          let directionsManager;

          //Load the directions module.
          Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
            //Create an instance of the directions manager.
            directionsManager = new Microsoft.Maps.Directions.DirectionsManager(
              map
            );

            //Add event handlers to directions manager.
            Microsoft.Maps.Events.addHandler(
              directionsManager,
              'directionsError',
              e => {
                toast.error(e.message);
              }
            );
            Microsoft.Maps.Events.addHandler(
              directionsManager,
              'directionsUpdated',
              calculateRouteDistance
            );
          });

          // Render Options
          const renderOptions = function () {
            directionsManager.setRenderOptions({
              waypointPushpinOptions: {
                visible: false,
              },
              autoUpdateMapView: false,
            });
          };

          function calculateRouteDistance(e) {
            //Get the current route index.
            const routeIdx = directionsManager.getRequestOptions().routeIndex;

            //Get the distance of the route in km, rounded to 2 decimal places.
            paraMap.distance =
              (Math.round(e.routeSummary[routeIdx].distance * 100) / 100) *
              1000;
          }

          function directionsModule() {
            directionsManager.clearAll();
            renderOptions();

            //Create waypoints to route between.
            const puvWaypoint = new Microsoft.Maps.Directions.Waypoint({
              location: puvPin.getLocation(),
            });
            const userWaypoint = new Microsoft.Maps.Directions.Waypoint({
              location: userPin.getLocation(),
            });

            directionsManager.addWaypoint(puvWaypoint);
            directionsManager.addWaypoint(userWaypoint);

            //Calculate directions.
            directionsManager.calculateDirections();
          }

          // NOTE: Update puv information every x secs
          const intervalTime = FETCH_TIME * 1000; // Convert secs to ms

          initialTimeout = setTimeout(() => {
            directionsModule();
            reverseGeocode();
          }, 5_000);

          shortInterval = setInterval(() => {
            paraMap.updateEstimatedTime();
            paraMap.triggerNotification();
          }, 7_000);

          longInterval = setInterval(async () => {
            await getPuvCoords(); // fetch new coordinates of puv
            addPuvPinOnMap(paraMap.coordinates.puvCoords); // re-render the position of pin on map
            directionsModule(); // display and calculate routes
            reverseGeocode(); // Get the address of puv
          }, intervalTime);
        };
      } catch (error) {
        toast.error('There is an error getting the location');
      }
    })();

    // NOTE: Clean up the script and initMap function
    return () => {
      clearInterval(shortInterval);
      clearInterval(longInterval);
      clearTimeout(initialTimeout);
      document.body.removeChild(script);
      delete window.initMap;
      console.log('clean');
    };
  }, []);

  return (
    <div className='grid h-full w-full place-items-center bg-white' id='map'>
      <Spinner />
    </div>
  );
}

export default BingMap;
