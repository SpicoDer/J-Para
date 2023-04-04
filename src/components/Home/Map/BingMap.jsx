import { useEffect } from 'react';

function BingMap() {
  useEffect(() => {
    // Load the Bing Maps API script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=AiPKZ0UNBJO5u_ZL2cGw2YDZLiZYiZIiOfI_wBzlfGG1RFcvl63BsHndlXFihfGO&callback=initMap`;
    document.body.appendChild(script);

    // Initialize the map once the script has loaded
    window.initMap = () => {
      const map = new Microsoft.Maps.Map(document.getElementById('map'), {
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

      // Add user pin
      const addUserPin = function (userLoc) {
        const userPin = new Microsoft.Maps.Pushpin(
          new Microsoft.Maps.Location(userLoc.latitude, userLoc.longitude),
          {
            icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
            anchor: new Microsoft.Maps.Point(12, 39),
            text: 'JC',
            title: 'user',
            textOffset: new Microsoft.Maps.Point(0, 5),
            draggable: true,
          }
        );

        for (let i = map.entities.getLength() - 1; i >= 0; i--) {
          let pushpin = map.entities.get(i);
          if (pushpin.getTitle() === 'user') {
            map.entities.removeAt(i);
          }
        }
        map.entities.push(userPin);
        // center the map view
        map.setView({ center: userPin.getLocation() });
      };

      // Add pushpins on click
      Microsoft.Maps.Events.addHandler(map, 'click', e => {
        addUserPin(e.location);
      });

      // Update puv pin
      const updatePuvPin = function ({ lat, lng }) {
        const puvPin = new Microsoft.Maps.Pushpin(
          new Microsoft.Maps.Location(lat, lng),
          {
            icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
            anchor: new Microsoft.Maps.Point(12, 39),
            title: 'puv',
          }
        );

        for (let i = map.entities.getLength() - 1; i >= 0; i--) {
          let pushpin = map.entities.get(i);
          if (pushpin.getTitle() === 'puv') {
            map.entities.removeAt(i);
          }
        }
        map.entities.push(puvPin);
      };
    };

    // Clean up the script and initMap function
    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);
  return <div className='h-full w-full bg-yellow-200' id='map'></div>;
}

export default BingMap;
