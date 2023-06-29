import OurWorks from "../components/ourWorks/OurWorks"
import Reviewes from "../components/reviewes/Reviewes";
import css from "./Portfolio.module.css"

const Portfolio = () => {
  return (
    <div className={css.portfolioContainer}>
      <OurWorks />
      <Reviewes />
    </div>
  );
};

export default Portfolio;
