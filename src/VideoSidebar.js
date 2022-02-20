import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <IconButton
          color="inherit"
          onClick={(e) => (liked ? setLiked(false) : setLiked(true))}
        >
          {liked ? (
            <FavoriteIcon fontSize="medium" />
          ) : (
            <FavoriteBorderIcon fontSize="medium" />
          )}
        </IconButton>
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSidebar__button">
        <IconButton color="inherit">
          <MessageIcon fontSize="medium" />
        </IconButton>
        <p>{messages}</p>
      </div>

      <div className="videoSidebar__button">
        <IconButton color="inherit">
          <ShareIcon fontSize="medium" />
        </IconButton>
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
