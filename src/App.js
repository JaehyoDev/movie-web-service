import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import NewMovies from "./routes/NewMovies";
import PopularMovies from "./routes/PopularMovies";
import HighRatedMovies from "./routes/HighRatedMovies";
import Detail from "./routes/Detail";
import "./css/style.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/new_movies" element={<NewMovies />} />
      <Route path="/popular_movies" element={<PopularMovies />} />
      <Route path="/highRated_movies" element={<HighRatedMovies />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
