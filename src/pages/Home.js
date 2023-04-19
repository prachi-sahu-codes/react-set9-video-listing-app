import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  return (
    <>
      <div className="home-content">
        <h1 className="page-heading">Welcome to Video Library!</h1>
        <h2>
          To browse all videos, click the below button or go to the videos page
          .
        </h2>
        <Link to="/videos">
          <button>Explore Videos</button>
        </Link>
      </div>
    </>
  );
};
