import "./style.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import SiteNav from "./components/SiteNav";
import HomeMain from "./components/HomeMain";
import SiteFooter from "./components/SiteFooter";
import ProfileMain from "./components/ProfileMain";
import SettingsMain from "./components/SettingsMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import TVShows from "./components/TVShows";

function App() {
  return (
    <div className="text-bg-dark">
      <BrowserRouter>
        <SiteNav showLink={true} secondaryBar={true} />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/profile" element={<ProfileMain />} />
          <Route path="/settings" element={<SettingsMain />} />
          <Route path="/details/:movieId/" element={<MovieDetails />} />
          <Route path="*" element={<NotFound spacings="mt-5 pt-5" />} />
        </Routes>
        <SiteFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
