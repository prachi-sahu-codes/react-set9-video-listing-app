import { useData } from "../App";
import { Card } from "../Component/Card";

export const WatchLater = () => {
  const { watchLater } = useData();
  return (
    <>
      <h1 className="page-heading">Watch Later Videos!</h1>
      {watchLater.length > 0 ? (
        <ul className="card-list">
          {watchLater.map((video) => (
            <li key={video.id} className="card">
              <Card {...video} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="sub-heading">
          Start adding videos to watch later see them here!
        </h2>
      )}
    </>
  );
};
