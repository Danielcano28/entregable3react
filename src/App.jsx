import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const randomDimension = getRandomNumber(126);

    axios
      .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="px-4 min-h-screen bg-black text-white  bg-[url(/fondo.png)] bg-no-repeat bg-cover bg-center">
      <div style={{ textAlign: "center" }}>
        <div style={{ height: "80px", color: "green" }}></div>
        <div style={{ height: "80px" }}></div>
      </div>
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      <ResidentList residents={locationInfo?.residents ?? []} />
    </main>
  );
}

export default App;
