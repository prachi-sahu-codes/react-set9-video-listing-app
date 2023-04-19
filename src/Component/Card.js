import { Link } from "react-router-dom";
import { useData } from "../App";

export const Card = ({
  id,
  title,
  description,
  url,
  thumbnail,
  duration,
  noDetail,
}) => {
  const { liked, setLiked, watchLater, setWatchLater } = useData();

  const findLiked = liked.findIndex((video) => video.id === id);
  const likedHandler = (obj) => {
    if (findLiked === -1) {
      setLiked((liked) => [...liked, obj]);
    }
  };

  const findLater = watchLater.findIndex((video) => video.id === id);
  const laterHandler = (obj) => {
    if (findLater === -1) {
      setWatchLater((watchLater) => [...watchLater, obj]);
    }
  };

  return (
    <>
      <img src={thumbnail} alt={title} className="card-img" />
      <h3>{title}</h3>
      <Link to={`/detail/${id}`} className="card-link">
        Watch here
      </Link>
      {noDetail && (
        <div>
          <p>
            <span style={{ fontWeight: "600" }}>Description: </span>
            {description}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Duration: </span>
            {duration} min
          </p>
        </div>
      )}
      <div className="btn-link">
        {findLiked === -1 ? (
          <button
            onClick={() =>
              likedHandler({ id, title, description, url, thumbnail, duration })
            }
          >
            Like video
          </button>
        ) : (
          <button>Already Liked</button>
        )}
        {findLater === -1 ? (
          <button
            onClick={() =>
              laterHandler({ id, title, description, url, thumbnail, duration })
            }
          >
            Add to watch later
          </button>
        ) : (
          <button>Added to watch later</button>
        )}
      </div>
    </>
  );
};
