import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <Typography align="center" variant="h3">
        Weather Application
      </Typography>
      <SearchBar />
    </div>
  );
}

export default App;
