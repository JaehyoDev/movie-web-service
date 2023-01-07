import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <MovieDetail
          url={detail.url}
          rating={detail.rating}
          runtime={detail.runtime}
          coverImg={detail.medium_cover_image}
          title={detail.title_long}
          desc={detail.description_full}
          genres={detail.genres}
        />
      )}
    </div>
  );
}

export default Detail;
