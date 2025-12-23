import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

// Hover sound: Short, high-tech blip
const hoverSound = new Howl({
  src: [
    "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
    "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
  ],
  volume: 0.1,
  preload: false,
  onloaderror: () => console.log("Hover sound failed to load")
});

// Click sound: Sharp, mechanical click
const clickSound = new Howl({
  src: [
    "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
    "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
  ],
  volume: 0.4,
  rate: 1.5,
  preload: false,
  onloaderror: () => console.log("Click sound failed to load")
});

// Background ambience: Using a more reliable source
const bgMusic = new Howl({
  src: ["/background.mp3"],
  loop: true,
  volume: 0.15,
  autoplay: false,
  html5: true,
  preload: true,
  onloaderror: () => console.log("Background music failed to load"),
  onload: () => console.log("Background music loaded successfully")
});

let audioInitialized = false;

export function useAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        
        // Initialize and play background music
        if (!audioInitialized) {
          audioInitialized = true;
          
          // Resume audio context if suspended
          if (Howler.ctx && typeof Howler.ctx.resume === "function") {
            Howler.ctx.resume().catch((err) => {
              console.log("Audio context resume failed:", err);
            });
          }
          
          // Attempt to play background music
          if (!isMuted) {
            setTimeout(() => {
              if (!bgMusic.playing()) {
                bgMusic.play();
                bgMusic.fade(0, 0.15, 3000);
              }
            }, 100);
          }
        }
      }
    };

    // Multiple event listeners for better compatibility
    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && bgMusic.playing()) {
        bgMusic.pause();
      } else if (!document.hidden && hasInteracted && !isMuted && !bgMusic.playing()) {
        bgMusic.play();
      }
    });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted, isMuted]);

  const playHover = () => {
    if (!isMuted) {
      try {
        hoverSound.play();
      } catch (err) {
        console.log("Hover sound play failed:", err);
      }
    }
  };

  const playClick = () => {
    if (!isMuted) {
      try {
        clickSound.play();
      } catch (err) {
        console.log("Click sound play failed:", err);
      }
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      Howler.mute(false);
      if (hasInteracted && !bgMusic.playing()) {
        bgMusic.fade(0, 0.15, 1000).play();
      }
    } else {
      setIsMuted(true);
      if (bgMusic.playing()) {
        bgMusic.fade(0.15, 0, 1000);
      }
      setTimeout(() => Howler.mute(true), 1000);
    }
  };

  return { playHover, playClick, toggleMute, isMuted };
}
