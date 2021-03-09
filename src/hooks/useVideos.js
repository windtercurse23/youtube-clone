import { useState, useEffect } from "react";
import youtube from "../api/youtube";
function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyANAPgvReooS0K9_hu031z7757qCumWuxY",
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
}

export default useVideos;
