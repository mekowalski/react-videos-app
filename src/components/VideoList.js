import React from 'react';
import VideoItem from './VideoItem';

//destructure onVideoSelect, that is a cb() from App to VideoList
//pass cb() onto VideoItem
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  })
  return (
    <div className='ui relaxed divided list'>
      {renderedList}
    </div>
  );
}

export default VideoList
