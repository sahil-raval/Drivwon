import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";

export function useAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const bgMusicRef = useRef<Howl | null>(null);
  const clickSoundRef = useRef<Howl | null>(null);
  const hoverSoundRef = useRef<Howl | null>(null);

  // User interaction unlocks audio
  useEffect(() => {
    const handleFirstInteraction = async () => {
      if (hasInteracted) return;

      setHasInteracted(true);

      // Unlock audio context
      if (Howler.ctx && Howler.ctx.state !== "running") {
        await Howler.ctx.resume();
      }

      // Create sounds ONLY after interaction
      clickSoundRef.current = new Howl({
        src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
        volume: 0.4,
        rate: 1.5,
      });

      hoverSoundRef.current = new Howl({
        src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
        volume: 0.5,
      });

      bgMusicRef.current = new Howl({
        src: ["/background.mp3"],
        loop: true,
        html5: true,
        volume: 0,
        preload: true,
      });

      if (!isMuted && bgMusicRef.current) {
        const id = bgMusicRef.current.play();
        bgMusicRef.current.fade(0, 0.2, 3000, id);
      }
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasInteracted, isMuted]);

  const playHover = () => {
    if (!isMuted) hoverSoundRef.current?.play();
  };

  const playClick = () => {
    if (!isMuted) clickSoundRef.current?.play();
  };

  const toggleMute = () => {
    if (!bgMusicRef.current) return;

    if (isMuted) {
      setIsMuted(false);
      Howler.mute(false);
      const id = bgMusicRef.current.play();
      bgMusicRef.current.fade(0, 0.2, 1000, id);
    } else {
      setIsMuted(true);
      bgMusicRef.current.fade(0.2, 0, 1000);
      setTimeout(() => Howler.mute(true), 1000);
    }
  };

  return { playHover, playClick, toggleMute, isMuted };
}
