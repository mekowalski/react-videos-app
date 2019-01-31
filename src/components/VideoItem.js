import React from 'react';

const VideoItem = ({ video }) => {
  //title and thumbnail of video
  //now try to get image(thumbnail) to display
  //img tag refs the thumbnail and pass it to src property
  //root div needs to have className='item'
  return (
    <div className='item'>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
}

export default VideoItem
