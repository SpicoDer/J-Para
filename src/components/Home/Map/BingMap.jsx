import { useEffect } from 'react';
import { FETCH_TIME } from '../../../config';
import { toast } from 'react-toastify';

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

    (async () => {
      try {
        // get the coordinates first
        await getUserCoords();
        await getPuvCoords();

        // NOTE: Initialize the map once the script has loaded
        window.initMap = () => {
          const map = new Microsoft.Maps.Map(document.getElementById('map'), {
            credentials:
              'AiPKZ0UNBJO5u_ZL2cGw2YDZLiZYiZIiOfI_wBzlfGG1RFcvl63BsHndlXFihfGO',
            center: new Microsoft.Maps.Location(
              paraMap.coordinates.userCoords.latitude,
              paraMap.coordinates.userCoords.longitude
            ),
            zoom: 16,
            enableRotation: true,
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

          const addUserPinOnMap = function (coords) {
            const pinOptions = {
              icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
              anchor: new Microsoft.Maps.Point(12, 39),
              text: 'JC',
              title: 'User',
              textOffset: new Microsoft.Maps.Point(0, 5),
              draggable: true,
            };

            userPin = createPinInstance(coords, pinOptions);
            userPinLayer.clear();
            userPinLayer.add(userPin);
            paraMap.coordinates.userCoords = userPin.getLocation();
          };

          const addPuvPinOnMap = function (coords) {
            const pinOptions = {
              icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
              anchor: new Microsoft.Maps.Point(12, 39),
              text: 'PaRA',
              title: 'PUV',
              textOffset: new Microsoft.Maps.Point(0, 5),
            };

            puvPin = createPinInstance(coords, pinOptions);
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

          paraMap.centerUserHandler = function () {
            try {
              map.setView({ center: userPin.getLocation(), zoom: 16 });
            } catch {
              toast.error('No location found');
            }
          };

          paraMap.centerPuvHandler = function () {
            try {
              map.setView({ center: puvPin.getLocation(), zoom: 16 });
            } catch {
              toast.error('Waiting for location');
            }
          };

          // NOTE: Update puv information every x secs
          const intervalTime = FETCH_TIME * 1000; // Convert secs to ms

          setInterval(async () => {
            await getPuvCoords(); // fetch new coordinates of puv
            // re-render the position of pin on map
            addPuvPinOnMap(paraMap.coordinates.puvCoords);
            paraMap.updateEstimatedTime(); // Update the estimated arrival time
            // if estimated arrival time is equal or less than the user alert time
            paraMap.triggerNotif();
          }, intervalTime);
        };
      } catch (error) {
        toast.error('There is an error getting the location');
      }
    })();

    // NOTE: Clean up the script and initMap function
    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return <div className='h-full w-full bg-yellow-200' id='map'></div>;
}

export default BingMap;
