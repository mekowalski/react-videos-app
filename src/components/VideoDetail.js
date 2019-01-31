import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  //ui embed is a semantic stating that an embedded video player is about to be inside
  //how to pass iframe its src
  //Network-Previews items => videos => id => videoId gives specific id to each video
  //video.id.videoId
  return (
    <div>
    <div className='ui embed'>
      <iframe src={} />
    <div/>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail
