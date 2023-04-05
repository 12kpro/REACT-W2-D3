import MoviesSlider from "./MoviesSlider";
import { useEffect, useState } from "react";

const TVShows = (props) => {
  useEffect(() => {
    props.setNav(true, true, "cerca serie TV");
  }, []);

  return (
    <main className="container-fluid px-5 text-bg-dark">
      <MoviesSlider title="Fringe" searchString="fringe" />
      <MoviesSlider title="Star trek" searchString="star trek" />
      <MoviesSlider title="A-team" searchString="a-team" />
    </main>
  );
};
export default TVShows;
