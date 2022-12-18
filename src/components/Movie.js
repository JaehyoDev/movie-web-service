import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

// const Movie = ({
//   id,
//   coverImg,
//   title,
//   year,
//   rating,
//   genres,
//   handleImgError,
// }) => {
//   return (
//     <li className={styles.movieTitle}>
//       <Link to={`/movie/${id}`}>
//         <img
//           className={styles.coverImg}
//           src={coverImg}
//           alt={title}
//           onError={handleImgError}
//         />
//         <h2 className={styles.movieTitle}>
//           {title.length < 21 ? title : `${title.substring(0, 21)}...`}
//         </h2>
//         <p className={styles.year}>{year}</p>
//         <p className={styles.rating}>
//           <i className="fa-solid fa-star"></i>&nbsp;
//           {rating}
//         </p>
//         <ul>
//           {genres
//             ? genres.map((genre) => <li key={genre}>{genre}</li>)
//             : "None"}
//         </ul>
//       </Link>
//     </li>
//   );
// };

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary ? summary : "None"}</p>
      <ul>
        {genres ? genres.map((genre) => <li key={genre}>{genre}</li>) : "None"}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
