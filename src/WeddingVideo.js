import ReactPlayer from 'react-player';
import './App.css';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://drive.google.com/file/d/1uecO6mYIh_FctC_8hlxU18cB3o0MJIMe/view';
function WeddingVideo() {
  const playerRef = useRef(null);
  return (
    <div className="VideoStyle">
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} width="203px" controls={true}
      />
      {/* <ReactPlayer src={'./D&A Save the date HD'} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')} />*/}
    </div>
  )
};
export default WeddingVideo;
