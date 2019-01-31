//responsible for showing video player, title and description
import React from 'react';

//TypeError: Cannot read property 'snippet' of null
//currently video is defaulted to null, cannot read .snippet.title on null
//fix by adding a simple check in VideoDetail with temporary solution
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return <div>{video.snippet.title}</div>
}

export default VideoDetail
