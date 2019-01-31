import './VideoItem.css';
import React from 'react';

//destructure cb()
//add event handler
//call cb() with the video that is selected
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem
