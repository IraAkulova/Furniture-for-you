import { Routes, Route } from 'react-router-dom';
import { lazy} from 'react';

const SharedLayout = lazy(() => import('./sharedLayout/SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Contacts = lazy(() => import("../pages/Contacts"));
// const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="movies" element={<Movies />} /> */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
