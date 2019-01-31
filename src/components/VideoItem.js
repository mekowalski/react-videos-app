import React from 'react';

const VideoItem = ({ video }) => {
  //title and thumbnail of video
  //what different props to refer to
  return <div>{video.snippet.title}</div>
};

export default VideoItem
