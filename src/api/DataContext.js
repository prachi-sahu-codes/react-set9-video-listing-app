import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [liked, setLiked] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/videos");

      if (response.status === 200) {
        setVideos(response.data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        videos,
        watchLater,
        setWatchLater,
        liked,
        setLiked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
