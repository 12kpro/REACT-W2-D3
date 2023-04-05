import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieComments from "./MovieComments";

const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=4e47af3b&i=";
const COMMENT_API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const AUTH_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYjZhZGM1NmIzNjAwMTMzZmU1NzAiLCJpYXQiOjE2ODA1MjI2MjcsImV4cCI6MTY4MTczMjIyN30.o95uQAsLLXkKapQuegwZnOjwLwi5er5rwl3OoGIczs8";
const MovieDetails = () => {
  const params = useParams();
  //   const navigate = useNavigate();

  const [movie, setMovies] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchMovieDetail();
    fetchMovieDetail("comments");
  }, [params.movieId]);

  const fetchMovieDetail = async (type = "movie") => {
    const commentOption = {
      headers: {
        Authorization: AUTH_KEY
      }
    };
    let url = type === "comments" ? COMMENT_API_URL : MOVIE_API_URL;
    let option =
      type === "comments"
        ? {
            headers: {
              Authorization: AUTH_KEY
            }
          }
        : {};
    console.log(option);
    try {
      const response = await fetch(`${url}${params.movieId}`, option);

      if (response.ok) {
        const data = await response.json();
        type === "comments" ? setComments(data) : setMovies(data);
      }
    } catch (error) {
      setMovies("error");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-3">
          {movie ? (
            <div>
              <h2 className="mt-5">{movie.Title}</h2>
              <div className="d-flex flex-column justify-content-center">
                <img src={movie.Poster} alt="movie dish" />
                <p>{movie.Actors}</p>
              </div>

              <span className="badge text-bg-info">{movie.Rated}</span>
              <span className="badge text-bg-secondary">{movie.Released}</span>
              <MovieComments commentsArr={comments} />
            </div>
          ) : movie === "error" ? (
            <div className="alert alert-success" role="alert">
              No data retrived
            </div>
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
