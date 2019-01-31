import React from 'react';

const VideoItem = ({ video }) => {
  //title and thumbnail of video
  //now try to get image(thumbnail) to display
  //img tag refs the thumbnail and pass it to src property
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
}

export default VideoItem

//referencing
//items tag => snippet => thumbnail => 3 choices(medium quality) => url
//video.snippet.thumbnails.medium.url
