export function setupVideo(videoElement, videoItem) {
  if (!videoElement || !videoItem) return;

  // mute
  videoElement.muted = videoItem.mute ?? true;
  videoElement.volume = 0;
  videoElement.onvolumechange = () => {
    videoElement.muted = true;
    videoElement.volume = 0;
  };

  // speed
  videoElement.playbackRate = videoItem.speed ?? 1;
}