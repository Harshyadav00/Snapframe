import { useRef, useState } from "react";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const PlayPauseVideo = (prop) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  const handleMuteVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        muted
        loop
        height="350px"
        width="100%"
        src={prop.prop.src}
      ></video>

      <button className="mute-button" onClick={handleMuteVideo}>
        {!isMuted ? <FaVolumeHigh /> : <FaVolumeXmark />}
      </button>
    </div>
  );
};

export default PlayPauseVideo;
