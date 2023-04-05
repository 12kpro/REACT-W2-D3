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

import { useState } from "react";

function App() {
  const [showLink, setShowLink] = useState(true);
  const [secondaryBar, setSecondaryBar] = useState(true);
  const [searchPlaceHolder, setSearchPlaceHolder] = useState("Cerca Film");

  const updateNav = (showLink, secondaryBar, searchPlaceHolder) => {
    setShowLink(showLink);
    setSecondaryBar(secondaryBar);
    setSearchPlaceHolder(searchPlaceHolder);
  };
  return (
    <div className="text-bg-dark">
      <BrowserRouter>
        <SiteNav showLink={showLink} secondaryBar={secondaryBar} searchPlaceHolder={searchPlaceHolder} />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/tv-shows" element={<TVShows setNav={updateNav} />} />
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
