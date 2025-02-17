import {useEffect, useRef} from 'react';

const GoogleMap = ({setCss}: any) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = () => {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: {lat: 37.5375, lng: 127.0833}, // 성지하이츠 1009 좌표
          zoom: 17,
        });

        new window.google.maps.Marker({
          position: {lat: 37.5375, lng: 127.0833},
          map,
        });
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{width: '100%', height: '400px'}}
      className={setCss}
    />
  );
};

export default GoogleMap;
