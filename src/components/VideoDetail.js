//responsible for showing video player, title and description
import React from 'react';

//destructure video title from props
//props.video => video
const VideoDetail = ({ video }) => {
  return <div>{video.snippet.title}</div>
}

export default VideoDetail
