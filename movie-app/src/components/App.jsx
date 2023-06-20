import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import  Movies from "../pages/Movies";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movie">
        <Route index element={<Movies />} />
        <Route path=":id" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
