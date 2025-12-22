import { useEffect, useState, useRef } from "react";
import { Howl, Howler } from "howler";

export function useAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Ref for background music
  const bgMusicRef = useRef<Howl | null>(null);

  // Click sound (sharp mechanical click)
  const clickSound = useRef(
    new Howl({
      src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
      volume: 0.4,
      rate: 1.5,
    })
  ).current;

  // Hover sound (optional)
  const hoverSound = useRef(
    new Howl({
      src: ["https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3"],
      volume: 0.1,
    })
  ).current;

  // Initialize background music on mount
  useEffect(() => {
    bgMusicRef.current = new Howl({
      src: ["/background.mp3"], // public folder path
      loop: true,
      html5: true,
      preload: true,
      volume: 0, // start from 0 and fade in
    });

    return () => {
      bgMusicRef.current?.unload();
    };
  }, []);

  // Play background music after first user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);

        if (Howler.ctx && Howler.ctx.state === "suspended") {
          Howler.ctx.resume().then(() => {
            if (!isMuted && bgMusicRef.current && !bgMusicRef.current.playing()) {
              const id = bgMusicRef.current.play();
              bgMusicRef.current.fade(0, 0.2, 3000, id);
            }
          });
        } else {
          if (!isMuted && bgMusicRef.current && !bgMusicRef.current.playing()) {
            const id = bgMusicRef.current.play();
            bgMusicRef.current.fade(0, 0.2, 3000, id);
          }
        }
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted, isMuted]);

  // Hover sound
  const playHover = () => {
    if (!isMuted) hoverSound.play();
  };

  // Click sound
  const playClick = () => {
    if (!isMuted) clickSound.play();
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      Howler.mute(false);
      if (hasInteracted && bgMusicRef.current && !bgMusicRef.current.playing()) {
        const id = bgMusicRef.current.play();
        bgMusicRef.current.fade(0, 0.2, 1000, id);
      }
    } else {
      setIsMuted(true);
      if (bgMusicRef.current) {
        bgMusicRef.current.fade(bgMusicRef.current.volume(), 0, 1000);
      }
      setTimeout(() => Howler.mute(true), 1000);
    }
  };

  return { playHover, playClick, toggleMute, isMuted };
}
