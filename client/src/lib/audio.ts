import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

// Hover sound: Short, high-tech blip
// const hoverSound = new Howl({
//   src: ['https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3'], 
//   volume: 0.1,
// });

// Click sound: Sharp, mechanical click
const clickSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'],
  volume: 0.4,
  rate: 1.5,
});

// Background ambience: Deep, immersive drone
const bgMusic = new Howl({
  src: "/background.mp3", 
  loop: true,
  volume: 0.2,
  autoplay: false,
  html5: true,
  preload: true
});

export function useAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        
        // Resume audio context for both mobile and desktop
        if (Howler.ctx && Howler.ctx.state === 'suspended') {
          Howler.ctx.resume().then(() => {
            if (!isMuted && !bgMusic.playing()) {
              bgMusic.play();
              bgMusic.fade(0, 0.2, 3000);
            }
          });
        } else {
          if (!isMuted && !bgMusic.playing()) {
            bgMusic.play();
            bgMusic.fade(0, 0.2, 3000);
          }
        }
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
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
