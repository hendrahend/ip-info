import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json")
      .then((response) => response.json())
      .then((apiData) => {
        setTimeout(() => {
          setLoading(false);
          setData(apiData);
        }, 900);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <h2>IP Info</h2>
        {data && (
          <div>
            <p>Your IP: {data.ip}</p>
            {visible && (
              <div>
                <p>
                  City: {data.city}
                  <span> - {data.country}</span>
                </p>
                <p>IP Version: {data.version}</p>
                <p>
                  Latitude/Logitude: {data.latitude}
                  <span>/{data.longitude}</span>
                </p>
                <p>Language: {data.languages}</p>
                <p>Timezone: {data.timezone}</p>
                <p>ASN: {data.asn}</p>
                <p>Org: {data.org}</p>
              </div>
            )}
          </div>
        )}
        {loading && <p>Loading...</p>}
        <button onClick={() => setVisible(!visible)}>{!visible ? "Show More" : "Show Less"}</button>
      </div>
    </>
  );
}

export default App;

