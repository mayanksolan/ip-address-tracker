import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="head-area">
          <div style={{ paddingTop: "2rem" }}>IP Address Tracker</div>
          <div className="head-input">
            <input type="text" placeholder="Search for any IP address or domain" className="head-input-text"></input>
            <div className="head-input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
              </svg>
            </div>
            <div className="head-details">
              <div className="details-item">
                <div className="item-type">IP ADDRESS</div>
                <div className="item-value">192.212.174.101</div>
              </div>
              <div className="details-item">
                <div className="item-type">LOCATION</div>
                <div className="item-value">Meerut, Uttar Pradesh</div>
              </div>
              <div className="details-item">
                <div className="item-type">TIMEZONE</div>
                <div className="item-value">UTC +05:30</div>
              </div>
              <div className="details-item">
                <div className="item-type">ISP</div>
                <div className="item-value">Airtel</div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-area"></div>
      </header>
    </div>
  );
}

export default App;