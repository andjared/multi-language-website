import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import myIcon from "../assets/icons/location.png";

let focusIcon = L.icon({
  iconUrl: myIcon,
  iconSize: 20,
});

const MyMap = () => {
  // const [zoomLevel, setZoomLevel] = useState(12);

  const center = [44.27456335838029, 19.88409948119744];
  const position = [44.26282139975556, 19.921067487516684];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setZoomLevel(20);
  //     console.log(zoomLevel);
  //   }, 2000);
  //   return () => {
  //     clearTimeout();
  //   };
  // }, [zoomLevel]);

  return (
    <div>
      <MapContainer
        className="map"
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        // style={{ height: "20em", width: "20em" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={focusIcon}>
          <Popup>Basta i svasta</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
