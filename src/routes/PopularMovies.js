import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import styles from "../css/Home.module.css";

function PopularMovies() {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async () => {
    const popularMoviesjson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&sort_by=like_count&limit=30`
      )
    ).json();
    setPopularMovies(popularMoviesjson.data.movies);
  };

  useEffect(() => {
    getPopularMovies();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div>
          <Navbar />
          <Banner />
          <section className={styles.movie}>
            <h2 className={styles.title}>Popular Movies</h2>
            <ul className={styles.contents}>
              {popularMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.medium_cover_image}
                  year={movie.year}
                  rating={movie.rating}
                  genres={movie.genres}
                />
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}

export default PopularMovies;
