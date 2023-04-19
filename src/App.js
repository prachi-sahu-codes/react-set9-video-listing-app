import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./Component/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Videos } from "./pages/Videos";
import { VideoDetail } from "./pages/VideoDetail";
import { LikedVideos } from "./pages/LikedVideos";
import { WatchLater } from "./pages/WatchLater";
import { useData } from "./api/DataContext";

export { useData };

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/later" element={<WatchLater />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detail/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
