import React from 'react';
import '/src/styles/BackgroundVideo.css';

const BackgroundVideo: React.FC = () => (
    <video
        className="video-bg"
autoPlay
loop
muted
playsInline
>
<source src="trailer.mp4" type="video/mp4" />
    您的浏览器不支持视频标签。
  </video>
);

export default BackgroundVideo;