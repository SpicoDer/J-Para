import { useEffect } from 'react';

function BingMap() {
  useEffect(() => {
    // Load the Bing Maps API script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://www.bing.com/api/maps/mapcontrol?callback=initMap`;
    document.body.appendChild(script);

    // NOTE: Initialize the map once the script has loaded

    window.initMap = () => {
      const map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials:
          'AiPKZ0UNBJO5u_ZL2cGw2YDZLiZYiZIiOfI_wBzlfGG1RFcvl63BsHndlXFihfGO',
        center: new Microsoft.Maps.Location(14.930912, 121.030519),
        zoom: 16,
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

      // NOTE: Reusable functions
      const createPinInstance = function ({ latitude, longitude }, pinOptions) {
        return new Microsoft.Maps.Pushpin(
          new Microsoft.Maps.Location(latitude, longitude),
          pinOptions
        );
      };

      // NOTE: Adding layers to map
      const userPinLayer = new Microsoft.Maps.Layer();
      const puvPinlayer = new Microsoft.Maps.Layer();
      map.layers.insertAll([userPinLayer, puvPinlayer]);

      // NOTE: Render push pins on map
      const addUserPinOnMap = function (coords) {
        const pinOptions = {
          icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
          anchor: new Microsoft.Maps.Point(12, 39),
          text: 'JC',
          title: 'User',
          textOffset: new Microsoft.Maps.Point(0, 5),
          draggable: true,
        };

        const userPin = createPinInstance(coords, pinOptions);
        userPinLayer.clear();
        userPinLayer.add(userPin);
        map.setView({ center: userPin.getLocation() });
      };

      const addPuvPinOnMap = function (coords) {
        const pinOptions = {
          icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
          anchor: new Microsoft.Maps.Point(12, 39),
          text: 'PaRA',
          title: 'PUV',
          textOffset: new Microsoft.Maps.Point(0, 5),
        };

        const puvPin = createPinInstance(coords, pinOptions);
        puvPinlayer.clear();
        puvPinlayer.add(puvPin);

        return puvPin.getLocation();
      };

      // NOTE: Adding push pins

      // TODO: add the return coordinates of geolocation API
      // Add user push pins on user current location by default
      addUserPinOnMap({ latitude: 14.930912, longitude: 121.030519 });

      // Add user push pins on the location where user clicks on map
      Microsoft.Maps.Events.addHandler(map, 'click', e => {
        addUserPinOnMap(e.location);
      });
    };

    // NOTE: Clean up the script and initMap function
    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);
  return <div className='h-full w-full bg-yellow-200' id='map'></div>;
}

export default BingMap;
