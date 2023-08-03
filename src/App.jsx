import { Routes, Route } from 'react-router-dom';
import { lazy} from 'react';

const SharedLayout = lazy(() => import('./components/sharedLayout/SharedLayout'));
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
