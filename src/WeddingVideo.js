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
    <div className="VideoStyle">
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} width="203px" playing={false} controls={true}
      />
      {/* <ReactPlayer src={'./D&A Save the date HD'} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')} />*/}
    </div>
  )
};
export default WeddingVideo;
