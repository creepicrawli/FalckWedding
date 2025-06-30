import ReactPlayer from 'react-player';
import './App.css';
import React, { useEffect, useRef } from 'react';
const VIDEO_PATH = 'https://d22sfwj1wctkr8.cloudfront.net/DASaveDate.mp4';
function WeddingVideo() {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      // Trigger loading by initializing the player
      playerRef.current.getInternalPlayer();
    }
  }, []);

  return (
    <div style={{ height: 200 }} className="VideoStyle">

    </div>
  )
};
export default WeddingVideo;
