import React from 'react';

const VideoDetail = (props)=>{
  if(!props.selectedVideo){
    return (<div> Loading </div>)
  }

  const URL = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
  return (
    <div className="video-detail">
      <div className="ratio-box">
        <iframe title="load-video" src={URL}></iframe>
      </div>
      <p>{props.selectedVideo.snippet.title}</p>
      <p>{props.selectedVideo.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;
