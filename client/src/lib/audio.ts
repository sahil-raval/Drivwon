import { useEffect, useState } from "react";
import { Howl } from "howler";

// Updated with sounds closer to the reference style (crisp UI click, deep ambience)

const hoverSound = new Howl({
  // Short, high-tech blip
  src: ['https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3'], 
  volume: 0.1,
});

const clickSound = new Howl({
  // Sharp, mechanical click (similar to reference)
  src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'],
  volume: 0.4,
  rate: 1.5, // Pitch it up slightly for a crisper feel
});

// Background ambience - Deep, immersive drone
const bgMusic = new Howl({
  src: ['https://cdn.pixabay.com/download/audio/2022/10/25/audio_9486c31043.mp3?filename=space-drone-27835.mp3'], 
  loop: true,
  volume: 0.2, // Subtle background
  autoplay: false,
  html5: true, // Use HTML5 Audio to support larger files/streaming
});

export function useAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Browsers block auto-playing audio until interaction
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (!isMuted) {
          bgMusic.fade(0, 0.2, 3000); // Slow fade in
          bgMusic.play();
        }
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted, isMuted]);

  const playHover = () => {
    if (!isMuted) hoverSound.play();
  };

  const playClick = () => {
    if (!isMuted) clickSound.play();
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      Howler.mute(false);
      if (hasInteracted && !bgMusic.playing()) {
         bgMusic.fade(0, 0.2, 1000).play();
      }
    } else {
      setIsMuted(true);
      bgMusic.fade(0.2, 0, 1000);
      setTimeout(() => Howler.mute(true), 1000);
    }
  };

  return { playHover, playClick, toggleMute, isMuted };
}
