import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import Advantages from "../components/advantages/Advantages";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Hero />
      <Features />
      <Advantages />
    </div>
  );
};

export default Home;
