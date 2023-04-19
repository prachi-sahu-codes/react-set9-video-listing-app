import { useParams } from "react-router";
import { useData } from "../App";
import { Card } from "../Component/Card";

export const VideoDetail = () => {
  const { videos } = useData();
  const { id } = useParams();
  const findSelectedVideo = videos.find((video) => video.id === Number(id));
  return (
    <div className="videoDetail ">
      <h1>Video Detail</h1>
      <div className="card">
        <Card {...findSelectedVideo} noDetail />
      </div>
    </div>
  );
};
