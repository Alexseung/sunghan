// import {useEffect, useRef} from 'react';

// const GoogleMap = ({setCss}: any) => {
//   const mapRef = useRef<HTMLDivElement>(null);
//   const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
//     script.async = true;
//     document.head.appendChild(script);

//     window.initMap = () => {
//       if (mapRef.current) {
//         const map = new window.google.maps.Map(mapRef.current, {
//           center: {lat: 37.5375, lng: 127.0833}, // 성지하이츠 1009 좌표
//           zoom: 17,
//         });

//         new window.google.maps.Marker({
//           position: {lat: 37.5375, lng: 127.0833},
//           map,
//         });
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mapRef}
//       style={{width: '100%', height: '400px'}}
//       className={setCss}
//     />
//   );
// };

// export default GoogleMap;
import {useEffect, useRef, useState} from 'react';

const GoogleMap = ({setCss}: any) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false); // Google Maps가 로드되었는지 확인
  // const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  // vite에서는 import.meta.env 로 환경변수에 접근

  console.log(API_KEY);

  useEffect(() => {
    if (API_KEY) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);

      window.initMap = () => {
        setIsLoaded(true); // Google Maps가 로드되었으면 상태 업데이트

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
    }
  }, [API_KEY]);

  return (
    <div
      ref={mapRef}
      style={{width: '100%', height: '400px'}}
      className={setCss}
    >
      {!isLoaded && <p>Loading Map...</p>}{' '}
      {/* Google Maps 로딩 중에는 메시지 표시 */}
    </div>
  );
};

export default GoogleMap;
