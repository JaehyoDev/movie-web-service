import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/MovieDetail.module.css";

const default_coverImg = "./images/no-image-available.jpg";

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
  return (
    <div className={styles.main}>
      <div className={styles.metadata}>
        <img src={coverImg} alt={coverImg} />
        <div className={styles.movieInfo}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.rating}>
            <i className="fa-solid fa-star"></i> {rating} / 10
          </p>
          <p className={styles.likes}>
            <i className="fa-solid fa-heart"></i> {likes}
          </p>
          <p className={styles.runtime}>
            <i className="fa-solid fa-clock"></i>
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
        <h3>Synopsis</h3>
        {desc ? <p className={styles.desc}>{desc}</p> : "No Information"}
      </div>

      <button className={styles.back} onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left-long"></i>
        &nbsp;back
      </button>
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
