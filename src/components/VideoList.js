import React from 'react';

const VideoList = ({ videos }) => {
  //fix: rather then reference props, destructure instead, just videos prop out props object
  //also don't want number of videos renders, want to render the videos out as a list
  return <div>{videos.length}</div>
};

export default VideoList
