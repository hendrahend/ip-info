import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <h2>Your IP is</h2>
        {loading && <p>Loading...</p>}
        {data && <p>{data.ip}</p>}
      </div>
    </>
  );
}

export default App;

