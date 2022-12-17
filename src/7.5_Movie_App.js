import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./routes/7.4 Home";
import Detail from "./routes/7.4 Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Detail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
