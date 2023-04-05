import MoviesSlider from "./MoviesSlider";
const TVShows = (props) => (
  <main className="container-fluid px-5 text-bg-dark">
    <MoviesSlider title="Fringe" searchString="fringe" />
    <MoviesSlider title="Star trek" searchString="star trek" />
    <MoviesSlider title="A-team" searchString="a-team" />
  </main>
);

export default TVShows;
