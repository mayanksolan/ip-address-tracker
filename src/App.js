import "./App.css";
import { MapContainer, Marker, TileLayer, Popup, useMapEvents, useMap } from "react-leaflet";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GEO_API_KEY;

const App = () => {
  const [position, setPosition] = useState([0, 0]);
  const [ip, setIp] = useState("192.212.174.101");
  const [locationData, setLocationData] = useState(null);

  const fetchLocationDetails = () => {
    const fetchPromise = fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`);
    fetchPromise
      .then((res) => res.json())
      .then((res) => {
        setLocationData(res);
        setPosition([res.location.lat, res.location.lng]);
      });
  };

  useEffect(() => {
    fetchLocationDetails();
  }, []);

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="head-area">
          <div style={{ paddingTop: "2rem" }}>IP Address Tracker</div>
          <div className="head-input">
            <div className="head-input-input">
              <input type="text" placeholder={ip} className="head-input-text" onChange={(e) => setIp(e.target.value)}></input>
              <button onClick={fetchLocationDetails} className="head-input-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                  <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
                </svg>
              </button>
            </div>
            <div className="head-details">
              <div className="details-item">
                <div className="item-type">IP ADDRESS</div>
                <div className="item-value">{locationData?.ip}</div>
              </div>
              <div className="details-item brdr">
                <div className="item-type">LOCATION</div>
                <div className="item-value">{`${locationData?.location ? `${locationData?.location?.city}, ${locationData?.location?.region}` : ""}`}</div>
              </div>
              <div className="details-item brdr">
                <div className="item-type">TIMEZONE</div>
                <div className="item-value">{`${locationData?.location ? `UTC ${locationData?.location?.timezone}` : ""}`}</div>
              </div>
              <div className="details-item brdr">
                <div className="item-type">ISP</div>
                <div className="item-value">{locationData?.isp || ""}</div>
              </div>
            </div>
          </div>
        </div>
        <MapContainer center={position} zoom={13}>
          <ChangeView center={position} zoom={13} />
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>This is the IP Location</Popup>
          </Marker>
        </MapContainer>
      </header>
    </div>
  );
};

export default App;
