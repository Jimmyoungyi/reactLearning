import React from 'react';

const VideoListItem = ({video,changeVideo})=>{
  const IMGURL = video.snippet.thumbnails.default.url
  return (
    <li className="video-list-item" onClick={() => changeVideo(video)}>
      <img src={IMGURL} alt={video.snippet.title} />
      <p>{video.snippet.title}</p>
    </li>
  );
}

export default VideoListItem
