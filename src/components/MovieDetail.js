import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import defaultCoverImg from "./images/no-image-available.jpg";

const MovieDetail = ({
  url,
  rating,
  likes,
  runtime,
  coverImg,
  title,
  desc,
  genres,
}) => {
  const navigate = useNavigate();
  const handleImgError = (e) => {
    e.target.src = defaultCoverImg;
  };

  return (
    <div className={styles.main}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <div className={styles.metadata}>
        <img
          className={coverImg}
          src={coverImg}
          onError={handleImgError}
          alt="Poster"
        />
        <div className={styles.movieInfo}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.rating}>
            <FontAwesomeIcon icon={faStar} /> {rating} / 10
          </p>
          <p className={styles.likes}>
            <FontAwesomeIcon icon={faHeart} /> {likes}
          </p>
          <p className={styles.runtime}>
            <FontAwesomeIcon icon={faClock} />
            {` ${Math.floor(runtime / 60)}`}h {runtime % 60} min
          </p>
          {genres &&
            genres.map((genre) => (
              <p key={genre} className={styles.genre}>
                #{genre}
              </p>
            ))}
        </div>
      </div>
      <div className={styles.synopsis}>
        <h2>Synopsis</h2>
        {desc ? <p className={styles.desc}>&nbsp;{desc}</p> : "No Information"}
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number,
  rating: PropTypes.number,
};

export default MovieDetail;
