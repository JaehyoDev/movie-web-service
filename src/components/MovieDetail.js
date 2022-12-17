import PropTypes from "prop-types";

function MovieDetail({
  url,
  year,
  rating,
  runtime,
  coverImg,
  backImg,
  title,
  desc,
  genres,
}) {
  return (
    <div>
      <img src={backImg} />
      <img src={coverImg} alt={coverImg} />
      <div>
        {title} ({year})
      </div>
      <div>{genres && genres.map((genre) => <p key={genre}>{genre}</p>)}</div>
      <p>
        {runtime ? `${runtime} Minute` : "None"} | ⭐ {rating}
      </p>
      <div>{desc}</div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number,
  rating: PropTypes.number,
};

export default MovieDetail;
