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
        center: new Microsoft.Maps.Location(14.9549, 120.911),
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

      // Add pushpins

      const pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), {
        icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
        anchor: new Microsoft.Maps.Point(12, 39),
        text: 'JC',
        title: 'User',
        textOffset: new Microsoft.Maps.Point(0, 5),
      });
      map.entities.push(pushpin);
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
