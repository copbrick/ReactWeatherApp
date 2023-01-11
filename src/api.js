import axios from "axios";

const getLocationWeather = async (location) => {
  const response = await axios.get(
    "http://api.weatherapi.com/v1/current.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        key: "6a9a34c8e64d497daef230756231001",
        q: location,
      },
    }
  );
  return response.data.current.temp_f;
};
export default getLocationWeather;
