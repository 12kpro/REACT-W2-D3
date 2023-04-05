import { Component } from "react";
import SliderItem from "./SliderItem";

const BASE_URL = "http://www.omdbapi.com/?apikey=4e47af3b&s=";
class MoviesSlider extends Component {
  state = {
    movies: [],
    error: false,
    errorMsg: "",
    isLoading: true
  };
  fetchMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}${this.props.searchString}`);

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }
  };
  sliderScrollX = (e) => {
    console.log(e.target);
    //e.preventDefault();
    e.target.scrollLeft += e.deltaY;
  };
  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    return (
      <section className="mb-4">
        <div className="d-flex align-items-center mb-3">
          <h2 className="fs-3 me-3">{this.props.title}</h2>
          {this.state.isLoading && !this.state.error && (
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <div className="slider d-flex flex-nowrap" onWheel={this.sliderScrollX}>
          {this.state.movies.length === 0 && !this.state.error && !this.state.isLoading && (
            <div className="alert alert-success" role="alert">
              No movies found!
            </div>
          )}
          {this.state.error && !this.state.isLoading && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorMsg ? this.state.errorMsg : "Network problem!"}
            </div>
          )}
          {this.state.movies.map((movie) => (
            <SliderItem key={movie.imdbID} image={movie.Poster} movieId={movie.imdbID} />
          ))}
        </div>
      </section>
    );
  }
}
export default MoviesSlider;
