import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios.js";

// App deployed to vercel
// https://vercel.com/prasannakoirala58/tiktok-clone/CmBmCHhYqctkehhtGqpdbHRfUXNf

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      console.log(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  // console.log(videos);

  return (
    // BEM class naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            key={likes}
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
