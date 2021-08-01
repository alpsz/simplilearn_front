import React from 'react';

const VideoDetail = ({ videos }) => {
  if (!videos) {
    return <div>Loading...</div>;
  }

  //const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    videos.map((video) => {
        var url = video.replace("youtu.be","youtube.com/embed");
        return (
            <div style = {{margin:20}}>
                <div className="ui embed">
                    <iframe title="video player" src={url} />
                </div>
            </div>
        )
    })
    
  );
};

export default VideoDetail;