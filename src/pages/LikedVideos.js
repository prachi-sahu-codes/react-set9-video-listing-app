import { useData } from "../App";
import { Card } from "../Component/Card";

export const LikedVideos = () => {
  const { liked } = useData();
  return (
    <>
      <h1 className="page-heading">Liked Videos!</h1>
      {liked.length > 0 ? (
        <ul className="card-list">
          {liked.map((video) => (
            <li key={video.id} className="card">
              <Card {...video} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="sub-heading">Start liking videos to see them here!</h2>
      )}
    </>
  );
};
