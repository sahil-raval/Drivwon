import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

// We'll use a simple synth for UI sounds if no assets are provided
// but for now let's set up the structure to handle both
const hoverSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], // Futuristic click/hover
  volume: 0.2,
});

const clickSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'], // High tech select
  volume: 0.3,
});

// Background ambience - looped drone
const bgMusic = new Howl({
  src: ['background.mp3'], // Space drone
  loop: true,
  volume: 0.1,
  autoplay: false,
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
          bgMusic.fade(0, 0.1, 2000);
          bgMusic.play();
        }
      }
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
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
      if (hasInteracted) bgMusic.fade(0, 0.1, 1000).play();
    } else {
      setIsMuted(true);
      bgMusic.fade(0.1, 0, 1000);
      setTimeout(() => Howler.mute(true), 1000);
    }
  };

  return { playHover, playClick, toggleMute, isMuted };
}
