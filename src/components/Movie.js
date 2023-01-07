import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import defaultCoverImg from "./images/no-image-available.jpg";

const Movie = ({ id, coverImg, title, year, rating, genres }) => {
  const handleImgError = (e) => {
    e.target.src = defaultCoverImg;
  };

  return (
    <li className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img
          className={styles.coverImg}
          src={coverImg}
          onError={handleImgError}
          alt="Poster"
        />
        <h2 className={styles.title}>
          {title.length < 20 ? title : `${title.substring(0, 20)}...`}
        </h2>
        <p className={styles.info}>
          {year}
          &nbsp;&nbsp;&nbsp;
          {"|"}
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faStar} className={styles.rating} /> {rating}
        </p>
        <ul>
          {genres
            ? genres.map((genre) => (
                <span key={genre}>
                  <li className={styles.genres}>{genre}</li>
                  <span>&nbsp;</span>
                </span>
              ))
            : "None"}
        </ul>
      </Link>
    </li>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
