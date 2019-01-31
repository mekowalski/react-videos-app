import React from 'react';
import VideoItem from './VideoItem';

//map over videos array, and render 1 single video item component
const VideoList = ({ videos }) => {
  //map over this array, return a brand new array
  //assign the list of video item components
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  })
  //print out renderedList
  return <div>{renderedList}</div>
};

export default VideoList
