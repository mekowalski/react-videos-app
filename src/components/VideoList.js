import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  })
  return <div>{renderedList}</div>
};

export default VideoList

//referencing
//items tag => snippet => title
//video.snippet.title
