import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

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
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary ? movie.summary : "None"}</p>
              <ul>
                {movie.genres
                  ? movie.genres.map((genre) => <li key={genre}>{genre}</li>)
                  : "None"}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
