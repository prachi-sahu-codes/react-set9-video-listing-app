import { useData } from "../App.js";
import { Card } from "../Component/Card.js";

export const Videos = () => {
  const { videos } = useData();
  return (
    <>
      <h1 className="page-heading">All Videos!</h1>
      <ul className="card-list">
        {videos.map((video) => (
          <li key={video.id} className="card">
            <Card {...video} />
          </li>
        ))}
      </ul>
    </>
  );
};
