// import css from './Home.module.css';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import Advantages from '../components/advantages/Advantages'

const Home = () => {    
    return (
      <div>
        <Hero/>
        <Features/>
        <Advantages/>
      </div>
    );
};

export default Home;