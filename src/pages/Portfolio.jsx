import OurWorks from "../components/ourWorks/OurWorks"
import Reviwes from "../components/reviwes/Reviwes";
import css from "./Portfolio.module.css"

const Portfolio = () => {
  return (
    <div className={css.portfolioContainer}>
      <OurWorks />
      <Reviwes />
    </div>
  );
};

export default Portfolio;
