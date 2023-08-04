import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OurWorks from "../components/ourWorks/OurWorks";
import Reviewes from "../components/reviewes/Reviewes";

const Portfolio = () => {
  return (
    <div>
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
      {/* Same as */}
      <ToastContainer />
      <OurWorks />
      <Reviewes />
    </div>
  );
};

export default Portfolio;
