import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  })
  {
    //this div wraps each individual item that has to have a className='ui relaxed divided list'
  }
  return (
    <div className='ui relaxed divided list'>
      {renderedList}
    </div>
  );
}

export default VideoList
