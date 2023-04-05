import { Link } from "react-router-dom";
const SliderItem = (props) => (
  <Link to={`/details/${props.movieId}`} className="slider-item me-2">
    <img src={props.image} />
  </Link>
);

export default SliderItem;
