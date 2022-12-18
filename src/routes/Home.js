import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "../components/Movie";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import styles from "../css/Home.module.css";

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  //const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [highRatedMovies, setHighRatedMovies] = useState([]);

  // 1번 방법
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setMovies(json.data.movies));
  //     setLoading(false);
  // }, []);

  // 2번 방법
  // const getMovies = async () => {
  //   const response = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //   );
  //   const json = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  // 3번 방법
  // const getMovies = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //     )
  //   ).json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  const getNewMovies = async () => {
    const newMoviesjson = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=5`)
    ).json();
    setNewMovies(newMoviesjson.data.movies);
  };

  const getPopularMovies = async () => {
    const popularMoviesjson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&sort_by=like_count&limit=5`
      )
    ).json();
    setPopularMovies(popularMoviesjson.data.movies);
  };

  const getHighRatedMovies = async () => {
    const highRatedMoviesjson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=5`
      )
    ).json();
    setHighRatedMovies(highRatedMoviesjson.data.movies);
  };

  useEffect(() => {
    getNewMovies();
    getPopularMovies();
    getHighRatedMovies();
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
            <h2
              className={styles.title}
              onClick={() => navigate("/movie/new_movies")}
            >
              New Movies →
            </h2>
            <ul className={styles.contents}>
              {newMovies.map((movie) => (
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

          <section className={styles.movie}>
            <h2
              className={styles.title}
              onClick={() => navigate("/movie/popular_movies")}
            >
              Most Popular Movies →
            </h2>
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

          <section className={styles.movie}>
            <h2
              className={styles.title}
              onClick={() => navigate("/movie/highRated_movies")}
            >
              High Rated Movies →
            </h2>
            <ul className={styles.contents}>
              {highRatedMovies.map((movie) => (
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

          {/* {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))} */}
        </div>
      )}
    </div>
  );
}

export default Home;
