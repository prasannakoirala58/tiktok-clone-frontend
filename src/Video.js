import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    // if video is playing, pause it.
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
      // otherwise if it is not playing, play it
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoClick}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>

      {/* VideoFooter */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* VideoSidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
