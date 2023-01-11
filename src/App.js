import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import getLocationWeather from "./api";
import { useState } from "react";

function App() {
  const [locationDetails, setLocationDetails] = useState({});

  const locationIsEntered = Object.keys(locationDetails).length !== 0;

  const handleSubmit = async (locationName) => {
    const response = await getLocationWeather(locationName);
    setLocationDetails((locationDetails) => ({
      ...locationDetails,
      ...response,
    }));
  };

  return (
    <div>
      <Typography align="center" variant="h3">
        Weather Application
      </Typography>
      <SearchBar onSubmit={handleSubmit} />
      <div>
        {locationIsEntered ? <WeatherCard location={locationDetails} /> : null}
      </div>
    </div>
  );
}

export default App;
