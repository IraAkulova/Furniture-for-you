import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import Advantages from '../components/advantages/Advantages';
import css from "./Home.module.css";

const Home = () => {    
    return (
      <div className={css.homeContainer}>
        <Hero/>
        <Features/>
        <Advantages/>
      </div>
    );
};

export default Home;