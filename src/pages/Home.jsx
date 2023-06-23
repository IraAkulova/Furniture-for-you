// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

// const KEY = '136e9303af57d83b29ddf02ef48e9efe';
// const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;

const Home = () => {
  // const location = useLocation();
  // const [films, setFilms] = useState([]);
  // const [error, setError] = useState(null);
  
    // useEffect(() => {
    // fetch(`${BASE_URL}`)
    //   .then(response => response.json())
    //   .then(films => {
    //     if (films.results.length === 0) {
    //       return Promise.reject(new Error(`Oops, there is no trending movies`));
    //     };
    //     setFilms(films.results)
    //   })
    //   .catch(error => setError(error));
    // }, []);
  
    // useEffect(() => {}, [])
    
    return (
      <div>
        {/* {error && films.length === 0 && <h2>{error.message}</h2>} */}
        <div className={css.hero}>
          <h1 className={css.heroHeader}>
            Make your interior more minimalistic & modern
          </h1>
          <h3 className={css.heroDescr}>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </h3>
          <button className={css.heroBtn} type="button">
            Contact Us
          </button>
          {/* {films.length > 0 && */}
          {/* (<ul>
              {films.map(film => {
                return (
                  <li key={film.id}>
                    <Link to={`movies/${film.id}`} state={{ from: location }}>
                      {film.title || film.name}
                    </Link>
                  </li>
                );
              })}
            </ul>)} */}
        </div>
        <div>
          <h2>Why Choosing Us</h2>
          <ul>
            <li>
              <h4>Luxury facilities</h4>
              <p>
                The advantage of hiring a workspace with us is that givees you
                comfortable service and all-around facilities.
              </p>
            </li>
            <li>
              <h4>Affordable Price</h4>
              <p>
                You can get a workspace of the highst quality at an affordable
                price and still enjoy the facilities that are oly here.
              </p>
            </li>
            <li>
              <h4>Many Choices</h4>
              <p>
                We provide many unique work space choices so that you can choose
                the workspace to your liking.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Our advantages</h2>
          <ul>
            <li>
              <img src="#" alt="" />
              <h4>We provide you the best experience</h4>
              <p>
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </p>
            </li>
            <li>
              <img src="#" alt="" />
              <h4>Very serious materials for making furniture</h4>
              <p>
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Home;